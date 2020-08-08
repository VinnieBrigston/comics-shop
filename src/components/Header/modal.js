import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import classes from './header.module.scss';
import LogoutButton from './LogoutButton';

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
  const { showModal, toggleProfileModal } = props;
  return (
    <Modal
      isOpen={showModal}
      onRequestClose={toggleProfileModal}
      shouldCloseOnOverlayClick={true}
      style={modalStyles}
    >
      <LogoutButton className={classes.logout} clickHandler={props.toggleProfileModal} />
    </Modal>
  );
};

ProfileModal.defaultProps = {
  showModal: false,
};

ProfileModal.propTypes = {
  toggleProfileModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool,
};
