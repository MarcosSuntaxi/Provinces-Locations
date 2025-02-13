require('dotenv').config();
const express = require('express');
const axios = require('axios');
const router = express.Router();

// Base URLs from environment variables
const {
  DELETE_USER_SERVICE,
  GET_USER_SERVICE,
  LOGIN_SERVICE,
  UPDATE_USER_SERVICE,
  USER_REGISTRATION_SERVICE,
} = process.env;

// Routes
router.post('/register', async (req, res) => {
  try {
    const response = await axios.post(`${USER_REGISTRATION_SERVICE}/api/register`, req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { message: 'Error en el servicio de registro' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const response = await axios.post(`${LOGIN_SERVICE}/api/login`, req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { message: 'Error en el servicio de inicio de sesión' });
  }
});

router.get('/users', async (req, res) => {
  try {
    const response = await axios.get(`${GET_USER_SERVICE}/api/users`);
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { message: 'Error al obtener usuarios' });
  }
});

router.get('/users/:id', async (req, res) => {
  try {
    const response = await axios.get(`${GET_USER_SERVICE}/api/users/${req.params.id}`);
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { message: 'Error al obtener el usuario' });
  }
});

router.put('/users/:id', async (req, res) => {
  try {
    const response = await axios.put(`${UPDATE_USER_SERVICE}/api/users/${req.params.id}`, req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { message: 'Error al actualizar el usuario' });
  }
});

router.delete('/users/:id', async (req, res) => {
  try {
    const response = await axios.delete(`${DELETE_USER_SERVICE}/api/users/${req.params.id}`);
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { message: 'Error al eliminar el usuario' });
  }
});

module.exports = router;