const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5005;
const { isValidateJSON } = require("./isValidateJSON");

app.use(bodyParser.json());


const recipes = require('./RecipeList'); // your initial recipes


app.get("/api/recipes", (req, res) => {
  res.status(200).json(recipes);
});

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.post("/api/recipes", async (req, res) => {
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

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build"));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});