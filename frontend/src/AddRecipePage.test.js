import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import AddRecipe from './AddRecipePage';
import { RecipeContext } from './recipeContext';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('AddRecipe', () => {
  const mockAddRecipe = jest.fn();

  beforeEach(() => {
    mockAddRecipe.mockClear();

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([{ index: 1 }]),
        clone: () => ({ text: () => Promise.resolve('Response text') }), // Dummy clone method
      })
    );
  });

  const wrapper = ({ children }) => (
    <BrowserRouter>
      <RecipeContext.Provider value={{ addRecipe: mockAddRecipe, recipes: [] }}>
        {children}
      </RecipeContext.Provider>
    </BrowserRouter>
  );

  it('renders correctly', () => {
    render(<AddRecipe />, { wrapper });
    expect(screen.getByText('Add Your Recipe')).toBeInTheDocument();
    expect(screen.getByLabelText('Recipe JSON:')).toBeInTheDocument();
  });

  it('submits a recipe and calls addRecipe with the new recipe', async () => {
    const { getByText, getByLabelText } = render(<AddRecipe />, { wrapper });

    fireEvent.change(getByLabelText('Recipe JSON:'), {
      target: { value: JSON.stringify({ title: 'New Recipe', ingredients: ['Ingredient 1'], instructions: ['Step 1'], image: 'newrecipe.png' }) },
    });
    fireEvent.click(getByText('Submit Recipe'));

    await waitFor(() => {
      expect(mockAddRecipe).toHaveBeenCalledTimes(1);
    });

  });

});
