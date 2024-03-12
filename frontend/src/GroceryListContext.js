import React, { createContext, useContext, useState } from 'react';

const GroceryListContext = createContext();

export const useGroceryList = () => useContext(GroceryListContext);

export const GroceryListProvider = ({ children }) => {
    const [groceryList, setGroceryList] = useState([]);

    const addIngredient = (ingredient) => {
        setGroceryList((prevList) => [...prevList, ingredient]);
    };


    const removeIngredient = (index) => {
        setGroceryList((prevList) => prevList.filter((_, i) => i !== index));
    };

    const clearGroceryList = () => {
        setGroceryList([]);
    };

    const value = {
        groceryList,
        addIngredient,
        removeIngredient,
        clearGroceryList,
    };

    return (
        <GroceryListContext.Provider value={value}>
            {children}
        </GroceryListContext.Provider>
    );
};
