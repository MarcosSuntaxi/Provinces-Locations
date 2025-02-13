const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Asegúrate de usar la ruta correcta

const app = express();

// Middleware
app.use(bodyParser.json());

// Rutes
app.use('/api', userRoutes); // Todas las rutas tendrán el prefijo /api

module.exports = app;
