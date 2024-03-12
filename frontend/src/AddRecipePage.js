import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './AddRecipePage.css';
import { RecipeContext } from './recipeContext';

function AddRecipe() {
  const [recipeJson, setRecipeJson] = useState(JSON.stringify({
    title: '',
    description: '',
    ingredients: [],
    instructions: [],
    image: 'mcdonalds.png' // This will be your default image filename
  }, null, 2)); // Pretty print JSON

  const { addRecipe, recipes } = useContext(RecipeContext);

  const navigate = useNavigate();
    // Add a new piece of state to control whether the modal is shown
  const [showModal, setShowModal] = useState(false);
    // Add a new piece of state to store the index of the newly added recipe

  const [goToRecipeCalled, setGoToRecipeCalled] = useState(false);
  
  const [newRecipeIndex, setNewRecipeIndex] = useState(null);




  const handleGoHome = () => {
      setShowModal(false);
      navigate('/');
    };
  
  const handleGoToRecipe = () => {
      setShowModal(false);    
      setGoToRecipeCalled(true);
    };



  const handleSubmit = async (event) => {
    event.preventDefault();

    // Parse the JSON to check if it's valid and to add a default image if none is provided
    let recipe;
    try {
      recipe = JSON.parse(recipeJson);
      if (!recipe.image) {
        recipe.image = '/mcdonalds.png'; // Assign a default image if none is provided
      }
    } catch (e) {
      return alert('Invalid JSON');
    }
    
    fetch('/api/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipe),
    })
    .then(response => {
      if (!response.ok) {
        return response.text().then(error =>{
        throw new Error(error);
      });
    }
      const clone = response.clone(); // Clone the response
      clone.text().then(text => console.log('Response text:', text)); // Log the raw response text
      return response.json(); // Parse the original response body as JSON
    })
    .then( newRecipe=> {
      console.log('newRecipes:', newRecipe);
      const lastIndex = newRecipe.length - 1;
      setNewRecipeIndex(newRecipe[lastIndex].index);
      console.log(newRecipe[lastIndex].index);
      addRecipe(newRecipe); // Update context with the new recipe
      // console.log('New recipe index:', newRecipeIndex);
      setShowModal(true);
    })
    .catch(error => {
      console.error('Error:', error);
    });
    


  };
  useEffect(() => {
    console.log('New recipe index:', newRecipeIndex);
  }, [newRecipeIndex]);

  useEffect(() => {
    console.log('recipes:', recipes);
    if (goToRecipeCalled) {
      navigate(`/recipe/${recipes.length - 1}`);
    }
  }, [goToRecipeCalled, recipes, navigate]);


  return (
    <div>
    <Header title="Add Recipe"/>
    <h1 className='add-recipe-h1'>Add Your Recipe</h1>
    <form className='add-recipe-form' onSubmit={handleSubmit}>
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
     {/* Modal */}
     {showModal && (
  <div className="modal-background" onClick={() => setShowModal(false)}>
    <div className="modal-content">
      <h1 className="modal-title">Recipe added successfully!</h1>
      <button onClick={handleGoHome}>Go back home</button>
      <button onClick={handleGoToRecipe}>Go view the new recipe</button>
    </div>
  </div>
)}

  </div>

  );
}

export default AddRecipe;
