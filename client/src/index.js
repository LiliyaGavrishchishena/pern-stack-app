import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
//components
import App from './App';
//store
import store from './redux/store';
// styles
import './index.css';

render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
