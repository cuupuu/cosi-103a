import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Home } from '../LandingPage';
import { RecipeContext } from '../recipeContext';

// Mock useNavigate
const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

// Mock Header
jest.mock('../Header', () => () => <div>Header Mock</div>);

describe('Home', () => {
  it('renders correctly with recipes', () => {
    const mockRecipes = [
      { index: 1, title: 'Recipe 1', image: 'image1.jpg', description: 'Description 1' },
      { index: 2, title: 'Recipe 2', image: 'image2.jpg', description: 'Description 2' },
    ];

    render(
      <BrowserRouter>
        <RecipeContext.Provider value={{ recipes: mockRecipes }}>
          <Home />
        </RecipeContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText('Recipe 1')).toBeInTheDocument();
    expect(screen.getByText('Recipe 2')).toBeInTheDocument();
  });

  it('shows message when no recipes are available', () => {
    render(
      <BrowserRouter>
        <RecipeContext.Provider value={{ recipes: [] }}>
          <Home />
        </RecipeContext.Provider>
      </BrowserRouter>
    );
  
    // If the message is expected to be present, use getByText and catch the error if not found.
    let message;
    try {
      message = screen.getByText('No recipes to display');
    } catch (error) {
      message = null;
    }
    
    expect(message).not.toBeNull(); // Adjust this line if your logic or message differs.
  });
  
  
  
  it('navigates to the recipe page on button click', () => {
    const mockRecipes = [
      { index: 1, title: 'Recipe 1', image: 'image1.jpg', description: 'Description 1' },
    ];

    render(
      <BrowserRouter>
        <RecipeContext.Provider value={{ recipes: mockRecipes }}>
          <Home />
        </RecipeContext.Provider>
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText('View Details'));
    expect(mockedNavigate).toHaveBeenCalledWith('/recipe/1');
  });
});
