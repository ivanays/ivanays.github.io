import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app';

import { BrowserRouter as Router } from 'react-router';

import './scss/main.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <Router>
            <App />
        </Router>
    </StrictMode>
);