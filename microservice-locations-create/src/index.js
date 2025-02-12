const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema');
const cors = require('cors');
const setupSwagger = require('./swaggerConfig'); 

async function startServer() {
  try {
    const app = express();
    app.use(cors());

    // Configurar Swagger
    setupSwagger(app);

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      formatError: (error) => {
        console.error('GraphQL Error:', error);
        return {
          message: error.message,
          locations: error.locations,
          path: error.path,
        };
      },
      context: async ({ req }) => {
        return {
          // Aquí puedes agregar contexto si es necesario
        };
      },
    });

    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });

    const PORT = 4003;
    app.listen(PORT, () => {
      console.log(`🚀 Locations Create service running on http://localhost:${PORT}/graphql`);
      console.log(`📄 Swagger UI available at http://localhost:${PORT}/api-docs`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer().catch((error) => {
  console.error('Error starting server:', error);
  process.exit(1);
});