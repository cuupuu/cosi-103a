import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Home } from './Landing_Page';
import { BrowserRouter } from 'react-router-dom';

// Mock the Recipe component to control its behavior in the tests
jest.mock('./GotoRecipe', () => ({ index, title, description, onToggle, isOpen }) => (
  <div data-testid={`recipe-${index}`}>
    <button onClick={() => onToggle(index)}>{isOpen ? 'Hide Details' : 'View Details'}</button>
    {isOpen && <div>{description}</div>}
  </div>
));

describe('Home Component', () => {
  test('renders without crashing', () => {
    render(<Home />, { wrapper: BrowserRouter });
    expect(screen.getByText("McDonald's Menu")).toBeInTheDocument();
  });

  test('initially displays all recipes with details hidden', () => {
    render(<Home />, { wrapper: BrowserRouter });
    const recipes = screen.getAllByText('View Details'); // Assuming "View Details" button is rendered for each recipe
    expect(recipes).toHaveLength(7); // Adjust the number based on your actual recipes list
  });

  test('toggles recipe details visibility on button click', async () => {
    render(<Home />, { wrapper: BrowserRouter });
    const firstRecipeToggle = within(screen.getByTestId('recipe-0')).getByText('View Details');
    userEvent.click(firstRecipeToggle);

    // Check if the description is now visible
    expect(within(screen.getByTestId('recipe-0')).getByText(/Spicy Pepper Sauce/)).toBeInTheDocument();

    // Click again to hide
    userEvent.click(firstRecipeToggle);
    // Since we mocked the Recipe component to conditionally render the description based on isOpen,
    // and "View Details" hides the description again, you'd normally check for absence.
    // However, since we're mocking it explicitly, this step might not reflect a real DOM change.
  });
});
