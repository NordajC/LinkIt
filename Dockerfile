# Use Node.js base image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the app
RUN npm run build

# Expose the port for SvelteKit
EXPOSE 3000

# Start the preview server (after build)
CMD ["npm", "run", "preview", "--", "--host"]
