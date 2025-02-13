# get-user-service

## Description
This microservice retrieves user information.

## Endpoint
- **GET** `http://localhost:3001/api/users`

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


4. Start the server: `npm start`.

## Usage
Send a GET request to the endpoint to retrieve registered users.
