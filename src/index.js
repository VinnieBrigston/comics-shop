import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Main } from './containers/Main';
import store from './store';
import { Registration } from './containers/Registration';
import { Login } from './containers/Login';
import { LOGIN_URL, REGISTER_URL, HOME_URL } from './constants/routes';
import 'normalize.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Switch>
          <Route path={REGISTER_URL} component={Registration} />
          <Route path={LOGIN_URL} component={Login} />
          <Route path={HOME_URL} exact component={Main} />
        </Switch>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
