// AddRecipe.js
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecipeContext } from './RecipeContext';

function AddRecipe() {
  const [recipeJson, setRecipeJson] = useState(JSON.stringify({
    title: '',
    description: '',
    ingredients: [],
    instructions: [],
    image: 'default.jpg'
  }, null, 2));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const { addRecipe } = useContext(RecipeContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');

    let recipe;
    try {
      recipe = JSON.parse(recipeJson);
      recipe.image = recipe.image || 'default.jpg';
    } catch (e) {
      setError('Invalid JSON format.');
      setIsSubmitting(false);
      return;
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
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const addedRecipe = await response.json();
      addRecipe(addedRecipe); // Update context with the new recipe
      setRecipeJson(JSON.stringify({
        title: '',
        description: '',
        ingredients: [],
        instructions: [],
        image: 'default.jpg'
      }, null, 2));
      navigate(`/recipe/${addedRecipe.id}`);
      alert('Recipe added!');
    } catch (e) {
      setError('Error submitting recipe. Please try again.');
      console.error('Error submitting recipe', e);
    }
    setIsSubmitting(false);
  };

  return (
    <>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="recipeJson">Recipe JSON:</label>
        <textarea
          id="recipeJson"
          name="recipeJson"
          value={recipeJson}
          onChange={(e) => setRecipeJson(e.target.value)}
          rows={10}
          cols={50}
          disabled={isSubmitting}
        />
        <button type="submit" disabled={isSubmitting}>Submit Recipe</button>
      </form>
    </>
  );
}

export default AddRecipe;
