import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Recipe_Page } from './Recipe_Page';

// Mocking useParams
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // Preserve other exports
  useParams: () => ({
    id: '0' // Mock return value for useParams hook
  }),
}));

describe('RecipePage Component', () => {
  const mockRecipes = [
    {
      title: 'Spicy McCrispy™',
      description: "Spicy Pepper Sauce topping...",
      ingredients: ['Ingredient 1', 'Ingredient 2'],
      instructions: ['Step 1', 'Step 2'],
      image: 'SpicyCrispyChicken.jpeg',
    },
    // Add more recipes if needed for testing
  ];

  test('renders recipe details correctly', () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<RecipePage recipes={mockRecipes} />} />
        </Routes>
      </MemoryRouter>
    );

    // Check that the page renders recipe details correctly
    expect(screen.getByText(mockRecipes[0].title)).toBeInTheDocument();
    expect(screen.getByText(mockRecipes[0].description)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: mockRecipes[0].title })).toHaveAttribute('src', `/${mockRecipes[0].image}`);
    mockRecipes[0].ingredients.forEach(ingredient => {
      expect(screen.getByText(ingredient)).toBeInTheDocument();
    });
    mockRecipes[0].instructions.forEach(instruction => {
      expect(screen.getByText(instruction)).toBeInTheDocument();
    });
    expect(screen.getByText('Back Home').closest('a')).toHaveAttribute('href', '/');
  });
});
