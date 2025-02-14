const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Asegúrate de usar la ruta correcta

const app = express();

// Middleware
app.use(bodyParser.json());

// CORS Middleware
app.use(cors());

// Configuración más específica de CORS
const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  };
  
// Rutes
app.use('/api', userRoutes); // Todas las rutas tendrán el prefijo /api

module.exports = app;
