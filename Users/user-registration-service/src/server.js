const app = require('./app'); // Importa la aplicación desde app.js
const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
