// routes/admin.routes.js
const express = require('express');
const router = express.Router();
const pool = require('../db');
const bcrypt = require('bcrypt');

// Registro de administrador
router.post('/registro', async (req, res) => {
  try {
    const { nombre, correo, contrasena } = req.body;
    // Generar salt y hash con bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(contrasena, salt);

    await pool.query(
      'INSERT INTO administrador (nombre, correo, contrasena) VALUES (?, ?, ?)',
      [nombre, correo, hashedPassword]
    );

    res.json({ message: 'Administrador registrado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al registrar administrador' });
  }
});

// Login del administrador
router.post('/login', async (req, res) => {
  try {
    const { correo, contrasena } = req.body;
    const [rows] = await pool.query('SELECT * FROM administrador WHERE correo = ?', [correo]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Administrador no encontrado' });
    }

    const admin = rows[0];
    const isMatch = await bcrypt.compare(contrasena, admin.contrasena);
    if (!isMatch) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    res.json({ message: 'Login exitoso', adminId: admin.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

module.exports = router;
