const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const recipeRoutes = require("./recipeRoutes");


const app = express();
const PORT = process.env.PORT || 5005;


app.use(bodyParser.json());

// Serve API routes for recipes
app.use('/api/recipes', recipeRoutes.router);


app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build"));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});