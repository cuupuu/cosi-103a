// Recipe_page.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import {RecipePage} from './Recipe_page'; // Adjust the import path accordingly


test('renders RecipePage component with recipe details', () => {
    const mockRecipe = {
        id: '0',
        title: 'Test Recipe',
        description: 'This is a test recipe description.',
        image: 'test-image.jpg',
        ingredients: ['Ingredient 1', 'Ingredient 2'],
        instructions: ['Step 1', 'Step 2'],
      };
  
      render(<RecipePage recipes={[{ id: '0', title: 'Test Recipe', description: 'This is a test recipe description.', image: 'test-image.jpg', ingredients: ['Ingredient 1'], instructions: ['Instruction 1'] }]} />);


  
    // Assertions
    const recipeTitleElement = screen.getByText(/Test Recipe/i);
    const recipeDescriptionElement = screen.getByText(/This is a test recipe description/i);
    const recipeImageElement = screen.getByAltText(/Test Recipe/i);
    const ingredientElement = screen.getByText(/Ingredient 1/i);
  
    // Assert that each element is present
    expect(recipeTitleElement).toBeInTheDocument();
    expect(recipeDescriptionElement).toBeInTheDocument();
    expect(recipeImageElement).toBeInTheDocument();
    expect(ingredientElement).toBeInTheDocument();
  });
  