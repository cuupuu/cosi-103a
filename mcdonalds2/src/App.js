import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Home} from './LandingPage';
import {RecipePage} from './RecipePage';
import recipes from './Recipe';
import Contact from './Contact';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/recipe/:id" element={<RecipePage recipes={recipes} />} />
            <Route path="/contact" component={Contact} />
        </Routes>

    )
}

export default App;

