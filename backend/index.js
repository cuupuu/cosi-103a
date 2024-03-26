const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const { isValidateJSON } = require("./isValidateJSON");


const app = express();
const PORT = process.env.PORT || 5005;


app.use(bodyParser.json());

// Azure Cosmos DB
const {CosmosClient} = require("@azure/cosmos");
const key = "4FXjbKYEpftu2BXEkvw2HU4Xqe7rxb4D2s85xwraqTJ5gOlp8U8XCjImY2wGqEHB2jnkIPSSKEFOACDbBKz0Hg=="
const endpoint = "https://sprint7.documents.azure.com:443/"
const databaseName = "mcdonalds"
const containerName = "recipes"

// Authentication to Azure Cosmos DB
const client = new CosmosClient({
  endpoint,
  key
})

// GET endpoint for listing all recipes
app.get("/api/recipes", async (req, res) => {
  try{
    const database = client.database(databaseName);
    const container = database.container(containerName);
    var response = await container.items.readAll().fetchAll();
    res.status(200).json(response.resources);
  }catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).send("Internal Server Error");
  }
});

// POST endpoint for adding a new recipe
app.post("/api/addRecipes", async (req, res) => {
  const recipe = req.body;
  if (!isValidateJSON(recipe)) {
    return res.status(400).send("Invalid data format");
  }
  try {
    const database = client.database(databaseName);
    const container = database.container(containerName);
    const oldRecipes = await container.items.readAll().fetchAll();
    const totalCount = oldRecipes.resources.length;

  // Assign the new index as the total count
    const Index = totalCount;
    const recipeWithIndex = { ...recipe, index: Index };
    console.log("Assign index to recipe: ", recipeWithIndex.index);
    await container.items.upsert(recipeWithIndex);
    // Fetch all recipes after adding the new recipe
    const allRecipes = await container.items.readAll().fetchAll();
    res.status(200).json(allRecipes.resources);
  } catch (error) {
    console.error("Error adding recipe:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build"));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});