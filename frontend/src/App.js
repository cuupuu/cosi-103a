import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout'; // Import the Layout component
import { Home } from './LandingPage';
import { RecipePage } from './RecipePage';
import recipes from './Recipe';
import Contact from './Contact';
import AddRecipePage from './AddRecipePage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout><Home/></Layout>} /> {/* Wrap Home component with Layout */}
            <Route path="/recipe/:id" element={<Layout><RecipePage recipes={recipes}/></Layout>} /> {/* Wrap RecipePage component with Layout */}
            <Route path="/contact" element={<Layout><Contact/></Layout>} /> {/* Wrap Contact component with Layout */}
            <Route path="/addRecipePage" element={<Layout><AddRecipePage/></Layout>} /> {/* Wrap AddRecipe component with Layout */}
        </Routes>
    )
}

export default App;


