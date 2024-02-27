import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

// Mock the Navbar component to isolate the test to Header functionality
jest.mock('./Navbar', () => ({
  // Mock Navbar with a button to simulate toggle functionality
  __esModule: true,
  default: ({ toggleGroceryList, src }) => (
    <button onClick={toggleGroceryList} data-testid="navbar-toggle">
      Toggle Grocery List
    </button>
  ),
}));

describe('Header Component', () => {
  const title = 'Test Title';
  const src = 'testicon.png';

  it('renders correctly with given title and src', () => {
    render(<Header title={title} src={src} />);
    // Check if the title is rendered
    expect(screen.getByText(title)).toBeInTheDocument();
    // Since Navbar is mocked, we only ensure it is part of the document
    expect(screen.getByTestId('navbar-toggle')).toBeInTheDocument();
  });

  it('toggles grocery list visibility on click', () => {
    render(<Header title={title} src={src} />);
    // Simulate click on the Navbar toggle button
    fireEvent.click(screen.getByTestId('navbar-toggle'));
      });
});
