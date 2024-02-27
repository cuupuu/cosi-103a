// Import the necessary modules and functions
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

// Test case 1: Check if Navbar renders without any errors
test('Navbar renders without errors', () => {
  render(<Navbar />);
  const navbarElement = screen.getByTestId('navbar');
  expect(navbarElement).toBeInTheDocument();
});

// Test case 2: Check if Navbar displays the correct title
test('Navbar displays the correct title', () => {
  render(<Navbar />);
  const titleElement = screen.getByText('My App');
  expect(titleElement).toBeInTheDocument();
});

// Test case 3: Check if Navbar contains the correct number of links
test('Navbar contains the correct number of links', () => {
  render(<Navbar />);
  const linkElements = screen.getAllByRole('link');
  expect(linkElements.length).toBe(3);
});
