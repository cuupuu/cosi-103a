import React, { useState } from 'react';

const Recipe = ({ title, description, ingredients, instructions, image }) => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  return (
    <div className="recipe">
      <h2>{title}</h2>
      <img src={image} alt={`Picture of ${title}`} />
      <p className="description">{description}</p>
      <button className="view-details-btn" onClick={toggleDetails}>
        View Details
      </button>
      {isDetailsVisible && (
        <div className="details">
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
};

export default Recipe;


