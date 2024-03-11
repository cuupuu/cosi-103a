import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { RecipeContext } from './RecipeContext';

export const Home = () => {
    const navigate = useNavigate();
    const { recipes } = useContext(RecipeContext);
    const goToRecipePage = (id) => {
        navigate(`/recipe/${id}`);
    };
    return (
        <div>
            <Header title="McDonald's Menu"/>
            <main>
                <div className="recipe-grid">
                    {recipes.map((recipe) => (
                        <div className='recipe-card'>
                            <h2>{recipe.title}</h2>
                            <img src={recipe.image} alt={`Picture of ${recipe.title}`} />
                            <p className="description">{recipe.description}</p>
                            <button className="view-details-btn" onClick={() => goToRecipePage(recipe.id)}>View Details</button>
                        </div> 
                    ))}              
                </div>
            </main>
        </div>
    );
}