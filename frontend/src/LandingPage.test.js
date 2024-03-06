import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './LandingPage';
import { useNavigate } from 'react-router-dom';

// Mock useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // Import and spread the actual module
  useNavigate: jest.fn(), // Mock useNavigate
}));

describe('Home Component', () => {
  it('renders correctly', () => {
    render(<Home />, { wrapper: BrowserRouter }); // Wrap the component with BrowserRouter
    expect(screen.getByText("McDonald's Menu")).toBeInTheDocument();
    // Add more assertions here as needed
  });

  it('navigates to recipe page on button click', async () => {
    const mockNavigate = jest.fn();
    useNavigate.mockImplementation(() => mockNavigate); // Use the mock function for navigate

    render(<Home />, { wrapper: BrowserRouter });

    const viewDetailsButton = screen.getAllByText('View Details')[0]; // Assume there's at least one recipe
    await userEvent.click(viewDetailsButton);

    // Check if navigate was called with the correct path
    // This assumes your recipes array has a consistent indexing system
    expect(mockNavigate).toHaveBeenCalledWith(`/recipe/0`); // Adjust based on your actual data
  });
});
