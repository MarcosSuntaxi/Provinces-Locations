const express = require('express');
const { deleteUser } = require('../controllers/userController');

const router = express.Router();

// Ruta para eliminar usuarios
router.delete('/users/:id', deleteUser);

module.exports = router;
