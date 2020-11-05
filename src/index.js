import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Main } from './containers/Main';
import store from './store';
import { UserRegistration } from './containers/Registration';
import { UserLogin } from './containers/Login';
import { PasswordResetting } from './containers/ResetPassword';
import { PasswordRecovery } from './containers/PasswordRecovery';
import {
  LOGIN_URL,
  REGISTER_URL,
  HOME_URL,
  PRIVATE_URL,
  RESET_PASS_URL,
  PASSWORD_RECOVERY_URL,
} from './constants/routes';
import { PrivateRoute } from './components/Test';
import { Example } from './components/Test/ExamplePage';
import 'normalize.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Switch>
          <Route path={REGISTER_URL} component={UserRegistration} />
          <Route path={RESET_PASS_URL} component={PasswordResetting} />
          <Route path={PASSWORD_RECOVERY_URL} component={PasswordRecovery} />
          <Route path={LOGIN_URL} component={UserLogin} />
          <Route path={HOME_URL} exact component={Main} />
          <PrivateRoute path={PRIVATE_URL} component={Example} />
        </Switch>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
