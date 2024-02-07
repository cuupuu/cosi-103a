import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing_Page.css';
import recipes from './Recipe';

export const Home = () => {
    const navigate = useNavigate();

    const goToRecipePage = (index) => {
        navigate(`/recipe/${index}`);
    };
    return (
        <div>
            <header>
                <img src={"mcdicon.png"} alt="McDonald's Logo" className="header-img" />
                <h1>McDonald's Menu</h1>
            </header>
            <main>
                <div className="recipe-grid">
                    {recipes.map((recipe) => (
                        <div className='recipe-card'>
                            <h2>{recipe.title}</h2>
                            <img src={recipe.image} alt={`Picture of ${recipe.title}`} />
                            <p className="description">{recipe.description}</p>
                            <button className="view-details-btn" onClick={() => goToRecipePage(recipe.index)}>View Details</button>
                        </div> 
                    ))}              
                </div>
            </main>
        </div>
       
        

    );
}