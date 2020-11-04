import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers';
import { loadState } from '../helpers/localStorage';
import { configurateInterceptors, setAuthorizationToken } from '../vendor/axios/private';
import { getUserToken } from '../reducers/selectors/selectors_user';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = null;

const preloadedData = loadState('shopAuthState');

if (preloadedData) {
  store = createStore(rootReducer, preloadedData, composeEnhancers(
    applyMiddleware(thunk),
  ));
  setAuthorizationToken(getUserToken(store.getState()));
  configurateInterceptors(store.dispatch);
} else {
  store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk),
  ));
}

export default store;
