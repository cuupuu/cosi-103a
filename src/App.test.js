import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import recipes from './Recipe';

// Mock components to simplify testing
jest.mock('./Layout', () => ({ children }) => <div>Layout Component {children}</div>);
jest.mock('./LandingPage', () => ({ Home: () => <div>Home Component</div> }));
jest.mock('./RecipePage', () => ({ RecipePage: () => <div>RecipePage Component</div> }));
jest.mock('./Contact', () => () => <div>Contact Component</div>);

describe('App', () => {
  it('renders the Home component on the root route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Home Component')).toBeInTheDocument();
    expect(screen.getByText('Layout Component')).toBeInTheDocument();
  });

  it('renders the RecipePage component on the /recipe/:id route', () => {
    const testRecipeId = recipes[0].id; // Assuming your recipes have an id property
    render(
      <MemoryRouter initialEntries={[`/recipe/${testRecipeId}`]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('RecipePage Component')).toBeInTheDocument();
    expect(screen.getByText('Layout Component')).toBeInTheDocument();
  });

  it('renders the Contact component on the /contact route', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Contact Component')).toBeInTheDocument();
    expect(screen.getByText('Layout Component')).toBeInTheDocument();
  });
});
