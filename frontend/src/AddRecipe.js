import React, { useState } from 'react';

function AddRecipe() {
  const [recipeJson, setRecipeJson] = useState(JSON.stringify({
    title: '',
    description: '',
    ingredients: [],
    instructions: [],
    image: 'default.jpg' // This will be your default image filename
  }, null, 2)); // Pretty print JSON

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Parse the JSON to check if it's valid and to add a default image if none is provided
    let recipe;
    try {
      recipe = JSON.parse(recipeJson);
      if (!recipe.image) {
        recipe.image = 'default.jpg'; // Assign a default image if none is provided
      }
    } catch (e) {
      return alert('Invalid JSON');
    }

    try {
      const response = await fetch('/api/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        alert('Recipe added!');
        setRecipeJson(JSON.stringify({
          title: '',
          description: '',
          ingredients: [],
          instructions: [],
          image: 'default.jpg'
        }, null, 2)); // Reset the form
      }
    } catch (e) {
      console.error('Error submitting recipe', e);
      alert('Error submitting recipe');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="recipeJson">Recipe JSON:</label>
      <textarea
        id="recipeJson"
        name="recipeJson"
        value={recipeJson}
        onChange={(e) => setRecipeJson(e.target.value)}
        rows={10}
        cols={50}
      />
      <button type="submit">Submit Recipe</button>
    </form>
  );
}

export default AddRecipe;