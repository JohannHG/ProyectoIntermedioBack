// index.js
const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors());                  // Permite peticiones de otros orígenes
app.use(express.json());          // Permite leer el cuerpo de las peticiones en formato JSON

// Importar rutas
const adminRoutes = require('./routes/admin.routes');
const contactoRoutes = require('./routes/contacto.routes');

// Usar rutas
app.use('/api/admin', adminRoutes);
app.use('/api/contacto', contactoRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
