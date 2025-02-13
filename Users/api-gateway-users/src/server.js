require('dotenv').config();
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const routes = require('./routes');

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const app = express();

// Configuración de CORS
app.use(
  cors({
    origin: "http://localhost:3000", // URL de tu frontend
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
)

// Middleware para parsear JSON
app.use(express.json());

// Middleware para manejar errores de JSON malformado
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ message: 'Invalid JSON format' });
  }
  next();
});

// Cargar rutas desde routes.js
app.use('/api', routes);

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// Iniciar servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`API Gateway corriendo en el puerto ${PORT}`);
});


