//index.js
const path = require("path");
const express = require("express");
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();
const PORT = process.env.PORT || 5005;


// Middleware to parse JSON requests
app.use(express.json());

// Serve API routes for recipes
app.use('/api/recipes', recipeRoutes.router);

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Fallback for handling React routing - return the main index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build'));
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
