// microservice-locations/schema.js
const { gql } = require('apollo-server-express');
const db = require('./database/dbConfig');

// Definimos el esquema GraphQL
const typeDefs = gql`
  type Location {
    location_id: ID!
    location_name: String!
    province_id: Int!
  }

  input LocationFilter {
    province_id: Int
  }

  type Query {
    getAllLocations: [Location]
    getLocations(filter: LocationFilter): [Location]
  }

  type Mutation {
    createLocation(location_name: String!, province_id: Int!): Location
  }
`;

// Resolvers
const resolvers = {
  Query: {
    getAllLocations: async () => {
      const [rows] = await db.query('SELECT * FROM locations');
      return rows.map(row => ({
        location_id: row.location_id,
        location_name: row.location_name,
        province_id: row.province_id
      }));
    },
    getLocations: async (_, { filter }) => {
      if (filter && filter.province_id) {
        const [rows] = await db.query(
          'SELECT * FROM locations WHERE province_id = ?',
          [filter.province_id]
        );
        return rows.map(row => ({
          location_id: row.location_id,
          location_name: row.location_name,
          province_id: row.province_id
        }));
      }
      // Si no hay filtro, retorna todas
      const [rows] = await db.query('SELECT * FROM locations');
      return rows.map(row => ({
        location_id: row.location_id,
        location_name: row.location_name,
        province_id: row.province_id
      }));
    },
  },
  Mutation: {
    createLocation: async (_, { location_name, province_id }) => {
      const [result] = await db.query(
        'INSERT INTO locations (location_name, province_id) VALUES (?, ?)',
        [location_name, province_id]
      );
      return {
        location_id: result.insertId,
        location_name,
        province_id
      };
    },
  },
};

module.exports = { typeDefs, resolvers };