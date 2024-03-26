// Navbar.test.js
jest.mock('../GroceryList', () => () => <div>Mocked Grocery List</div>);

// Now, import your components and the rest of your test setup
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';
import { RecipeContext } from '../recipeContext';

// Define your mock recipes and context provider as before
const mockRecipes = [
  { index: 1, title: 'Recipe 1' },
  { index: 2, title: 'Recipe 2' },
];

const MockNavbar = ({ src }) => (
  <BrowserRouter>
    <RecipeContext.Provider value={{ recipes: mockRecipes }}>
      <Navbar src={src} />
    </RecipeContext.Provider>
  </BrowserRouter>
);

// Tests remain largely the same
describe('Navbar', () => {
  it('renders without crashing', () => {
    render(<MockNavbar src="logo.png" />);
    expect(screen.getByAltText("McDonald's Logo")).toBeInTheDocument();
  });

  it('toggles grocery list visibility on button click', () => {
    render(<MockNavbar src="logo.png" />);
    const button = screen.getByText('Show Grocery List');
    fireEvent.click(button);
    expect(button).toHaveTextContent('Hide Grocery List');
    fireEvent.click(button);
    expect(button).toHaveTextContent('Show Grocery List');
  });

});
