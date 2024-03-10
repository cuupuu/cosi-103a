// GroceryList.js

import React from 'react';
import { useGroceryList } from './GroceryListContext';
import './GroceryList.css'; 

const GroceryList = ({toggleGroceryList}) => {
    console.log('GroceryList is being rendered'); // Add this line
    const { groceryList, removeIngredient, clearGroceryList } = useGroceryList();

    return (
        <div className="grocery-list-container"> {/* Apply a class for styling */}
            <p>
                <button className="grocery-close-button" onClick={toggleGroceryList}>x</button> {/* Use toggleGroceryList in the onClick handler */}
            </p>
            <h2>Grocery List</h2>
            <ol>
                {groceryList.map((ingredient, index) => (
                    <li className='grocery-list-content' key={index}>
                        <button className="remove-ingredient" onClick={() => removeIngredient(index)}>-</button>
                        {ingredient}
                    </li>
                ))}
            </ol>
            <button className="clear-list" onClick={clearGroceryList}>Clear</button>
        </div>
    );
};

export default GroceryList;
