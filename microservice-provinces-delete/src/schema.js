const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    deleteProvince(province_id: Int!): String
  }
`;

module.exports = typeDefs;