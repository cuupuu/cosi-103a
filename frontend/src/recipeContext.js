import React, { createContext, useState, useEffect } from 'react';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch('/api/recipes');
      console.log("hello");
      if (response.ok) {
        const recipes = await response.json();
        console.log(recipes);
        setRecipes(recipes);
      }
    };

    fetchRecipes();
  }, []);

  // Function to add a recipe to the context
  const addRecipe = (newRecipe) => {
    setRecipes(() => newRecipe);
  };


  return (
    <RecipeContext.Provider value={{ recipes, addRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};
