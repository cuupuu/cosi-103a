import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import Recipe from './GotoRecipe';

// Directly mock useNavigate
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // Preserve all the original exports
  useNavigate: () => mockNavigate, // Override useNavigate with the mock
}));

describe('Recipe Component', () => {
  beforeEach(() => {
    mockNavigate.mockClear(); // Clear mock's history before each test
  });

  const recipeProps = {
    index: 1,
    title: 'Test Recipe',
    description: 'This is a test description',
    image: 'test-image.jpg'
  };

  test('renders recipe information', () => {
    render(
      <BrowserRouter>
        <Recipe {...recipeProps} />
      </BrowserRouter>
    );

    expect(screen.getByText(recipeProps.title)).toBeInTheDocument();
    expect(screen.getByText(recipeProps.description)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: `Picture of ${recipeProps.title}` })).toHaveAttribute('src', recipeProps.image);
  });

  test('navigates to recipe page on button click', () => {
    render(
      <BrowserRouter>
        <Recipe {...recipeProps} />
      </BrowserRouter>
    );

    // Simulate user clicking the "View Details" button
    userEvent.click(screen.getByRole('button', { name: 'View Details' }));

    // Check if navigate function was called with the correct path
    expect(mockNavigate).toHaveBeenCalledWith(`/recipe/${recipeProps.index}`);
  });
});
