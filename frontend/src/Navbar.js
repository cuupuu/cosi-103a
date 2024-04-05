import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import GroceryList from './GroceryList';
import { RecipeContext } from './recipeContext';

const Navbar = ({src}) => {
    const [showGroceryList, setShowGroceryList] = useState(false);

    const toggleGroceryList = () => {
      setShowGroceryList(!showGroceryList);
    };

    const { recipes } = useContext(RecipeContext);

    return (
        <nav className="navbar">
            <img src={src} alt="McDonald's Logo" className="header-img" />
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/addRecipePage">Add Recipes</Link>
                <Link to="/contact">Contact</Link>
                <div className="dropdown">
                    <button className="dropbtn">Recipes</button>
                    <div className="dropdown-content">
                        {recipes.map((recipe) => (
                            <Link key={recipe.index} to={`/recipe/${recipe.index}`}>
                                {recipe.title}
                            </Link>
                        ))}
                    </div>
                </div>
                <button onClick={toggleGroceryList} className="grocery-list-button">
                    {showGroceryList ? 'Hide Grocery List' : 'Show Grocery List'}
                </button>
                {showGroceryList && <GroceryList  toggleGroceryList={toggleGroceryList}/>}
            </div>

        </nav>
    );
};

export default Navbar;