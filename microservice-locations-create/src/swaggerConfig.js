const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const yaml = require('js-yaml');

// Cargar el archivo YAML de Swagger
const swaggerDocument = yaml.load(fs.readFileSync('./swagger.yml', 'utf8'));

function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

module.exports = setupSwagger;