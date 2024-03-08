const path = require("path");
const express = require("express");
const app = express(); // create express app

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../frontend/build")));

// POST endpoint to receive JSON data
app.post("/api/submitRecipe", (req, res) => {
  const jsonData = req.body;

  console.log("Received JSON data:", jsonData);

  //
  res.json({ message: "Data received successfully", data: jsonData });
});

// Serve additional static files (if any) from the 'public' directory
app.use(express.static("public"));

// Serve the React app's index.html file for any other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build"));
});

// Start express server on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
