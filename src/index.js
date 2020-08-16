import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { Main } from './containers/Main';
import store from './store';
import { Registration } from './containers/Registration';
import { Login } from './containers/Login';
import 'normalize.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Switch>
          <Route path="/register" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Main} />
        </Switch>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
