// src/App.test.js
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders recipe titles in the app', () => {
  const { getByText } = render(<App />);

  // You can customize the text to match the titles of your recipes
  const spicyCrispyTitle = getByText(/Spicy McCrispy™/i);
  const bigMacTitle = getByText(/Big Mac®/i);
  const nuggetsTitle = getByText(/Chicken McNuggets®/i);
  const quarterPounderTitle = getByText(/Quarter Pounder with Cheese/i);
  const icedCoffeeTitle = getByText(/Iced Coffee/i);
  const eggMcMuffinTitle = getByText(/Egg McMuffin®/i);
  const sausageBurritoTitle = getByText(/Sausage Burrito/i);

  // Ensure that all recipe titles are present in the rendered component
  expect(spicyCrispyTitle).toBeInTheDocument();
  expect(bigMacTitle).toBeInTheDocument();
  expect(nuggetsTitle).toBeInTheDocument();
  expect(quarterPounderTitle).toBeInTheDocument();
  expect(icedCoffeeTitle).toBeInTheDocument();
  expect(eggMcMuffinTitle).toBeInTheDocument();
  expect(sausageBurritoTitle).toBeInTheDocument();
});

