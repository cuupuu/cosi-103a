import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Home } from './LandingPage';

describe('LandingPage', () => {
    test('renders header with correct title', () => {
        render(<Home />);
        const headerElement = screen.getByText("McDonald's Menu");
        expect(headerElement).toBeInTheDocument();
    });

    test('renders recipe cards with correct information', () => {
        render(<Home />);
        const recipeCards = screen.getAllByTestId('recipe-card');
        expect(recipeCards).toHaveLength(3); // Assuming there are 3 recipes in the 'recipes' array

        // Example assertions for the first recipe card
        expect(recipeCards[0]).toHaveTextContent('Recipe 1');
        expect(recipeCards[0]).toHaveTextContent('Description 1');
    });

    test('navigates to recipe page when "View Details" button is clicked', () => {
        render(<Home />);
        const viewDetailsButton = screen.getByText('View Details');
        fireEvent.click(viewDetailsButton);
    });
});
