import React from 'react';
import './index.css';
import './App.css'
import ReactDOM from 'react-dom';

import Routee from './Routee';
import store from './redux/store';
import { Provider } from 'react-redux';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Routee />
    </Provider>
  </React.StrictMode>,
    document.getElementById('root')

);

