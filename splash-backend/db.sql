-- 1. Crear la base de datos (si no existe)
CREATE DATABASE IF NOT EXISTS splashdb;

-- 2. Usar la base de datos
USE splashdb;

-- 3. Crear la tabla administrador
--    donde 'contrasena' se almacenará como hash (bcrypt)
CREATE TABLE IF NOT EXISTS administrador (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  correo VARCHAR(100) NOT NULL UNIQUE,
  contrasena VARCHAR(255) NOT NULL
);

-- 4. Crear la tabla contacto
--    el campo 'nivel' es un ENUM con tus 7 opciones
CREATE TABLE IF NOT EXISTS contacto (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50),
  edad INT,
  nivel ENUM('PrincipianteA','PrincipianteB','IntermedioA','IntermedioB','Avanzado','Personalizada','Matroclase'),
  celular VARCHAR(20),
  correo VARCHAR(50),
  status VARCHAR(20) DEFAULT 'pendiente'
);
