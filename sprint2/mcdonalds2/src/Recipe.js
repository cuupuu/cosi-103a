import React from 'react';
import { useNavigate } from 'react-router-dom';

const Recipe = ({ index, title, description,image,onToggle }) => {
    const navigate = useNavigate();

    // const toggleDetails = (index) => {
    //     onToggle(index);
    // };·
    const goToRecipePage = (index) => {
        console.log("Navigating to /recipe");
        navigate(`/recipe/${index}`);
    };

    return (
        <div>
            <h2>{title}</h2>
            <img src={image} alt={`Picture of ${title}`} />
            <p className="description">{description}</p>
            <button className="view-details-btn" onClick={() => goToRecipePage(index)}>
                View Details
            </button>

        </div>
    );
}

export default Recipe;



