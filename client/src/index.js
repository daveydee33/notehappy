import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/App';
import reducers from './reducers';

// TEMP test code here so that we can use axios from our Chrome dev tools console to test our API routes that require login.  Testing from the browser console will include the cookies in the requests, which we can't easily do with postman.
// Un-comment the following two lines temporarily for testing only.
// import axios from 'axios';
// window.axios = axios;

const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(reduxThunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
