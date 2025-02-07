const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Location {
    location_id: ID!
    location_name: String!
    province_id: Int!
  }

  input LocationInput {
    location_name: String!
    province_id: Int!
  }

  type Mutation {
    createLocation(input: LocationInput!): Location
  }
`;

module.exports = typeDefs;