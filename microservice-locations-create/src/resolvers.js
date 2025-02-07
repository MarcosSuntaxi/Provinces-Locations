const db = require('./database/dbConfig');

const resolvers = {
  Mutation: {
    createLocation: async (_, { input }) => {
      const [result] = await db.query(
        'INSERT INTO locations (location_name, province_id) VALUES (?, ?)',
        [input.location_name, input.province_id]
      );
      return {
        location_id: result.insertId,
        location_name: input.location_name,
        province_id: input.province_id
      };
    }
  }
};

module.exports = resolvers;