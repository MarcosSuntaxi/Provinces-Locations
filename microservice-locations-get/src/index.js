const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema');
const cors = require('cors'); // Import cors

async function startServer() {
  const app = express();

  // Habilitar CORS
  app.use(cors());

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  const PORT = 4002;
  app.listen(PORT, () => {
    console.log(`Locations service running on http://localhost:${PORT}/graphql`);
  });
}

startServer();