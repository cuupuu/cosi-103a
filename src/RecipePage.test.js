import React from 'react';
import { render, screen } from '@testing-library/react';
import { RecipePage } from './RecipePage';
import { MemoryRouter, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// Mocking useParams to return a specific recipe ID
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: jest.fn(),
}));

describe('RecipePage', () => {
  const mockRecipes = {
    '1': {
      title: 'Big Mac',
      image: 'big-mac.jpg',
      description: 'A delicious burger',
      ingredients: ['Bun', 'Beef Patty', 'Lettuce', 'Cheese'],
      instructions: ['Cook the beef patty', 'Assemble the burger']
    }
  };

  beforeEach(() => {
    // Mock useParams before each test
    useParams.mockReturnValue({ id: '1' });
  });

  it('renders recipe details correctly', () => {
    render(
      <MemoryRouter>
        <RecipePage recipes={mockRecipes} />
      </MemoryRouter>
    );

    expect(screen.getByText("Big Mac")).toBeInTheDocument();
    expect(screen.getByText("A delicious burger")).toBeInTheDocument();
    mockRecipes['1'].ingredients.forEach(ingredient => {
      expect(screen.getByText(ingredient)).toBeInTheDocument();
    });
    mockRecipes['1'].instructions.forEach(instruction => {
      expect(screen.getByText(instruction)).toBeInTheDocument();
    });
    expect(screen.getByRole('img', { name: 'Big Mac' })).toHaveAttribute('src', '/big-mac.jpg');
  });

  it('provides a link to navigate back home', () => {
    render(
      <MemoryRouter>
        <RecipePage recipes={mockRecipes} />
      </MemoryRouter>
    );

    expect(screen.getByRole('link', { name: 'Back Home' })).toHaveAttribute('href', '/');
  });

});
