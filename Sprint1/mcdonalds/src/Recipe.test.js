import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Recipe from './Recipe';

describe('Recipe component', () => {
  const recipeData = {
    title: 'Test Recipe',
    description: 'This is a test recipe description.',
    ingredients: ['Ingredient 1', 'Ingredient 2'],
    instructions: ['Instruction 1', 'Instruction 2'],
    image: 'test-image.jpg',
  };

  it('renders recipe card with initial details hidden', () => {
    const { getByText, queryByText } = render(<Recipe {...recipeData} />);

    // Check if the title and description are rendered
    expect(getByText('Test Recipe')).toBeInTheDocument();
    expect(getByText('This is a test recipe description.')).toBeInTheDocument();

    // Check if ingredients and instructions are not initially visible
    expect(queryByText('Ingredient 1')).not.toBeInTheDocument();
    expect(queryByText('Instruction 1')).not.toBeInTheDocument();
  });
});