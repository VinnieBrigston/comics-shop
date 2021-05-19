import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Main } from './modules/HomePage';
import store from './store';
import { PasswordResetting } from './modules/Authorization/components/ResetPassword';
import { AuthModalProvider } from './modules/Authorization/components/AuthModalProvider';
import {
  HOME_URL,
  RESET_PASS_URL,
} from './common/constants/routes';
import 'normalize.css';

ReactDOM.render(
  <Provider store={store}>
    <AuthModalProvider>
      <Router>
        <Switch>
          <Route path={RESET_PASS_URL} component={PasswordResetting} />
          <Route path={HOME_URL} exact component={Main} />
        </Switch>
      </Router>
    </AuthModalProvider>
  </Provider>,
  document.getElementById('root'),
);
