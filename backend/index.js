const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5001;
const { isValidateJSON } = require("./isValidateJSON");
// const { updateRecipe } = require("./recipe_update");

app.use(bodyParser.json());

let recipes = [];

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.post("/api/recipes", async (req, res) => {
  const recipe = req.body;
  if (!isValidateJSON(recipe)) {
    return res.status(400).send("Invalid data format");
  }
  recipe.id = recipes.length + 1; // Assign a simple unique ID
  recipes.push(recipe);
  console.log(recipes);
  res.status(201).send(recipes);
});

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build"));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});