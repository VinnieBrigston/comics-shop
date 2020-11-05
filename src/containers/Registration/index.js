import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import formClasses from '../../common/styles/form.module.scss';
import { RegistrationForm } from './RegistrationForm';
import { SocialMediaAuth } from '../../components/SocialMedia/SocialMediaBlock';
import closeIcon from '../../assets/images/icons/close.svg';
import registrationClasses from './registration.module.scss';
import { LOGIN_URL, HOME_URL } from '../../constants/routes';
import { getLoadingStatus } from '../../reducers/selectors/selectors_auth';
import { getAuthenticatedStatus } from '../../reducers/selectors/selectors_user';

function UserRegistration(props) {
  return props.isAuthenticated
    ? <Redirect to={HOME_URL} />
    : (
      <div className={registrationClasses.wrapper}>
        <h2 className={formClasses.authTitle}>registration</h2>
        <SocialMediaAuth />
        <RegistrationForm />
        <Link to={LOGIN_URL} className={formClasses.authLink}>login</Link>
        <Link to={HOME_URL} className={formClasses.authBackLink}>
          <img className={formClasses.authCloseIcon} src={closeIcon} alt="close page" />
        </Link>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    isLoading: getLoadingStatus(state),
    isAuthenticated: getAuthenticatedStatus(state),
  };
};

UserRegistration.defaultProps = {
  isAuthenticated: false,
};

UserRegistration.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const Enhanced = connect(mapStateToProps)(UserRegistration);

export { Enhanced as UserRegistration };
