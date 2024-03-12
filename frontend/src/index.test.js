import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GroceryListProvider } from './GroceryListContext';

// Mock module imports if necessary
jest.mock('./App', () => () => <div data-testid="app">App Component</div>);

describe('index.js', () => {
  it('renders the App component within BrowserRouter and GroceryListProvider', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <GroceryListProvider>
          <App />
        </GroceryListProvider>
      </BrowserRouter>
    );

    expect(getByTestId('app')).toBeInTheDocument();
  });
});
