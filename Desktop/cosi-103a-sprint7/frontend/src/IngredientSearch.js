import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FoodDetailsContext } from './FoodDetailsContext';
import './IngredientSearch.css';

const IngredientSearch = ({ ingredient }) => {
    const [error, setError] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const { setFoodDetails } = useContext(FoodDetailsContext);

    const navigate = useNavigate();

    const searchIngredientFDCID = async () => {
        setIsSearching(true);
        const apiKey = process.env.REACT_APP_API_KEY; // This should be set in your serverless function's environment variables

        try {
            const response = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(ingredient)}&api_key=${apiKey}`);
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Network response was not ok');
            }
            if (data.foods && data.foods.length > 0) {
                // Construct the URL to directly point to the JSON data
                const fdcId = data.foods[0].fdcId;
                const detailJsonUrl = `https://api.nal.usda.gov/fdc/v1/food/${fdcId}?format=abridged&api_key=${apiKey}`;

                // Fetch the food details
                const detailResponse = await fetch(detailJsonUrl);
                const detailData = await detailResponse.json();
                if (!detailResponse.ok) {
                    throw new Error(detailData.message || 'Network response was not ok');
                }
                console.log(detailData);

            // Store the food details in the state variable
            setFoodDetails(detailData);
            // Navigate to IngredientDetails component
            navigate('/ingredientDetails');

            } else {
                setError('No matching foods found');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Failed to fetch the food ID');
        } finally {
            setIsSearching(false);
        }
    };

    return (
        <div>
            <button class="search-ingredient" onClick={searchIngredientFDCID} disabled={isSearching}>
                {isSearching ? 'Searching...' : 'info'}
            </button>
            {error && <div>Error: {error}</div>}
        </div>
    );
};


export default IngredientSearch;

