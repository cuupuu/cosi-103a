import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout'; // Import the Layout component
import { Home } from './LandingPage';
import { RecipePage } from './RecipePage';
import Contact from './Contact';
import AddRecipe from './AddRecipe';
import CookingMode from './CookingMode';
import './RecipePage.css';


function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout><Home/></Layout>} /> {/* Wrap Home component with Layout */}
            <Route path="/recipe/:id" element={<Layout><RecipePage/></Layout>} /> {/* Wrap RecipePage component with Layout */}
            <Route path="/contact" element={<Layout><Contact/></Layout>} /> {/* Wrap Contact component with Layout */}
            <Route path="/addRecipe" element={<Layout><AddRecipe/></Layout>} /> {/* Wrap AddRecipe component with Layout */}
            <Route path="/recipe/:id/cooking-mode" element={<CookingMode/>} />
        </Routes>
    )
}

export default App;


