const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Cargar la clave secreta desde las variables de entorno
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  try {
    // Buscar el usuario por correo electrónico
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const user = rows[0];

    // Comparar la contraseña ingresada con la contraseña encriptada
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    // Generar un token JWT que incluye el rol del usuario
    const token = jwt.sign(
      { userId: user.id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Determinar la URL de redirección según el rol
    let redirectUrl;
    if (user.role === 'administrator') {
      redirectUrl = '/admin-dashboard';
    } else if (user.role === 'user') {
      redirectUrl = '/user-dashboard';
    } else {
      redirectUrl = '/default-dashboard';
    }

    // Respuesta exitosa
    res.status(200).json({
      message: 'Inicio de sesión exitoso',
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      token: token, // Devuelve el token al cliente
      redirectUrl: redirectUrl, // Devuelve la URL de redirección
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al procesar la solicitud' });
  }
};