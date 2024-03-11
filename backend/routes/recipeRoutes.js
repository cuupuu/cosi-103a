// recipeRoutes.js
const express = require('express');
const router = express.Router();
const staticRecipes = require('../data/recipes');
// In-memory storage for recipes
let recipes = [...staticRecipes];

// GET endpoint for listing all recipes
router.get('/', (req, res) => {
    res.status(200).json(recipes);
  });

// POST endpoint for adding a new recipe
router.post('/', (req, res) => {
  let newRecipe = req.body;
  
  // Perform validation for expected fields (except image, since it will be defaulted)
  if (!newRecipe.title || !Array.isArray(newRecipe.ingredients) || !Array.isArray(newRecipe.instructions)) {
    return res.status(400).json({ message: 'Invalid recipe format' });
  }

  // Override the image field with the default image
  newRecipe.image = 'default.jpg'; // Your default image filename

  // Assign a simple unique ID based on the array length
  newRecipe.id = recipes.length + 1;

  // Add the new recipe to the storage
  recipes.push(newRecipe);
  res.status(201).json(newRecipe);
});

module.exports = {router, recipes};

