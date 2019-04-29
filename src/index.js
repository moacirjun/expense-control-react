import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import Root from './containers/Root';

import store from './store';

ReactDOM.render(
  <BrowserRouter>
    <Root store={store} />
  </BrowserRouter>,
  document.getElementById('root'),
);
