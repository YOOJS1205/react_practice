import React from 'react';
import { createStore } from 'redux';
import { Provider } from '../../../../../../node_modules/react-redux/es/exports';
import ReactDOM from 'react-dom/client';
import App from './App';
import rootReducer from './modules/index';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(rootReducer);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
