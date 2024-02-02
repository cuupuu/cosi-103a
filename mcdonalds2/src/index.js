import React from 'react';
import ReactDOM   from 'react-dom/client';
import App from './App.js';
import {BrowserRouter} from 'react-router-dom';
<<<<<<< HEAD
=======
import './Landing_page.css';
import './recipe.css';


>>>>>>> a03d7e779f3e52b2c06f1b9b659647e1788ac3dc

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
        <BrowserRouter>
        <App />
        </BrowserRouter>,
    // </React.StrictMode>,
    document.getElementById('root')
);