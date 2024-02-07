import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import recipes from './Recipe';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
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
            </div>
        </nav>
    );
};

export default Navbar;