import React, { StrictMode } from 'react';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );


