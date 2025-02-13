const express = require('express');
const { registerUser } = require('../controllers/userController');

const router = express.Router();

// Ruta para registrar usuarios
router.post('/users', registerUser);

module.exports = router;
