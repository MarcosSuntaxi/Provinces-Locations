const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema');
const cors = require('cors');
const bodyParser = require('body-parser'); // Importa body-parser

async function startServer() {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json()); // Agrega el middleware para procesar JSON

  const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    formatError: (error) => {
      console.error('GraphQL Error:', error);
      return error;
    }
  });

  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  
  const PORT = 4003;
  app.listen(PORT, () => {
    console.log(`🚀 Locations Create service running on http://localhost:${PORT}/graphql`);
  });
}


startServer().catch(error => {
  console.error('Error starting server:', error);
});