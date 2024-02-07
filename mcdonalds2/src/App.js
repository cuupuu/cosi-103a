import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Home} from './Landing_Page';
import {RecipePage} from './Recipe_Page';
import recipes from './Recipe';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/recipe/:id" element={<RecipePage recipes={recipes} />} />
        </Routes>

    )
}

export default App;

