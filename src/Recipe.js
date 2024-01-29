// Recipe.js
// Recipe.js
import React, { useState } from 'react';
import './styles.css';
const Recipe = ({ title, image, description, ingredients, instructions }) => {
    const [showDetails, setShowDetails] = useState(false);
    const handleButtonClick = () => {
        setShowDetails(!showDetails);
        console.log('Button clicked, new showDetails value:', !showDetails);
    };
    // const handleButtonClick = () => {
    //     setShowDetails(!showDetails);
    // };

    return (
        <div className="recipe">
             <h2>{title}</h2>
             <img src={image} alt={title} />
                <p>{description}</p>
            <button className="view-details-btn" onClick={handleButtonClick}>
                {showDetails ? 'Hide Details' : 'View Details'}
            </button>
            {showDetails && (
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

// function Recipe() {
//     const [showDetails, setShowDetails] = useState(false);
  
//     const handleClick = () => {
//       setShowDetails(!showDetails);
//     };
  
//     return (
//       <div>
//         <button onClick={handleClick}>View Details</button>
//         {showDetails ? <div>Details go here</div> : null}
//       </div>
//     );
//   }
  

// import React from 'react';

// const Recipe = ({ title, image, description, ingredients, instructions }) => {
//     return (
//         <div className="recipe">
//             <h2>{title}</h2>
//             <img src={image} alt={title} />
//             <p className="description">{description}</p>
//             <button className="view-details-btn">View Details</button>
//             <div className="details">
//                 <h3>Ingredients:</h3>
//                 <ul>
//                     {ingredients.map((ingredient, index) => (
//                         <li key={index}>{ingredient}</li>
//                     ))}
//                 </ul>
//                 <h3>Instructions:</h3>
//                 {instructions.map((instruction, index) => (
//                     <p key={index}>{instruction}</p>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Recipe;