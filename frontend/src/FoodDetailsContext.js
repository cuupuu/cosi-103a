import React, { createContext, useState } from 'react';

export const FoodDetailsContext = createContext();

export const FoodDetailsProvider = ({ children }) => {
  const [foodDetails, setFoodDetails] = useState(null);

  return (
    <FoodDetailsContext.Provider value={{ foodDetails, setFoodDetails }}>
      {children}
    </FoodDetailsContext.Provider>
  );
};