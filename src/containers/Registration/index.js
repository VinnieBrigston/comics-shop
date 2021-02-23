import React from 'react';
import PropTypes from 'prop-types';
import formClasses from '../../common/styles/form.module.scss';
import { RegistrationForm } from './RegistrationForm';
import { SocialMediaAuth } from '../../components/SocialMedia/SocialMediaBlock';
import { UserLogin } from '../Login';
import registrationClasses from './registration.module.scss';

export function UserRegistration(props) {
  const { showModal, hideModal } = props;

  const handleLoginClick = () => {
    showModal(UserLogin);
  };

  return (
    <div className={registrationClasses.wrapper}>
      <h2 className={formClasses.authTitle}>registration</h2>
      <SocialMediaAuth />
      <RegistrationForm hideModal={hideModal} />
      <button className={formClasses.authLink} onClick={handleLoginClick}>login</button>
    </div>
  );
}

UserRegistration.propTypes = {
  hideModal: PropTypes.func,
  showModal: PropTypes.func,
};
