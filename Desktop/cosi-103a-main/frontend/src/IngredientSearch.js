import React, { useState } from 'react';

const IngredientSearch = ({ ingredient }) => {
    const [fdcId, setFdcId] = useState('');
    const [error, setError] = useState('');
    const [isSearching, setIsSearching] = useState(false);

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
                // Redirect to the JSON data
                window.location.href = detailJsonUrl; // Note: Exposing your API key in the URL is not secure
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
            <button onClick={searchIngredientFDCID} disabled={isSearching}>
                {isSearching ? 'Searching...' : 'Find Nutritional Info'}
            </button>
            {error && <div>Error: {error}</div>}
        </div>
    );
};

export default IngredientSearch;