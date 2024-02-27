import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GroceryList from './GroceryList';
import { useGroceryList } from './GroceryListContext';

// Mock the GroceryListContext module
jest.mock('./GroceryListContext', () => ({
  useGroceryList: jest.fn(),
}));

describe('GroceryList Component', () => {
  const mockToggleGroceryList = jest.fn();
  const mockAddIngredient = jest.fn();
  const mockRemoveIngredient = jest.fn();
  const mockClearGroceryList = jest.fn();

  beforeEach(() => {
    // Reset mock functions' states before each test
    mockToggleGroceryList.mockClear();
    mockAddIngredient.mockClear();
    mockRemoveIngredient.mockClear();
    mockClearGroceryList.mockClear();

    // Setup the mock implementation of useGroceryList
    useGroceryList.mockImplementation(() => ({
      groceryList: ['Apples', 'Oranges'],
      addIngredient: mockAddIngredient,
      removeIngredient: mockRemoveIngredient,
      clearGroceryList: mockClearGroceryList,
    }));
  });

  it('renders without crashing', () => {
    render(<GroceryList toggleGroceryList={mockToggleGroceryList} />);
    expect(screen.getByText('Grocery List')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter ingredient...')).toBeInTheDocument();
  });

  it('adds an ingredient when the add button is clicked', async () => {
    render(<GroceryList toggleGroceryList={mockToggleGroceryList} />);
    await userEvent.type(screen.getByPlaceholderText('Enter ingredient...'), 'Bananas');
    fireEvent.click(screen.getByText('Add Ingredient'));
    expect(mockAddIngredient).toHaveBeenCalledWith('Bananas');
  });

  it('clears the grocery list when the clear button is clicked', () => {
    render(<GroceryList toggleGroceryList={mockToggleGroceryList} />);
    fireEvent.click(screen.getByText('Clear Grocery List'));
    expect(mockClearGroceryList).toHaveBeenCalled();
  });

  it('calls toggleGroceryList when the close button is clicked', () => {
    render(<GroceryList toggleGroceryList={mockToggleGroceryList} />);
    fireEvent.click(screen.getByText('Close Grocery List'));
    expect(mockToggleGroceryList).toHaveBeenCalled();
  });

  it('removes an ingredient when the remove button is clicked', () => {
    render(<GroceryList toggleGroceryList={mockToggleGroceryList} />);
    const removeButtons = screen.getAllByText('Remove');
    fireEvent.click(removeButtons[0]); // Click the remove button of the first ingredient
    expect(mockRemoveIngredient).toHaveBeenCalledWith(0);
  });
});
