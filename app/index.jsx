import React from 'react';
import ReactDOM from 'react-dom';
import getRoutes from 'config/routes';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as reducers from 'redux/modules';
import { routerReducer, syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

const store = createStore(
  combineReducers({ ...reducers, routing: routerReducer }),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    {getRoutes(history)}
  </Provider>,
  document.getElementById('app'));
