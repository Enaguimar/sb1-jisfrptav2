import express from 'express';
import cors from 'cors';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import bcrypt from 'bcryptjs';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000;

// Configuración de multer para subida de archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, join(__dirname, 'uploads'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(join(__dirname, 'uploads')));

// Base de datos
let db;

async function initializeDatabase() {
  db = await open({
    filename: join(__dirname, 'database.sqlite'),
    driver: sqlite3.Database
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT
    );

    CREATE TABLE IF NOT EXISTS photos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      url TEXT NOT NULL,
      title TEXT NOT NULL,
      category TEXT NOT NULL,
      date TEXT NOT NULL
    );
  `);

  // Crear usuario admin si no existe
  const admin = await db.get('SELECT * FROM users WHERE username = ?', ['admin']);
  if (!admin) {
    const hashedPassword = await bcrypt.hash('valleChicote2024', 10);
    await db.run('INSERT INTO users (username, password) VALUES (?, ?)', ['admin', hashedPassword]);
  }
}

// Middleware de autenticación
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  jwt.verify(token, process.env.JWT_SECRET || 'secret', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido' });
    }
    req.user = user;
    next();
  });
};

// Rutas
app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await db.get('SELECT * FROM users WHERE username = ?', [username]);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '24h' }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

app.get('/api/photos', async (req, res) => {
  try {
    const photos = await db.all('SELECT * FROM photos ORDER BY date DESC');
    res.json(photos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las fotos' });
  }
});

app.post('/api/photos', authenticateToken, upload.single('photo'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No se ha proporcionado ningún archivo' });
  }

  try {
    const { title = 'Sin título', category = 'sin-categoria' } = req.body;
    const url = `/uploads/${req.file.filename}`;
    const date = new Date().toISOString().split('T')[0];

    await db.run(
      'INSERT INTO photos (url, title, category, date) VALUES (?, ?, ?, ?)',
      [url, title, category, date]
    );

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error al subir la foto' });
  }
});

app.put('/api/photos/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { title, category } = req.body;

  try {
    await db.run(
      'UPDATE photos SET title = ?, category = ? WHERE id = ?',
      [title, category, id]
    );
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la foto' });
  }
});

app.delete('/api/photos/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;

  try {
    await db.run('DELETE FROM photos WHERE id = ?', [id]);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la foto' });
  }
});

// Iniciar servidor
initializeDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });
}).catch(console.error);