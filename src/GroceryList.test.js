// GroceryList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GroceryList from './GroceryList';
import { GroceryListProvider } from './GroceryListContext'; // Import the context provider

// Mock the context if necessary, or wrap the component in the actual context provider
// and provide a mock value for testing.

describe('GroceryList Component', () => {
  const mockToggleGroceryList = jest.fn();

  beforeEach(() => {
    render(
      <GroceryListProvider>
        <GroceryList toggleGroceryList={mockToggleGroceryList} />
      </GroceryListProvider>
    );
  });

  it('renders correctly', () => {
    expect(screen.getByText('Grocery List')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter ingredient...')).toBeInTheDocument();
    expect(screen.getByText('Add Ingredient')).toBeInTheDocument();
    expect(screen.getByText('Clear Grocery List')).toBeInTheDocument();
  });

  // Example of adding an item before attempting to remove it
it('allows users to add and then remove an ingredient', async () => {
  const input = screen.getByPlaceholderText('Enter ingredient...');
  const addButton = screen.getByText('Add Ingredient');
  
  fireEvent.change(input, { target: { value: 'Tomatoes' } });
  fireEvent.click(addButton);

  // Wait for the item to be added to the DOM
  const newItem = await screen.findByText('Tomatoes');
  expect(newItem).toBeInTheDocument();

  // Now attempt to remove the item
  const removeButton = screen.getByText('Remove'); // Adjust based on how your items are rendered
  fireEvent.click(removeButton);
  
  // Verify the item was removed
  // Use queryByText to verify that an element is not present.
  expect(screen.queryByText('Tomatoes')).not.toBeInTheDocument();
});

  it('clears the grocery list when clear button is clicked', () => {
    const clearButton = screen.getByText('Clear Grocery List');
    fireEvent.click(clearButton);

    // Assuming the list initially has items, they should be removed. Adjust this based on your initial state.
    expect(screen.queryByRole('listitem')).toBeNull();
  });

  it('calls toggleGroceryList when close button is clicked', () => {
    const closeButton = screen.getByText('Close Grocery List');
    fireEvent.click(closeButton);

    expect(mockToggleGroceryList).toHaveBeenCalled();
  });
});
