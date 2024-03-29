import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { RecipePage } from '../RecipePage';
import { RecipeContext } from '../recipeContext';
import * as GroceryListContext from '../GroceryListContext';
import { FoodDetailsContext } from '../FoodDetailsContext';

// Mock useParams hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '1' }),
  Link: ({ children }) => children,
}));

// Mock Header component
jest.mock('../Header', () => () => <header>Mocked Header</header>);

// Setup mock for useGroceryList hook
jest.mock('../GroceryListContext', () => ({
  useGroceryList: jest.fn(),
}));

const mockAddIngredient = jest.fn();

const mockRecipe = {
  index: 1,
  title: 'Test Recipe',
  description: 'Test Description',
  image: 'test-image.jpg',
  ingredients: ['Ingredient 1', 'Ingredient 2'],
  instructions: ['Instruction 1', 'Instruction 2'],
};

beforeEach(() => {
  // Clear all mocks before each test
  jest.clearAllMocks();

  // Mock implementation of useGroceryList hook
  GroceryListContext.useGroceryList.mockReturnValue({
    addIngredient: mockAddIngredient,
  });
});

const wrapper = ({ children }) => (
  <MemoryRouter>
    <RecipeContext.Provider value={{ recipes: [mockRecipe] }}>
      <FoodDetailsContext.Provider value={{ foodDetails: {}, setFoodDetails: jest.fn() }}>
        {children}
      </FoodDetailsContext.Provider>
    </RecipeContext.Provider>
  </MemoryRouter>
);

describe('RecipePage', () => {
  it('renders correctly', () => {
    render(<RecipePage />, { wrapper });
    expect(screen.getByText('Test Recipe')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Ingredient 1')).toBeInTheDocument();
    expect(screen.getByText('Instruction 1')).toBeInTheDocument();
  });

  it('adds ingredient to grocery list on button click', () => {
    render(<RecipePage />, { wrapper });
  
    // Use the first add button
    const addButton = screen.getAllByText('+')[0];
    fireEvent.click(addButton);
    expect(mockAddIngredient).toHaveBeenCalledWith('Ingredient 1');
  });
  
  it('contains navigation links', () => {
    render(<RecipePage />, { wrapper });
  
    // Use the first add button
    const addButton = screen.getAllByText('+')[0];
    fireEvent.click(addButton);
    expect(mockAddIngredient).toHaveBeenCalledWith('Ingredient 1');
  });


    // render(<RecipePage />, { wrapper });

  }
);
