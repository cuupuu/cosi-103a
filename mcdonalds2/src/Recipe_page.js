import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./recipe.css";


export function RecipePage({ recipes }) {
    const { id } = useParams();
    const recipe = recipes[id];
    return (
        <div>       
            <header>
                <h1>McDonald's Recipe</h1>
            </header>     
            <div className="recipe-layout">
                <img src={"/"+recipe.image} alt={recipe.title} className="recipe-image" />
                <div className="recipe-content">
                    <h1>{recipe.title}</h1>
                    <h3>{recipe.description}</h3>       
                    <h3>Ingredients:</h3>
                    <ol>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ol>
                    <h3>Instructions:</h3>
                    <ol>
                        {recipe.instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ol>
                    <Link to="/">
                        <button className="view-details-btn">Back Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
