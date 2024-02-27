// Header.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import './Header.css';
import GroceryList from './GroceryList';

const Header = ({ title, src= "mcdicon.png"}) => {
    const [showGroceryList, setShowGroceryList] = useState(false);

    const toggleGroceryList = () => {
      setShowGroceryList(!showGroceryList);
    };

    return (
        <div className="header-navbar">
            <header>
            {/* <img src={src} alt="McDonald's Logo" className="header-img" /> */}
            <Navbar toggleGroceryList={toggleGroceryList} src={src} />
            <h1 className='header-title'>{title}</h1>

            </header>

        </div>
    );
};

export default Header;