import React from 'react';
import ReactDOM   from 'react-dom/client';
import App from './App.js';
import {BrowserRouter} from 'react-router-dom';
import './LandingPage.css';
import './RecipePage.css';
import { GroceryListProvider } from './GroceryListContext'; // Import the GroceryListProvider


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
        <BrowserRouter>
            <GroceryListProvider> {/* Wrap your App component with GroceryListProvider */}
                <App />
            </GroceryListProvider>
        </BrowserRouter>,
    // </React.StrictMode>,
    document.getElementById('root')
);