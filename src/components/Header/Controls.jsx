import React from 'react';
import PropTypes from 'prop-types';
import classes from './header.module.scss';
import { witAuthModal } from '../../containers/AuthModalProvider/withAuthModal';
import { UserRegistration } from '../../containers/Registration';
import { UserLogin } from '../../containers/Login';

function Controls(props) {
  const {
    modalContext: { showModal },
  } = props;

  const handleRegistrationClick = () => {
    showModal(UserRegistration);
  };
  const handleLoginClick = () => {
    showModal(UserLogin);
  };

  return (
    <ul className={classes.suggestions}>
      <li>
        <button
          className={classes.link}
          onClick={handleRegistrationClick}
        >
          Sign Up
        </button>
      </li>
      <li>
        <button
          className={classes.link}
          onClick={handleLoginClick}
        >
          Sign In
        </button>
      </li>
    </ul>
  );
}

Controls.propTypes = {
  modalContext: PropTypes.object,
};

const Enhanced = witAuthModal(Controls);
Enhanced.displayName = 'Controls';

export { Enhanced as Controls };
