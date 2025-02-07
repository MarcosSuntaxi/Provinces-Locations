## Locations Microservice
### Description
This microservice provides data about locations. It exposes a GraphQL API to fetch locations filtered by province.
### Technologies Used
- Node.js
- Express
- GraphQL
- RabbitMQ
- CORS
### RabbitMQ Explanation
RabbitMQ is used to listen for events published by the Provinces microservice. For example, when a province is selected, this service can fetch and update the relevant locations.
### CORS Explanation
CORS is enabled to allow the front-end application to communicate with the microservice from a different origin.
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
    query($filter: LocationFilter) {
    getLocations(filter: $filter) {
        location_id
        location_name
        province_id
    }
    }

