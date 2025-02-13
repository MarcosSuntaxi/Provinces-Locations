const db = require('../config/db');
const bcrypt = require('bcrypt'); // Importar bcrypt

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;

  if (!id || (!username && !email && !password)) {
    return res.status(400).json({ message: 'Faltan campos obligatorios para actualizar' });
  }

  try {
    const fieldsToUpdate = [];
    const values = [];

    if (username) {
      fieldsToUpdate.push('username = ?');
      values.push(username);
    }

    if (email) {
      fieldsToUpdate.push('email = ?');
      values.push(email);
    }

    if (password) {
      // Encriptar la contraseña antes de actualizar
      const hashedPassword = await bcrypt.hash(password, 10);
      fieldsToUpdate.push('password = ?');
      values.push(hashedPassword);
    }

    values.push(id); // Agregar el ID del usuario al final para la cláusula WHERE

    const query = `UPDATE users SET ${fieldsToUpdate.join(', ')} WHERE id = ?`;
    const [result] = await db.query(query, values);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json({ message: 'Usuario actualizado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el usuario' });
  }
};
