const amqp = require('amqplib');
const db = require('./database/dbConfig');
require('dotenv').config();

async function startListener() {
  try {
    const connection = await amqp.connect(process.env.RABBITMQ_URL);
    const channel = await connection.createChannel();
    const queue = 'province_deleted';

    await channel.assertQueue(queue, { durable: true });

    console.log(`Esperando mensajes en la cola: ${queue}`);

    channel.consume(queue, async (message) => {
      if (message !== null) {
        const { province_id } = JSON.parse(message.content.toString());
        console.log(`Evento recibido: Provincia eliminada con ID ${province_id}`);

        // Delete ubicaciones asociadas a la provincia
        try {
          const [result] = await db.query('DELETE FROM locations WHERE province_id = ?', [province_id]);
          console.log(`Ubicaciones eliminadas: ${result.affectedRows}`);
        } catch (error) {
          console.error('Error al eliminar ubicaciones:', error);
        }

        channel.ack(message);
      }
    });
  } catch (error) {
    console.error('Error al conectar con RabbitMQ:', error);
  }
}
startListener();