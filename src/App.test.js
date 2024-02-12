import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('App Routing', () => {
  test('renders Home component as the default page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("McDonald's Menu")).toBeInTheDocument();
  });

  test('renders RecipePage component when navigating to a recipe', () => {
    // Assuming RecipePage will display the title of a recipe
    // Note: This assumes you have a way to navigate to RecipePage in your app
    // For a more accurate test, consider mocking RecipePage or implementing a navigation link in Home
    render(
      <MemoryRouter initialEntries={['/recipe/0']}>
        <App />
      </MemoryRouter>
    );
    // Example assertion, adjust based on your RecipePage component's content
    expect(screen.getByText('Ingredients')).toBeInTheDocument();
  });
});
