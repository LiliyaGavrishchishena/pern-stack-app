import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
//styles
import './index.css';
//components
import App from './App';

render(
  <React.StrictMode>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
