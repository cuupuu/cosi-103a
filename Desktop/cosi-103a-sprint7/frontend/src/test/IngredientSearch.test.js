import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import IngredientSearch from '../IngredientSearch';
import { FoodDetailsContext } from '../FoodDetailsContext';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

describe('IngredientSearch', () => {
  it('renders correctly and responds to button click', async () => {
    const setFoodDetails = jest.fn();
    const foodDetails = {};  // or some mock data

    const { getByText, getByRole } = render(
      <FoodDetailsContext.Provider value={{ foodDetails, setFoodDetails }}>
        <IngredientSearch ingredient="chicken" />
      </FoodDetailsContext.Provider>
    );

    expect(getByText('info')).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(getByRole('button'));
    });

    expect(getByText('Searching...')).toBeInTheDocument();
  });
});