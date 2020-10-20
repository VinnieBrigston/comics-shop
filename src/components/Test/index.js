import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LOGIN_URL } from '../../constants/routes';


const TestPrivate = ({ isAuthenticated, component: Component, path }) => {
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
};


const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.user.token,
  };
};

const Enhanced = connect(mapStateToProps)(TestPrivate);

TestPrivate.defaultProps = {
  isAuthenticated: false,
};

TestPrivate.propTypes = {
  isAuthenticated: PropTypes.bool,
  component: PropTypes.element.isRequired,
  path: PropTypes.string.isRequired,
};

export { Enhanced as Testprivate };
