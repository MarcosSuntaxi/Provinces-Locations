const db = require('./database/dbConfig'); // Configuración de la base de datos
const amqp = require('amqplib'); // RabbitMQ

const resolvers = {
  Mutation: {
    deleteProvince: async (_, { province_id }) => {
      try {
        // Eliminar ubicaciones asociadas
        await db.query('DELETE FROM locations WHERE province_id = ?', [province_id]);

        // Eliminar la provincia
        const [result] = await db.query('DELETE FROM provinces WHERE province_id = ?', [province_id]);

        if (result.affectedRows === 0) {
          return `No se encontró la provincia con ID ${province_id}`;
        }

        // Publicar el evento en RabbitMQ
        const connection = await amqp.connect(process.env.RABBITMQ_URL);
        const channel = await connection.createChannel();
        const queue = 'province_deleted';

        await channel.assertQueue(queue, { durable: true });
        channel.sendToQueue(queue, Buffer.from(JSON.stringify({ province_id })));

        console.log(`Evento publicado: Provincia eliminada con ID ${province_id}`);
        await channel.close();
        await connection.close();

        return `Provincia con ID ${province_id} eliminada correctamente`;
      } catch (error) {
        console.error('Error al eliminar la provincia:', error);
        throw new Error('Error al eliminar la provincia');
      }
    },
  },
};

module.exports = resolvers;