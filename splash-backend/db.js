// db.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',       // o la dirección de tu servidor MySQL
  user: 'root',            // tu usuario MySQL
  password: 'root', // tu contraseña
  database: 'splashdb',    // nombre de la base de datos que usarás
});

module.exports = pool;
