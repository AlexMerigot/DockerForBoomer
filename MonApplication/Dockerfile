# Use the official Debian Buster image as the base
FROM debian:buster

# Install Node.js and npm (Node.js Package Manager)
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash - \
 && apt-get update && apt-get install -y nodejs npm

# Copy the application source code into the image
COPY . /app

# Change to the app directory and install dependencies
WORKDIR /app

RUN npm install

# Expose port 3000
EXPOSE 3000

# Set the command to start the application
CMD [ "npm", "start" ]