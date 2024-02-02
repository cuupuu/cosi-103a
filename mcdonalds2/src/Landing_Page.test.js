// Landing_Page.test.js
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Home } from './Landing_Page';

describe('Landing Page Component', () => {
  const mockRecipes = [
    { id: '1', title: 'Recipe 1', description: 'Description 1', image: 'image1.jpg' },
    { id: '2', title: 'Recipe 2', description: 'Description 2', image: 'image2.jpg' },
  ];

  test('renders McDonald\'s Menu header', () => {
    render(
      <MemoryRouter>
        <Home recipes={mockRecipes} />
      </MemoryRouter>
    );
    const headerElement = screen.getByText(/McDonald's Menu/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders recipe cards with titles and descriptions', () => {
    render(
      <MemoryRouter>
        <Home recipes={mockRecipes} />
      </MemoryRouter>
    );
    const recipeTitles = screen.getAllByRole('heading', { level: 2 });
    const recipeDescriptions = screen.getAllByTestId('recipe-description');

    expect(recipeTitles.length).toBeGreaterThan(0);
    expect(recipeDescriptions.length).toBeGreaterThan(0);
  });

  // Add more test cases as needed
});

