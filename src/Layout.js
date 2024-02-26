import React, { useState } from 'react';
import Navbar from './Navbar';
import GroceryList from './GroceryList';

const Layout = ({ children }) => {
  const [showGroceryList, setShowGroceryList] = useState(false);

  const toggleGroceryList = () => {
    setShowGroceryList(!showGroceryList);
  };

  return (
    <div>
      <Navbar />
      <button onClick={toggleGroceryList} className="grocery-list-button">
        {showGroceryList ? 'Hide Grocery List' : 'Show Grocery List'}
      </button>
      {children}
      {showGroceryList && <GroceryList />}
    </div>
  );
};

export default Layout;
