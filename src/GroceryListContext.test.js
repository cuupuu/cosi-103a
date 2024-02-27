import { render, screen, fireEvent } from '@testing-library/react';
import { GroceryListProvider } from './GroceryListContext';
import GroceryList from './GroceryList';

describe('GroceryList Component Tests', () => {
  it('renders correctly with GroceryListProvider', () => {
    render(
      <GroceryListProvider>
        <GroceryList />
      </GroceryListProvider>
    );

    // Check if the input box is rendered
    expect(screen.getByPlaceholderText('Enter ingredient...')).toBeInTheDocument();

    // Check if the 'Add Ingredient' button is rendered
    expect(screen.getByText('Add Ingredient')).toBeInTheDocument();

    // Check if the 'Clear Grocery List' button is rendered
    expect(screen.getByText('Clear Grocery List')).toBeInTheDocument();
  });

  it('allows users to add an ingredient', () => {
    render(
      <GroceryListProvider>
        <GroceryList />
      </GroceryListProvider>
    );

    // Simulate typing in the input
    fireEvent.change(screen.getByPlaceholderText('Enter ingredient...'), {
      target: { value: 'Apples' },
    });

    // Click on 'Add Ingredient'
    fireEvent.click(screen.getByText('Add Ingredient'));

    // Check if the ingredient was added
    expect(screen.getByText('Apples')).toBeInTheDocument();
  });

  it('allows users to remove an ingredient', async () => {
    render(
      <GroceryListProvider>
        <GroceryList />
      </GroceryListProvider>
    );

    // Add an ingredient
    fireEvent.change(screen.getByPlaceholderText('Enter ingredient...'), {
      target: { value: 'Oranges' },
    });
    fireEvent.click(screen.getByText('Add Ingredient'));

    // Remove the ingredient
    fireEvent.click(screen.getByText('Remove'));

    // Check if the ingredient was removed
    expect(screen.queryByText('Oranges')).not.toBeInTheDocument();
  });

  it('clears the grocery list', () => {
    render(
      <GroceryListProvider>
        <GroceryList />
      </GroceryListProvider>
    );

    // Add two ingredients
    fireEvent.change(screen.getByPlaceholderText('Enter ingredient...'), {
      target: { value: 'Bananas' },
    });
    fireEvent.click(screen.getByText('Add Ingredient'));

    fireEvent.change(screen.getByPlaceholderText('Enter ingredient...'), {
      target: { value: 'Grapes' },
    });
    fireEvent.click(screen.getByText('Add Ingredient'));

    // Clear the list
    fireEvent.click(screen.getByText('Clear Grocery List'));

    // Check if the list was cleared
    expect(screen.queryByText('Bananas')).not.toBeInTheDocument();
    expect(screen.queryByText('Grapes')).not.toBeInTheDocument();
  });
});
