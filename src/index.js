import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import JumasInversiones from './JumasInversiones';


import './index.styles.css';


const container = document.querySelector('#root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <JumasInversiones />
    </BrowserRouter>
  </React.StrictMode>
);

