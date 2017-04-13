import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import formReducer from './formDucks';

const store = createStore(formReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
