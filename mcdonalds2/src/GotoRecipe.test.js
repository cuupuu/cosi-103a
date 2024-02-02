import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Recipe from './GotoRecipe';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

const mockRecipe = {
  index: 0,
  title: 'Test Recipe',
  description: 'This is a test recipe description.',
  image: 'test-image.jpg',
};

test('renders Recipe component with title, description, and image', () => {
  render(
    <MemoryRouter>
      <Recipe {...mockRecipe} />
    </MemoryRouter>
  );

  const titleElements = screen.getAllByText(/Test Recipe/i);
  const descriptionElements = screen.getAllByText(/This is a test recipe description/i);
  const imageElement = screen.getByAltText(/Picture of Test Recipe/i);

  titleElements.forEach((titleElement) => {
    expect(titleElement).toBeInTheDocument();
  });

  descriptionElements.forEach((descriptionElement) => {
    expect(descriptionElement).toBeInTheDocument();
  });

  expect(imageElement).toBeInTheDocument();
});

test('calls navigate function when "View Details" button is clicked', () => {
  render(
    <MemoryRouter>
      <Recipe {...mockRecipe} />
    </MemoryRouter>
  );

  const viewDetailsButton = screen.getByText('View Details');
  fireEvent.click(viewDetailsButton);

  expect(mockNavigate).toHaveBeenCalledWith(`/recipe/${mockRecipe.index}`);
});

