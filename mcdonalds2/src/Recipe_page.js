import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function RecipePage({ recipes }) {
    const { id } = useParams();
    const recipe = recipes[id];
    return (
        <div>       
            <header>
                <img src={"/mcdicon.png"} alt="McDonald's Logo" className="header-img" />
                <h1>McDonald's Recipe</h1>
            </header>     
            <div className="recipe-layout">
                <img src={"/"+recipe.image} alt={recipe.title} className="recipe-image" />
                <div className="recipe-content">
                    <h1 className='recipe-title'>{recipe.title}</h1>
                    <h3>{recipe.description}</h3> 
                    <hr ></hr>      
                    <h3>Ingredients</h3>
                    <ol>
                        <p>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </p>
                    </ol>
                    <h3>Instructions</h3>
                    <ol>
                        <p>
                            {recipe.instructions.map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                            ))}
                        </p>                       
                    </ol>
                    <Link to="/">
                        <button className="backhome-btn">Back Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
 export default RecipePage;
