FROM --platform=linux/amd64 node:18
# Set working directory for backend
WORKDIR /app/backend

# Install backend dependencies
COPY ./backend/package.json ./backend/package-lock.json ./
RUN npm install

# Copy backend source code
COPY ./backend .


# Set working directory for frontend
WORKDIR /app/frontend

# Install frontend dependencies
COPY ./frontend/package.json ./frontend/package-lock.json ./
RUN npm install

# Copy frontend source code
COPY ./frontend .

EXPOSE 3000

#Command to start the Docker container for the frontend React.js application
CMD ["npm", "start"]