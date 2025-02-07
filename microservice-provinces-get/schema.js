// microservice-provinces/schema.js
const { gql } = require('apollo-server-express');
const db = require('./dbConfig');

// Definimos el esquema GraphQL
const typeDefs = gql`
  type Province {
    province_id: ID!
    province_name: String!
  }

  type Query {
    getProvinces: [Province]
  }

  type Mutation {
    createProvince(province_name: String!): Province
  }
`;

// Resolvers que cumplen con las Queries y Mutations
const resolvers = {
  Query: {
    getProvinces: async () => {
      const [rows] = await db.query('SELECT * FROM provinces');
      return rows.map((row) => ({
        province_id: row.province_id,
        province_name: row.province_name,
      }));
    },
  },
  Mutation: {
    createProvince: async (_, { province_name }) => {
      const [result] = await db.query(
        'INSERT INTO provinces (province_name) VALUES (?)',
        [province_name]
      );
      return {
        province_id: result.insertId,
        province_name,
      };
    },
  },
};

module.exports = { typeDefs, resolvers };