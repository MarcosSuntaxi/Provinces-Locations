const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();

// CORS Middleware
app.use(cors());

// Configuración más específica de CORS
const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  };

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api', userRoutes);

module.exports = app;
