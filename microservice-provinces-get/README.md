## Provinces Microservice
### Description
This microservice provides data about provinces. It exposes a GraphQL API to fetch the list of provinces.
### Technologies Used
- Node.js
- Express
- GraphQL
- RabbitMQ
- CORS
### RabbitMQ Explanation
RabbitMQ is used as a message broker to enable communication between microservices. It allows the Provinces microservice to publish events when a province is selected, which can be consumed by other services.
### CORS Explanation
CORS (Cross-Origin Resource Sharing) is enabled to allow the front-end application to communicate with the microservice from a different origin.
### Dependencies
- express: Web framework for Node.js
- apollo-server-express: To integrate GraphQL with Express
- cors: To enable CORS
- amqplib: To interact with RabbitMQ
### Instructions to Run
npm install
node index.js
### Example Query
    ```json
    query {
    getProvinces {
        province_id
        province_name
    }
    }

