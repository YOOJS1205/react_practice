import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReactDOM from 'react-dom/client';
import App from './App';
import rootReducer from './modules/index';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(rootReducer, composeWithDevTools());
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
