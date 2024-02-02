import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function RecipePage({ recipes }) {
    const { id } = useParams();
    const recipe = recipes[id];
    console.log(recipe.image);
    console.log(recipe.title);
    console.log(recipe.description);
    console.log(recipe.ingredients);
    return (
        <div>
            <header>
                <h1>McDonald's App</h1>
            </header>
            <h1>{recipe.title}</h1>
            <img src={'/'+recipe.image} alt={recipe.title} />
            <p>{recipe.description}</p>
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
                <button>Back Home</button>
            </Link>
        </div>
    );
};

