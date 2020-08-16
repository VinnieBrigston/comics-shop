import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form } from './LoginForm';
import { SocialMediaAuth } from '../../components/SocialMedia/SocialMediaBlock';
import loginPageClasses from './login.module.scss';
import formClasses from '../../common/styles/form.module.scss';
import closeIcon from '../../assets/images/icons/close.svg';

const Login = (props) => {
  return props.isAuthenticated
    ? <Redirect to="/" />
    : (
      <div className={loginPageClasses.wrapper}>
        <h2 className={formClasses.authTitle}>login</h2>
        <SocialMediaAuth />
        <Form />
        <Link to="/register" className={formClasses.authLink}>registration</Link>
        <Link to="/" className={formClasses.authBackLink}>
          <img className={formClasses.authCloseIcon} src={closeIcon} alt="close page" />
        </Link>
      </div>
    );
};

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    isAuthenticated: state.auth.token !== null,
  };
};

const Enhanced = connect(mapStateToProps)(Login);

export { Enhanced as Login };

Login.defaultProps = {
  isAuthenticated: false,
};

Login.propTypes = {
  isAuthenticated: PropTypes.bool,
};
