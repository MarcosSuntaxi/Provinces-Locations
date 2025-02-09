const pool = require('./database/dbConfig');

const resolvers = {
  Query: {
    _empty: () => ''
  },
  Mutation: {
    createLocation: async (_, { input }) => {
      try {
        const result = await pool.query(
          'INSERT INTO locations (location_name, province_id) VALUES ($1, $2) RETURNING location_id, location_name, province_id',
          [input.location_name, input.province_id]
        );
        
        return result.rows[0];
      } catch (error) {
        console.error('Error creating location:', error);
        throw new Error('Failed to create location');
      }
    }
  }
};

module.exports = resolvers;