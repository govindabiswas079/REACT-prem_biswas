import React from 'react';
import ReactDOM from 'react-dom/client';

import '@fontsource/nunito';// Weights: [200,300,400,500,600,700,800,900]
import '@fontsource/open-sans';// Weights: [300,400,500,600,700,800]

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
