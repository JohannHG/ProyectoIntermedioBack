// routes/contacto.routes.js
const express = require('express');
const router = express.Router();
const pool = require('../db');

// Insertar datos de contacto
router.post('/', async (req, res) => {
    try {
        const { nombre, edad, nivel, celular, correo } = req.body;
        // 'status' se define como 'pendiente' por defecto en la tabla
        await pool.query(
            'INSERT INTO contacto (nombre, edad, nivel, celular, correo) VALUES (?, ?, ?, ?, ?)',
            [nombre, edad, nivel, celular, correo]
        );
        res.json({ message: 'Datos enviados exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al guardar datos' });
    }
});

// Obtener todos los contactos
router.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM contacto');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener datos' });
    }
});

module.exports = router;
