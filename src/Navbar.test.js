import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

test('Navbar renders without any errors', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const navbarElement = screen.getByTestId('navbar');
  expect(navbarElement).toBeInTheDocument();
});

test('Navbar displays the correct title', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const titleElement = screen.getByText('My App');
  expect(titleElement).toBeInTheDocument();
});

test('Navbar contains the correct number of links', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const linkElements = screen.getAllByRole('link');
  expect(linkElements.length).toBe(3);
});
