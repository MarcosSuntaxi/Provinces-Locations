# Usar una imagen base de Node.js
FROM node:20-alpine

# Crear y establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar package.json e instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Exponer el puerto que usa la aplicación
EXPOSE 4002

# Comando para iniciar la aplicación
CMD ["node", "index.js"]