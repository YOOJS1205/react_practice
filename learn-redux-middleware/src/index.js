import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './App';
import rootReducer from './modules/index';
// import loggerMiddleware from './lib/loggerMiddleware';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById('root'));
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk));

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
