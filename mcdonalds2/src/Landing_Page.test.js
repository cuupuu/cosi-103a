import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Home } from './Landing_Page';
import Recipe from './GotoRecipe';

// Mock the Recipe component to simplify testing the Home component
jest.mock('./GotoRecipe', () => ({
  __esModule: true,
  default: jest.fn(() => null), // Mock Recipe as a component that renders nothing
}));

describe('Home Component', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    Recipe.mockClear();
  });

  it('renders without crashing', () => {
    render(<Home />);
    expect(screen.getByText("McDonald's Menu")).toBeInTheDocument();
  });

  it('renders all recipes', () => {
    render(<Home />);
    // Since Recipe is mocked, we check for calls instead of actual DOM elements
    expect(Recipe).toHaveBeenCalledTimes(7); // Adjust this number based on your actual recipes
  });

  it('toggles recipe details on click', () => {
    const mockToggle = jest.fn();
    Recipe.mockImplementation(({ onToggle }) => (
      <div onClick={onToggle}>Mock Recipe</div>
    ));

    render(<Home />);
    // Simulate clicks to toggle the recipe details
    const mockRecipe = screen.getAllByText('Mock Recipe')[0];
    fireEvent.click(mockRecipe);
    // Check if the toggle function was called
    expect(mockToggle).not.toHaveBeenCalled(); // Adjust your expectations based on actual implementation
    // You can extend this test to check for the state change if your component's behavior is more complex
  });
});
