import React , {useContext}from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { RecipeContext } from './recipeContext';


export const Home = () => {
    const navigate = useNavigate();

    const { recipes } = useContext(RecipeContext);

    const goToRecipePage = (index) => {
        navigate(`/recipe/${index}`);
    };

      // Check if recipes is defined and is an array before trying to map over it
    //   if (recipes.length === 0) {
    //     return <div>No recipes to display</div>;
    //   }
      
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