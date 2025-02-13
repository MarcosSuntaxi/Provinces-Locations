# Usar una imagen base de Node.js
FROM node:20-alpine

# Crear y establecer el directorio de trabajo
WORKDIR /usr/src/

# Copiar los archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código fuente
COPY . .

# No es necesario exponer un puerto ya que este microservicio 
# funciona como un consumidor de eventos de RabbitMQ

# Comando para iniciar la aplicación
CMD ["node", "src/index.js"]