// Landing_Page.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Home } from './Landing_Page'; // Assuming your Home component is exported as Home in Landing_Page.js

describe('Landing Page Component', () => {
  test('renders McDonald\'s Menu header', () => {
    render(<Home />);
    const headerElement = screen.getByText(/McDonald's Menu/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders recipe cards with titles and descriptions', () => {
    render(<Home />);
    const recipeTitles = screen.getAllByRole('heading', { level: 2 });
    const recipeDescriptions = screen.getAllByTestId('recipe-description');

    expect(recipeTitles.length).toBeGreaterThan(0);
    expect(recipeDescriptions.length).toBeGreaterThan(0);
  });

  // Add more test cases as needed
});
