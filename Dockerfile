# Use the official Node.js image as a base
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first for dependency installation
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port your app runs on (e.g., 3000)
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "run", "dev"]
