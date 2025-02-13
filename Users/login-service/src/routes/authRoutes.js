const express = require('express');
const { loginUser } = require('../controllers/authController');

const router = express.Router();

// Ruta para inicio de sesión
router.post('/login', loginUser);

module.exports = router;
