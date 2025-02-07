const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema');
const cors = require('cors');

async function startServer() {
  const app = express();
  app.use(cors());
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
  const PORT = 4003; 
  app.listen(PORT, () => {
    console.log(`Locations Create service running on http://localhost:${PORT}/graphql`);
  });
}

startServer();