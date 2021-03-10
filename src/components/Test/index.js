import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LOGIN_URL } from '../../modules/Authorization/constants/routes';
import { getAuthenticatedStatus } from '../../modules/Authentication/store/selectors';


function PrivateRoute({ isAuthenticated, component: Component, path }) {
  return (
    <Route render={(routeProps) => {
      if (isAuthenticated) {
        return <Component {...routeProps} />;
      }
      return (
        <Redirect to={{
          pathname: LOGIN_URL,
          state: {
            return_path: path,
          },
        }}
        />
      );
    }}
    />
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: getAuthenticatedStatus(state),
  };
};

const Enhanced = connect(mapStateToProps)(PrivateRoute);

PrivateRoute.defaultProps = {
  isAuthenticated: false,
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  component: PropTypes.element.isRequired,
  path: PropTypes.string.isRequired,
};

export { Enhanced as PrivateRoute };
