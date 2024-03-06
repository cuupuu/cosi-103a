import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar'; 


// Mocking Recipe Module Directly Inside jest.mock
jest.mock('./Recipe', () => ({
    __esModule: true, // This is needed to correctly mock ES modules
    default: [
      { index: 1, title: 'Recipe 1' },
      { index: 2, title: 'Recipe 2' },
    ],
  }));
  
  const Wrapper = ({ children }) => (
    <Router>
      {children}
    </Router>
  );
  
 

describe('Navbar Component Tests', () => {
  test('Navbar renders with logo and links', () => {
    render(<Navbar src="test-logo.png" />, { wrapper: Wrapper });
    expect(screen.getByAltText("McDonald's Logo")).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
  });


});

