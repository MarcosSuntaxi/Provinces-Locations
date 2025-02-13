const express = require('express');
const { updateUser } = require('../controllers/userController');

const router = express.Router();

// Ruta para actualizar usuarios
router.put('/users/:id', updateUser);

module.exports = router;
