import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import GroceryList from './GroceryList';
import { useGroceryList } from './GroceryListContext';

jest.mock('./GroceryListContext', () => ({
  useGroceryList: jest.fn(),
}));

describe('GroceryList', () => {
  const mockToggleGroceryList = jest.fn();
  const mockRemoveIngredient = jest.fn();
  const mockClearGroceryList = jest.fn();

  beforeEach(() => {
    // Setup mock return values for useGroceryList
    useGroceryList.mockReturnValue({
      groceryList: ['Apples', 'Oranges', 'Milk'],
      removeIngredient: mockRemoveIngredient,
      clearGroceryList: mockClearGroceryList,
    });
    jest.clearAllMocks(); // Clear mocks before each test
  });

  it('renders the grocery list', () => {
    render(<GroceryList toggleGroceryList={mockToggleGroceryList} />);

    // Check that all ingredients are rendered
    expect(screen.getByText('Apples')).toBeInTheDocument();
    expect(screen.getByText('Oranges')).toBeInTheDocument();
    expect(screen.getByText('Milk')).toBeInTheDocument();
  });

  it('calls removeIngredient when an ingredient remove button is clicked', () => {
    render(<GroceryList toggleGroceryList={mockToggleGroceryList} />);
    
    // Assuming 'Apples' is the first item, click its remove button
    const firstRemoveButton = screen.getAllByText('-')[0];
    fireEvent.click(firstRemoveButton);

    // Check if removeIngredient was called with the correct index
    expect(mockRemoveIngredient).toHaveBeenCalledWith(0);
  });

  it('calls clearGroceryList when the clear button is clicked', () => {
    render(<GroceryList toggleGroceryList={mockToggleGroceryList} />);

    // Click the clear list button
    const clearButton = screen.getByText('Clear');
    fireEvent.click(clearButton);

    // Check if clearGroceryList was called
    expect(mockClearGroceryList).toHaveBeenCalled();
  });

  it('closes the grocery list when the close button is clicked', () => {
    render(<GroceryList toggleGroceryList={mockToggleGroceryList} />);

    // Click the close list button
    const closeButton = screen.getByText('x');
    fireEvent.click(closeButton);

    // Check if toggleGroceryList was called
    expect(mockToggleGroceryList).toHaveBeenCalled();
  });
});
