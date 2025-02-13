# api-gateway-users

## Description
The API Gateway acts as a single entry point to communicate with multiple microservices. It routes requests to the appropriate microservice and aggregates responses when needed.

## Features
- Centralized routing to microservices
- Load balancing
- Error handling

## Microservices Used
- **User Registration Service**: `http://localhost:3006`
- **Get User Service**: `http://localhost:3001`
- **Delete User Service**: `http://localhost:3002`
- **Update User Service**: `http://localhost:3003`
- **Login Service**: `http://localhost:3004`

## Endpoints
The API Gateway exposes the following routes:
- **POST** `/api/register` → Registers a new user.
- **POST** `/api/login` → Authenticates a user and generates a JWT.
- **GET** `/api/users` → Retrieves all users.
- **PUT** `/api/users/:id` → Updates user information.
- **DELETE** `/api/users/:id` → Deletes a user.

## Requirements
- Node.js

## Installation
1. Clone the repository.
2. Navigate to the project directory:
   ```bash
   cd api-gateway-users

3. Install dependencies:
    ```bash
    npm install

4. Create a .env file in the project root and define the following variables:

    ```bash
    USER_REGISTRATION_SERVICE=http://localhost:3006
    GET_USER_SERVICE=http://localhost:3001
    DELETE_USER_SERVICE=http://localhost:3002
    UPDATE_USER_SERVICE=http://localhost:3003
    LOGIN_SERVICE=http://localhost:3004

5. Start the server:
    ```bash
    node src/server.js

## Usage

1. Register a User:
    ```bash
    curl -X POST http://localhost:4000/api/register \
    -H "Content-Type: application/json" \
    -d '{
    "username": "new_user",
    "email": "email@example.com",
    "password": "password123"
    }'

2. Login 
    ```bash
    curl -X POST http://localhost:4000/api/login \
    -H "Content-Type: application/json" \
    -d '{
    "email": "email@example.com",
    "password": "password123"
    }'

3. Get All Users
    ```bash
    curl -X GET http://localhost:4000/api/users
