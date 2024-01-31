import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Recipe from './Recipe';

const mockRecipe = {
    index: 0,
    title: 'Test Recipe',
    description: 'Test Description',
    ingredients: ['Ingredient 1', 'Ingredient 2'],
    instructions: ['Step 1', 'Step 2'],
    image: 'test.jpg',
    isOpen: false,
    onToggle: jest.fn()
};

describe('Recipe Component', () => {
    test('renders Recipe component', () => {
        render(<Recipe {...mockRecipe} />);
        expect(screen.getByText('Test Recipe')).toBeInTheDocument();
        expect(screen.getByText('Test Description')).toBeInTheDocument();
    });

    test('calls onToggle when the button is clicked', () => {
        render(<Recipe {...mockRecipe} />);
        const button = screen.getByText('View Details');
        fireEvent.click(button);
        expect(mockRecipe.onToggle).toHaveBeenCalledWith(mockRecipe.index);
    });

    test('displays ingredients and instructions when isOpen is true', () => {
        const updatedProps = {...mockRecipe, isOpen: true};
        render(<Recipe {...updatedProps} />);
        expect(screen.getByText('Ingredients:')).toBeInTheDocument();
        expect(screen.getByText('Step 1')).toBeInTheDocument();
    });
});
