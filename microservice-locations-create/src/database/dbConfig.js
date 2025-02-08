require('dotenv').config(); // Cargar variables de entorno desde .env
const mysql = require('mysql2/promise');

// Configuración de la conexión a la base de datos
const db = mysql.createPool({
  host: process.env.DB_HOST,       // Host de la base de datos
  user: process.env.DB_USER,       // Usuario de la base de datos
  password: process.env.DB_PASSWORD, // Contraseña de la base de datos
  database: process.env.DB_NAME_L_P,   // Nombre de la base de datos
  port: process.env.DB_PORT || 3306 // Puerto de la base de datos (por defecto 3306)
});

module.exports = db;