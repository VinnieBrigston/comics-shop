import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Main } from './containers/Main';
import store from './store';
import { PasswordResetting } from './containers/ResetPassword';
import { AuthModalProvider } from './containers/AuthModalProvider';
import {
  HOME_URL,
  PRIVATE_URL,
  RESET_PASS_URL,
} from './constants/routes';
import { PrivateRoute } from './components/Test';
import { Example } from './components/Test/ExamplePage';
import 'normalize.css';

ReactDOM.render(
  <Provider store={store}>
    <AuthModalProvider>
      <Router>
        <Switch>
          <Route path={RESET_PASS_URL} component={PasswordResetting} />
          <Route path={HOME_URL} exact component={Main} />
          <PrivateRoute path={PRIVATE_URL} component={Example} />
        </Switch>
      </Router>
    </AuthModalProvider>
  </Provider>,
  document.getElementById('root'),
);
