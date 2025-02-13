# login-service

## Description
This microservice allows users to log into the system.

## Endpoint
- **POST** `http://localhost:3004/api/login`

## Requirements
- Node.js
- MySQL

## Installation
1. Clone the repository.
2. Install dependencies with `npm install`.
3. Configure environment variables in a `.env` file:

    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=your_password
    DB_NAME=user_database
    DB_PORT=3306

4. Start the server: `node src/server`.

## Usage
Send a POST request to the endpoint with the following body:
```json
{
"email": "user@example.com",
"password": "password123"
}
