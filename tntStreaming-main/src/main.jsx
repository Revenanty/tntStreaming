import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { movieApi } from './app/moviApi.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApiProvider api={movieApi}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApiProvider>
);
