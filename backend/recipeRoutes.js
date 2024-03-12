// recipeRoutes.js
const express = require('express');
const router = express.Router();
const staticRecipes = require("./staticRecipes.js");
// In-memory storage for recipes
let recipes = [...staticRecipes];

const { isValidateJSON } = require("./isValidateJSON");

// GET endpoint for listing all recipes
router.get('/', (req, res) => {
    res.status(200).json(recipes);
  });

// POST endpoint for adding a new recipe
router.post("/", async (req, res) => {
    const recipe = req.body;
  
    if (!isValidateJSON(recipe)) {
      return res.status(400).send("Invalid data format");
    }
    recipe.index = recipes.length; // Assign a simple unique index
  
    console.log("Assign index to recipe: ", recipe.index)
    console.log("Recipe index: ", recipe.index);
  
    recipes.push(recipe);
    console.log(recipes);
  
    res.status(201).send(recipes);
  });

module.exports = {router, recipes};

