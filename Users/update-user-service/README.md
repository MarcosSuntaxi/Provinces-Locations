
### `update-user-service/README.md`
```markdown
# update-user-service

## Description
This microservice updates user information.

## Endpoint
- **PUT** `http://localhost:3003/api/users/:id`

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
Send a PUT request to the endpoint with the user ID and the following body:
```json
{
"username": "new_user",
"email": "new_email@example.com",
"password": "new_password"
}
