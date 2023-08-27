import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import RedurecApp from './RedurecApp';
import reportWebVitals from './reportWebVitals';
import { store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RedurecApp />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
