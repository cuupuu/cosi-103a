import React, { useState } from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  const [showGroceryList, setShowGroceryList] = useState(false);

  const toggleGroceryList = () => {
    setShowGroceryList(!showGroceryList);
    console.log(showGroceryList);
    
  };

  return (
    <div>
      {/* <Header showGroceryList={showGroceryList} toggleGroceryList={toggleGroceryList} /> */}
{/* 
      <button onClick={toggleGroceryList} className="grocery-list-button">
        {showGroceryList ? 'Hide Grocery List' : 'Show Grocery List'}
      </button> */}
      {children}
      {/* {showGroceryList && <GroceryList  toggleGroceryList={toggleGroceryList}/>} */}
    </div>
  );
};

export default Layout;
