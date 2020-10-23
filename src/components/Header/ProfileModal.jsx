import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import classes from './header.module.scss';
import { LogoutButton } from './LogoutButton';

Modal.setAppElement('#root');

const modalStyles = {
  content: {
    bottom: 'auto',
    left: 'auto',
    right: '1%',
    top: '9%',
    maxHeight: '250px',
    maxWidth: '250px',
  },
};

export const ProfileModal = (props) => {
  const { isOpen, toggleProfileModal } = props;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleProfileModal}
      shouldCloseOnOverlayClick
      style={modalStyles}
    >
      <LogoutButton className={classes.logout} clickHandler={props.toggleProfileModal} />
    </Modal>
  );
};

ProfileModal.defaultProps = {
  isOpen: false,
};

ProfileModal.propTypes = {
  toggleProfileModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};
