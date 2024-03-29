// Header.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import './Header.css';
// import recipes from './Recipe';

const Header = ({ title, src= "mcdicon.png", recipes}) => {
    const [showGroceryList, setShowGroceryList] = useState(false);

    const toggleGroceryList = () => {
      setShowGroceryList(!showGroceryList);
    };

    return (
        <div className="header-navbar">
            <header>
            {/* <img src={src} alt="McDonald's Logo" className="header-img" /> */}
            <Navbar toggleGroceryList={toggleGroceryList} src={src} recipes={recipes}/>
            <h1 className='header-title'>{title}</h1>

            </header>

        </div>
    );
};

export default Header;