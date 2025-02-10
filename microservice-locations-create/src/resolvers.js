const db = require('./database/dbConfig');

const resolvers = {
  Query: {
    _empty: () => ''
  },
  Mutation: {
    createLocation: async (_, { input }) => {
      try {
        const [result] = await db.query(
          'INSERT INTO locations (location_name, province_id) VALUES (?, ?)',
          [input.location_name, input.province_id]
        );
        return {
          location_id: result.insertId,
          location_name: input.location_name,
          province_id: input.province_id
        };
      } catch (error) {
        console.error('Error creating location:', error);
        throw new Error('Failed to create location');
      }
    }
  }
};

module.exports = resolvers;