import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import RecipePage from './RecipePage';

const recipes = [
    { id: 1, title: 'Pasta', ingredients: ['pasta', 'sauce'] },
    { id: 2, title: 'Pizza', ingredients: ['dough', 'cheese', 'toppings'] },
];

describe('RecipePage', () => {
    test('renders recipe title and ingredients', () => {
        const { getByText } = render(
            <MemoryRouter initialEntries={['/recipes/1']}>
                <Route path="/recipes/:id">
                    <RecipePage recipes={recipes} />
                </Route>
            </MemoryRouter>
        );

        expect(getByText('Pasta')).toBeInTheDocument();
        expect(getByText('Ingredients: pasta, sauce')).toBeInTheDocument();
    });

    test('renders "Recipe not found" when recipe does not exist', () => {
        const { getByText } = render(
            <MemoryRouter initialEntries={['/recipes/3']}>
                <Route path="/recipes/:id">
                    <RecipePage recipes={recipes} />
                </Route>
            </MemoryRouter>
        );

        expect(getByText('Recipe not found')).toBeInTheDocument();
    });

    test('renders back link to recipes list', () => {
        const { getByText } = render(
            <MemoryRouter initialEntries={['/recipes/1']}>
                <Route path="/recipes/:id">
                    <RecipePage recipes={recipes} />
                </Route>
            </MemoryRouter>
        );

        expect(getByText('Back to Recipes')).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Back to Recipes' })).toHaveAttribute('href', '/recipes');
    });
});
