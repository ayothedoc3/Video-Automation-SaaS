FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY backend/ .

# Create dist directory and build TypeScript
RUN npm run build

# Expose the port the app runs on
EXPOSE 3001

# Start the application in development mode
CMD ["npm", "run", "dev"]
