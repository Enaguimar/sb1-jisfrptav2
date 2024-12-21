import Database from 'better-sqlite3';
import bcrypt from 'bcryptjs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const db = new Database(join(__dirname, 'database.sqlite'));

// Asegurarse de que la tabla existe
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  )
`);

async function setupAdmin() {
  const username = 'admin';
  const password = 'valleChicote2024';
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Intentar insertar el usuario admin
    db.prepare(`
      INSERT OR REPLACE INTO users (username, password)
      VALUES (?, ?)
    `).run(username, hashedPassword);
    
    console.log('Usuario administrador creado/actualizado exitosamente');
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
  } catch (error) {
    console.error('Error al crear el usuario administrador:', error);
  }
}

setupAdmin();