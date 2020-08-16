import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import formClasses from '../../common/styles/form.module.scss';
import { Form } from './RegistrationForm';
import { SocialMediaAuth } from '../../components/SocialMedia/SocialMediaBlock';
import closeIcon from '../../assets/images/icons/close.svg';
import registrationClasses from './registration.module.scss';

const Registration = (props) => {
  return props.isAuthenticated
    ? <Redirect to="/" />
    : (
      <div className={registrationClasses.wrapper}>
        <h2 className={formClasses.authTitle}>registration</h2>
        <SocialMediaAuth />
        <Form />
        <Link to="/login" className={formClasses.authLink}>login</Link>
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

Registration.defaultProps = {
  isAuthenticated: false,
};

Registration.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const Enhanced = connect(mapStateToProps)(Registration);

export { Enhanced as Registration };
