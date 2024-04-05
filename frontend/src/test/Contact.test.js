import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../Contact';

// Mock the Header component to simplify testing
jest.mock('../Header', () => {
    return ({title}) => <div>{title}</div>;
});

describe('Contact Component', () => {
    it('renders without crashing', () => {
        render(<Contact />);
        expect(screen.getByText('Contact')).toBeInTheDocument();
    });

    it('contains a header with the correct title', () => {
        render(<Contact />);
        expect(screen.getByText("McDonald's Staff")).toBeInTheDocument();
    });

    it('renders the correct number of contact boxes', () => {
        render(<Contact />);
        const boxes = screen.getAllByRole('img'); // Assuming each box has an image
        expect(boxes.length).toBe(4);
    });

    it('renders each person with the correct data', () => {
        render(<Contact />);
        // Test for one person's data as an example
        expect(screen.getByText('Ruixue Gou')).toBeInTheDocument();
        expect(screen.getByText('Product Manager')).toBeInTheDocument();
        expect(screen.getByAltText('Ruixue Gou')).toHaveAttribute('src', 'ruixue.JPG');
        expect(screen.getByText(/Rachel is a graduate student at Brandeis/i)).toBeInTheDocument();
    });
});
