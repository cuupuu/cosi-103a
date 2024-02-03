import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Recipe from './GotoRecipe';
import { BrowserRouter } from 'react-router-dom';

// Mock useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useNavigate: () => mockNavigate, // return the mock function here
}));

// In your beforeEach or individual tests
beforeEach(() => {
  mockNavigate.mockReset(); // Now this should work as expected
});

describe('Recipe Component', () => {
  const mockNavigate = jest.requireMock('react-router-dom').useNavigate;

  beforeEach(() => {
    // Reset mockNavigate before each test
    mockNavigate.mockReset();
  });

  const recipeProps = {
    index: 0,
    title: 'Spicy McCrispy™',
    description: 'A deliciously spicy chicken sandwich.',
    image: '/images/spicy-crispy-chicken.jpeg'
  };

  test('renders recipe information', () => {
    render(<Recipe {...recipeProps} />, { wrapper: BrowserRouter });

    expect(screen.getByText(recipeProps.title)).toBeInTheDocument();
    expect(screen.getByText(recipeProps.description)).toBeInTheDocument();
    expect(screen.getByAltText(`Picture of ${recipeProps.title}`)).toHaveAttribute('src', recipeProps.image);
  });

  test('navigates to recipe page on button click', async () => {
    render(<Recipe {...recipeProps} />, { wrapper: BrowserRouter });

    userEvent.click(screen.getByText('View Details'));
    expect(mockNavigate).toHaveBeenCalledWith(`/recipe/${recipeProps.index}`);
  });
});
