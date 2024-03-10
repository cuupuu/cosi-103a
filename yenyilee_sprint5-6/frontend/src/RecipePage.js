import React , {useEffect, useState}from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './Header';
import { useGroceryList } from './GroceryListContext';

export function RecipePage({recipes}) {
    const { id } = useParams();
    const recipe = recipes[id];
    // const [recipe, setRecipe] = useState(null);
    const { addIngredient} = useGroceryList();

    const handleAddToGroceryList = (ingredient) => {
        addIngredient(ingredient);
    };
    return (
        <div>
            <Header title="McDonald's Recipe" src="/mcdicon.png" recipes={recipes} />
            <div className="recipe-layout">
                <img src={"/"+recipe.image} alt={recipe.title} className="recipe-image" />
                <div className="recipe-content">
                    <h1 className='recipe-title'>{recipe.title}</h1>
                    <h3>{recipe.description}</h3> 
                    <hr ></hr>              
                    <h3>Ingredients</h3>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li className="recipe-list" key={index}>
                                    <button className="add-btn" onClick={() => handleAddToGroceryList(ingredient)}>
                                    +
                                    </button>
                                    {ingredient}
                                </li>
                            ))}
                    <h3>Instructions</h3>
                    <ol>
                            {recipe.instructions.map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                            ))}                      
                    </ol>
                    <Link to="/">
                        <button className="backhome-btn">Back Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
