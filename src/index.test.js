import ReactDOM from 'react-dom/client';

import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { GroceryListProvider } from './GroceryListContext';
import App from './App';

jest.mock('react-dom/client', () => ({
    createRoot: jest.fn().mockReturnValue({
        render: jest.fn(),
    }),
}));

describe('Index.js', () => {
    it('renders without crashing', () => {
        const mockRender = jest.fn();
        const mockCreateRoot = jest.spyOn(ReactDOM, 'createRoot').mockReturnValue({
            render: mockRender,
        });

        render(
            <BrowserRouter>
                <GroceryListProvider>
                    <App />
                </GroceryListProvider>
            </BrowserRouter>
        );

        expect(mockCreateRoot).toHaveBeenCalledWith(document.getElementById('root'));
        expect(mockRender).toHaveBeenCalled();
    });
});
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GroceryListProvider } from './GroceryListContext';
import App from './App';

// Define a mock for the render method
const mockRender = jest.fn();

// Mock ReactDOM.createRoot correctly
jest.mock('react-dom/client', () => ({
    __esModule: true,
    createRoot: jest.fn().mockReturnValue({
        render: mockRender,
    }),
}));

describe('Index.js and App component integration', () => {
    beforeEach(() => {
        // Reset the mock before each test
        mockRender.mockClear();
    });

    it('renders without crashing', async () => {
        document.body.innerHTML = '<div id="root"></div>';

        // Dynamically import the index.js to ensure mocks are applied first
        await import('./index');

        expect(ReactDOM.createRoot).toHaveBeenCalledWith(document.getElementById('root'));

        expect(mockRender).toHaveBeenCalledWith(
            <BrowserRouter>
                <GroceryListProvider>
                    <App />
                </GroceryListProvider>
            </BrowserRouter>
        );
    });
});
import ReactDOM from 'react-dom/client'; // Make sure to import ReactDOM
import React from 'react'; // Import React
import { BrowserRouter } from 'react-router-dom';
import { GroceryListProvider } from './GroceryListContext';
import App from './App';
import '@testing-library/jest-dom';

// Define a mock for the render method
const mockRender = jest.fn();

// Mock ReactDOM.createRoot correctly
jest.mock('react-dom/client', () => ({
    __esModule: true, // Use it when dealing with ES Modules
    createRoot: jest.fn().mockReturnValue({
        render: mockRender,
    }),
}));

describe('Index.js and App component integration', () => {
    beforeEach(() => {
        // Reset the mock before each test
        mockRender.mockClear();
    });

    it('renders without crashing', async () => {
        document.body.innerHTML = '<div id="root"></div>'; // Setup a div with id "root" as expected by ReactDOM.createRoot

        // Dynamically import the index.js to ensure mocks are applied first
        await import('./index');

        // Assuming ReactDOM is imported, check if createRoot was called with the correct element
        expect(ReactDOM.createRoot).toHaveBeenCalledWith(document.getElementById('root'));

        // Check if render was called with the correct JSX
        expect(mockRender).toHaveBeenCalledWith(
            <React.StrictMode>
                <BrowserRouter>
                    <GroceryListProvider>
                        <App />
                    </GroceryListProvider>
                </BrowserRouter>
            </React.StrictMode>
        );
    });
});

