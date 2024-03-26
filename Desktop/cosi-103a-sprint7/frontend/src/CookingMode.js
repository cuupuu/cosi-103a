// CookingMode.js
import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { RecipeContext } from './recipeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CookingMode.css';

const CookingMode = () => {
  const { id } = useParams();  // Retrieve the recipe ID from the URL.
  const navigate = useNavigate();  // Hook to programmatically navigate.
  const { recipes } = useContext(RecipeContext);  // Access the recipes from context.
  const recipe = recipes.find(r => r.index == id);  // Find the specific recipe.

  // Function to handle exiting the cooking mode.
  const exitCookingMode = () => {
    navigate(-1);  // Navigate back to the previous page.
  };

  // Render the Cooking Mode view if the recipe is found.
  if (recipe) {
    return (
      <div className="cooking-mode">
        <h1>{recipe.title} - Cooking Mode</h1>
        <Carousel interval={null} indicators={false}>
          {recipe.instructions.map((instruction, index) => (
            <Carousel.Item key={index} className="text-center">
              <div className="carousel-step p-4">
                <h2>Step {index + 1}</h2>
                <p className="fs-4">{instruction}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <button onClick={exitCookingMode} className="btn btn-secondary mt-3">Exit Cooking Mode</button>
      </div>
    );
  }

  // Render a message if the recipe is not found.
  return <div>Recipe not found!</div>;
};

export default CookingMode;
