import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import { useGroceryList } from './GroceryListContext';
import { RecipeContext } from './recipeContext';
import './RecipePage.css';

export function RecipePage() {
    const { id } = useParams();
    const { recipes } = useContext(RecipeContext);
    const recipe = recipes.find(r => r.index == id);
    console.log('recipe:',recipe);

    const { addIngredient } = useGroceryList();
    const handleAddToGroceryList = (ingredient) => {
        addIngredient(ingredient);
    };

    return (
        <div>
            <Header title="McDonald's Recipe" src="/mcdicon.png" />
            <div className="recipe-layout">
                <img src={"/" + recipe.image} alt={recipe.title} className="recipe-image" />
                <div className="recipe-content">
                    <h1 className='recipe-title'>{recipe.title}</h1>
                    <h3>{recipe.description}</h3>
                    <hr></hr>
                    <h3>Ingredients</h3>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li className="recipe-list" key={index}>
                                <button className="add-btn" onClick={() => handleAddToGroceryList(ingredient)}>+</button>
                                {ingredient}
                            </li>
                        ))}
                    </ul>
                    <h3>Instructions</h3>
                    <ol>
                        {recipe.instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ol>
                    <div>
                    <Link to="/" className="button-link">
                        <button className="backhome-btn">Back Home</button>
                    </Link>
                    <Link to={`/recipe/${id}/cooking-mode`} className="button-link">
                        <button className="backhome-btn">Cooking Mode</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}