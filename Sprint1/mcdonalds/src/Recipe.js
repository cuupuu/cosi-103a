import React from 'react';
const Recipe = ({ index, title, description, ingredients, instructions, image,isOpen, onToggle }) => {
    const toggleDetails = (index) => {
        onToggle(index);
    };


    return (
        <div>
            <h2>{title}</h2>
            <img src={image} alt={`Picture of ${title}`} />
            <p className="description">{description}</p>
            <button className="view-details-btn" onClick={() => toggleDetails(index)}>
                View Details
            </button>
            {isOpen && (
                <div>
                    <h3>Ingredients:</h3>
                    <ul>
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <h3>Instructions:</h3>
                    {instructions.map((instruction, index) => (
                        <p key={index}>{instruction}</p>
                    ))}
                </div>
            )}
        </div>
    );
}
export default Recipe;


