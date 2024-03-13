import React, { useState } from 'react';

const IngredientSearch = ({ ingredient }) => {
    const [fdcId, setFdcId] = useState('');
    const [error, setError] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const searchIngredientFDCID = async () => {
        setIsSearching(true);

        const apiKey = process.env.FDC_API_KEY; // Using the environment variable
        console.log(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(ingredient)}&api_key=${apiKey}`);

        try {
            const response = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(ingredient)}&api_key=${apiKey}`);
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Network response was not ok');
            }
            if (data.foods && data.foods.length > 0) {
                setFdcId(data.foods[0].fdcId); // Use the first food item's FDC ID
                setError('');
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
                {isSearching ? 'Searching...' : 'Find FDC ID'}
            </button>
            {fdcId && <div>FDC ID: {fdcId}</div>}
            {error && <div>Error: {error}</div>}
        </div>
    );
};

export default IngredientSearch;
