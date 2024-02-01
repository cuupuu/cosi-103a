import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
    test('renders App component', () => {
        render(<App />);
        expect(screen.getByText("McDonald's App")).toBeInTheDocument();
    });

    test('shows recipe details when a recipe is clicked', () => {
        render(<App />);
        const firstRecipeButton = screen.getAllByText('View Details')[0];
        fireEvent.click(firstRecipeButton);
        expect(screen.getByText('Ingredients:')).toBeInTheDocument();
    });
});