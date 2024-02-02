import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';

test('navigates to RecipePage when a recipe is clicked', () => {
  const mockRecipes = [
    {
      id: '0',
      title: "McDonald's Recipe",
      description: 'This is a McDonald\'s recipe description.',
      image: 'mcdonalds-image.jpg',
    },
  ];

  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<App recipes={mockRecipes} />} />
      </Routes>
    </MemoryRouter>
  );

  // Click on the link with a partial match of the text
  fireEvent.click(screen.getByText(/McDonald's Recipe/i));

  // After clicking the link, assert that the RecipePage component is rendered
  const recipePageElement = screen.getByRole('heading', { name: /McDonald's Recipe/i });
  expect(recipePageElement).toBeInTheDocument();
});
