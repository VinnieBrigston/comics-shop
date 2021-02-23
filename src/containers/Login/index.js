import React from 'react';
import PropTypes from 'prop-types';
import { LoginForm } from './LoginForm.jsx';
import { SocialMediaAuth } from '../../components/SocialMedia/SocialMediaBlock';
import { UserRegistration } from '../Registration';
import { PasswordResetting } from '../ResetPassword';
import loginPageClasses from './login.module.scss';
import formClasses from '../../common/styles/form.module.scss';

export function UserLogin(props) {
  const { showModal, hideModal } = props;

  const handRegistrationClick = () => {
    showModal(UserRegistration);
  };
  const handForgottenPasswordClick = () => {
    showModal(PasswordResetting);
  };

  return (
    <div className={loginPageClasses.wrapper}>
      <h2 className={formClasses.authTitle}>login</h2>
      <SocialMediaAuth />
      <LoginForm hideModal={hideModal} />
      <button
        className={`${formClasses.authLink} ${formClasses.ressetLink}`}
        onClick={handForgottenPasswordClick}
      >
        forgotten password?
      </button>
      <button
        className={formClasses.authLink}
        onClick={handRegistrationClick}
      >
        registration
      </button>
    </div>
  );
}

UserLogin.propTypes = {
  showModal: PropTypes.func,
  hideModal: PropTypes.func,
};
