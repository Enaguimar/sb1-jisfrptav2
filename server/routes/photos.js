import express from 'express';
import { db } from '../config/database.js';
import { authenticateToken } from '../middleware/auth.js';
import { upload } from '../config/multer.js';

const router = express.Router();

// Obtener todas las fotos
router.get('/', authenticateToken, (req, res) => {
  try {
    const photos = db.prepare('SELECT * FROM photos ORDER BY date DESC').all();
    res.json(photos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las fotos' });
  }
});

// Subir una nueva foto
router.post('/upload', authenticateToken, upload.single('photo'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No se ha proporcionado ningún archivo' });
  }

  try {
    const { title = 'Sin título', category = 'sin-categoria', house_id = null } = req.body;
    const url = `/uploads/${req.file.filename}`;
    const date = new Date().toISOString().split('T')[0];

    db.prepare(`
      INSERT INTO photos (url, title, category, date, house_id)
      VALUES (?, ?, ?, ?, ?)
    `).run(url, title, category, date, house_id);

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error al subir la foto' });
  }
});

// Actualizar una foto
router.put('/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  const { title, category, house_id } = req.body;

  try {
    db.prepare(`
      UPDATE photos 
      SET title = ?, category = ?, house_id = ?
      WHERE id = ?
    `).run(title, category, house_id, id);

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la foto' });
  }
});

// Eliminar una foto
router.delete('/:id', authenticateToken, (req, res) => {
  const { id } = req.params;

  try {
    db.prepare('DELETE FROM photos WHERE id = ?').run(id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la foto' });
  }
});

export default router;