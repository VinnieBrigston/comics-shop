import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LOGIN_URL } from '../../constants/routes';


const Testprivate = ({ isAuthenticated, component, path }) => {
  return (
    <Route render={(routeProps) => {
      if (isAuthenticated) {
        const Component = component;
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
    isAuthenticated: !!state.auth.token,
  };
};

const Enhanced = connect(mapStateToProps)(Testprivate);

Testprivate.defaultProps = {
  isAuthenticated: false,
};

Testprivate.propTypes = {
  isAuthenticated: PropTypes.bool,
  component: PropTypes.element.isRequired,
  path: PropTypes.string.isRequired,
};

export { Enhanced as Testprivate };
