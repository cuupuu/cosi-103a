import React from 'react';
import { useNavigate } from 'react-router-dom';
// import recipes from './Recipe';
import Header from './Header';


export const Home = ({recipes}) => {
    const navigate = useNavigate();

    const goToRecipePage = (index) => {
        navigate(`/recipe/${index}`);
    };

      // Check if recipes is defined and is an array before trying to map over it
  if (!Array.isArray(recipes)) {
    return <div>No recipes to display</div>; // Or some other placeholder content
  }
    return (
        <div>
            <Header title="McDonald's Menu" recipes={recipes} />
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