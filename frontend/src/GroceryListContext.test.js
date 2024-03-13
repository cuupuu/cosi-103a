import { render, act } from '@testing-library/react';
import React from 'react';
import { GroceryListProvider, useGroceryList } from './GroceryListContext';

// Helper component to test the useGroceryList hook
const GroceryListConsumer = () => {
  const { groceryList, addIngredient, removeIngredient, clearGroceryList } = useGroceryList();
  return (
    <div>
      <ul>
        {groceryList.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <button onClick={() => addIngredient('Apples')}>Add Apples</button>
      <button onClick={() => removeIngredient(0)}>Remove First Ingredient</button>
      <button onClick={() => clearGroceryList()}>Clear List</button>
    </div>
  );
};

describe('GroceryListContext', () => {
  it('provides an initial empty list', () => {
    const { queryByText } = render(
      <GroceryListProvider>
        <GroceryListConsumer />
      </GroceryListProvider>
    );
    expect(queryByText('Apples')).toBeNull();
  });

  it('adds an ingredient to the list', () => {
    const { queryByText, getByText } = render(
      <GroceryListProvider>
        <GroceryListConsumer />
      </GroceryListProvider>
    );
    act(() => {
      getByText('Add Apples').click();
    });
    expect(queryByText('Apples')).not.toBeNull();
  });

  it('removes an ingredient from the list', () => {
    const { queryByText, getByText } = render(
      <GroceryListProvider>
        <GroceryListConsumer />
      </GroceryListProvider>
    );
    act(() => {
      getByText('Add Apples').click();
    });
    act(() => {
      getByText('Remove First Ingredient').click();
    });
    expect(queryByText('Apples')).toBeNull();
  });

  it('clears the grocery list', () => {
    const { queryByText, getByText } = render(
      <GroceryListProvider>
        <GroceryListConsumer />
      </GroceryListProvider>
    );
    act(() => {
      getByText('Add Apples').click();
    });
    act(() => {
      getByText('Clear List').click();
    });
    expect(queryByText('Apples')).toBeNull();
  });
});
