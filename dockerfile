FROM node:20

# Creating the working directory named `app`
WORKDIR /app

# Copying all the tools and dependencies in the package.json file to the working directory `app`
COPY package*.json/ /app/

#Installing all the tools and dependencies in the container
RUN npm install
COPY . .

EXPOSE 3000

#Command to start the Docker container for the frontend React.js application
CMD ["npm", "start"]