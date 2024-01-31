import React from 'react';
import ReactDOM   from 'react-dom/client';
import App from './App.js';
import Home from './Home.js';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
        <BrowserRouter>
        <App />
        </BrowserRouter>,
    // </React.StrictMode>,
    document.getElementById('root')
);