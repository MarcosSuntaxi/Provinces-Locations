# Delete User Service

Este microservicio permite eliminar usuarios de la base de datos.

## Requisitos previos

- Node.js v20+
- Docker

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/<tu-usuario>/delete-user-service.git

2. Instala las dependencias:
    ```bash
    npm install

3.  Configura las variables de entorno. Crea un archivo .env y proporciona los valores necesarios:

    ```bash
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=tu_password
    DB_NAME=user_database
    DB_PORT=3306

## Uso
 1. Inicia el servicio localmente:
    ```bash
    node src/server.js

 2. Endpoint principal: 
    ```bash
    DELETE: http://localhost:3002/api/users/:id
Permite eliminar un usuario por su id.