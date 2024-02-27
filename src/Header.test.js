import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders header component', () => {
    render(<Header />);
    // Add your assertions here
    const headerElement = screen.getByText(/Header/i);
    expect(headerElement).toBeInTheDocument();
});

test('renders header component with custom title', () => {
    render(<Header title="Custom Title" />);
    // Add your assertions here
    const headerElement = screen.getByText(/Custom Title/i);
    expect(headerElement).toBeInTheDocument();
});

test('renders header component with custom image source', () => {
    render(<Header src="custom-image.png" />);
    // Add your assertions here
    const imageElement = screen.getByAltText(/Custom Image/i);
    expect(imageElement).toBeInTheDocument();
});
// Path: src/Navbar.test.js
