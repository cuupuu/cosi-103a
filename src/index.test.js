import React from 'react';
import { render } from '@testing-library/react';
import Index from './index';

describe('Index Component', () => {
    it('renders without crashing', () => {
        render(<Index />);
    });

    it('renders App component', () => {
        const { getByText } = render(<Index />);
        const appElement = getByText('App Component');
        expect(appElement).toBeInTheDocument();
    });

    it('renders GroceryListProvider component', () => {
        const { getByText } = render(<Index />);
        const groceryListProviderElement = getByText('GroceryListProvider Component');
        expect(groceryListProviderElement).toBeInTheDocument();
    });
});
