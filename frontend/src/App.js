import React , { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout'; // Import the Layout component
import { Home } from './LandingPage';
import { RecipePage } from './RecipePage';
import Contact from './Contact';
import AddRecipePage from './AddRecipePage';
import CookingMode from './CookingMode';
import IngredientDetails from './IngredientDetails';
import { FoodDetailsContext } from './FoodDetailsContext';

function App() {
    const [foodDetails, setFoodDetails] = useState(null); 
    return (
        <FoodDetailsContext.Provider value={{ foodDetails, setFoodDetails }}>
        <Routes>
            <Route path="/" element={<Layout><Home/></Layout>} /> {/* Wrap Home component with Layout */}
            <Route path="/recipe/:id" element={<Layout><RecipePage /></Layout>} /> {/* Wrap RecipePage component with Layout */}
            <Route path="/contact" element={<Layout><Contact /></Layout>} /> {/* Wrap Contact component with Layout */}
            <Route path="/addRecipePage" element={<Layout><AddRecipePage/></Layout>} /> {/* Wrap AddRecipe component with Layout */}
            <Route path="/recipe/:id/cooking-mode" element={<CookingMode/>} />
            <Route path="/ingredientDetails" element={<Layout><IngredientDetails/></Layout>} /> {/* Wrap IngredientDetails component with Layout */}
        </Routes>
        </FoodDetailsContext.Provider>
    )
}

export default App;


