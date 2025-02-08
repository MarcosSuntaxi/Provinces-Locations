# Use a Node.js base image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the application listens on (if applicable)
# This service is an event consumer, so it doesn't need to expose a port directly.
EXPOSE 4000  

# Set the start command
CMD ["node", "src/index.js"]