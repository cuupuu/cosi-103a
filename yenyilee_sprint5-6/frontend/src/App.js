import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout'; // Import the Layout component
import { Home } from './LandingPage';
import { RecipePage } from './RecipePage';
import Contact from './Contact';
import AddRecipePage from './AddRecipePage';

function App() {
    const [recipes, setRecipes] = useState(null);

    const handleAddRecipe = (newRecipe) => {
        // Make a POST request to add the new recipe
        fetch('/api/recipes')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          // Update the state with the new list of recipes
          setRecipes(data);
        })
        .catch(error => console.error('Error:', error));
      };

    // Fetch the recipes from the backend API
    useEffect(() => {
      fetch('http://localhost:5005/api/recipes') // Replace with the URL of your backend API
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => setRecipes(data))
        .catch(error => console.error('Error:', error));
    }, []); // Empty dependency array means this effect runs once on mount
  
    if (!recipes) {
      return <div>Loading...</div>; // Or some other placeholder content
    }

    return (
        <Routes>
            <Route path="/" element={<Layout><Home recipes={recipes}/></Layout>} /> {/* Wrap Home component with Layout */}
            <Route path="/recipe/:id" element={<Layout><RecipePage recipes={recipes}/></Layout>} /> {/* Wrap RecipePage component with Layout */}
            <Route path="/contact" element={<Layout><Contact recipes={recipes}/></Layout>} /> {/* Wrap Contact component with Layout */}
            <Route path="/addRecipePage" element={<Layout><AddRecipePage recipes={recipes} onAddRecipe={handleAddRecipe}/></Layout>} /> {/* Wrap AddRecipe component with Layout */}
        </Routes>
    )
}

export default App;


