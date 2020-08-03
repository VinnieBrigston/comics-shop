import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Registration from './Registration';
import Login from './Login';
import Logout from './Logout';

export class Main extends Component {
  render() {
    return(
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/register" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </React.Fragment>
    )
  }
}