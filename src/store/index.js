import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers';
import { loadState } from '../helpers/localStorage';
import { configurateInterceptors, setAuthorizationToken } from '../vendor/axios/private';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = null;

const preloadedData = loadState('shopAuthState');

if (preloadedData) {
  store = createStore(rootReducer, preloadedData, composeEnhancers(
    applyMiddleware(thunk),
  ));
  setAuthorizationToken(store.getState().auth.token);
  configurateInterceptors(store.dispatch);
} else {
  store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk),
  ));
}

export default store;
