# Usar una imagen base de Node.js
FROM node:20-alpine

# Crear y establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar los archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código fuente
COPY . .

# Comando para iniciar la aplicación
CMD ["node", "./src/index.js"]