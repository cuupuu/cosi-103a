// GroceryList.js

import React, { useState } from 'react';
import { useGroceryList } from './GroceryListContext';
import './GroceryList.css'; // Import the CSS file for GroceryList styling

const GroceryList = ({toggleGroceryList}) => {
    console.log('GroceryList is being rendered'); // Add this line
    const { groceryList, addIngredient, removeIngredient, clearGroceryList } = useGroceryList();
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddIngredient = () => {
        if (inputValue.trim() !== '') {
            addIngredient(inputValue);
            setInputValue('');
        }
    };

    return (
        <div className="grocery-list-container"> {/* Apply a class for styling */}
            <h2>Grocery List</h2>
            <input className='ingredient-input'
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter ingredient..."
            />
            <button className="add-ingredient" onClick={handleAddIngredient}>Add Ingredient</button>
            <button className="clear-list" onClick={clearGroceryList}>Clear Grocery List</button>
            <button onClick={toggleGroceryList}>Close Grocery List</button> {/* Use toggleGroceryList in the onClick handler */}
            <ul>
                {groceryList.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient}
                        <button className="remove-ingredient" onClick={() => removeIngredient(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GroceryList;
