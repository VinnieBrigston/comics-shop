import React from 'react';
import Modal from 'react-modal';
import { useHistory } from "react-router-dom";
import classes from './header.module.scss';

const modalStyles = {
  content : {
    bottom: 'auto',
    left: 'auto',
    right: '1%',
    top: '9%',
    maxHeight: '250px',
    maxWidth: '250px',
  }
};

const LogoutButton = (props) => {
  const history = useHistory();
  const handleClick = () => {
    props.clickHandler();
    history.push('/logout');
  };
  return (
    <button className={classes.logout} onClick={handleClick}>Logout</button>
  )
}

export const ProfileModal = (props) => {
  return (
    <Modal 
      isOpen={props.showModal}
      onRequestClose={props.toggleProfileModal}
      shouldCloseOnOverlayClick={true}
      style={modalStyles}
    >
      <LogoutButton className={classes.logout} clickHandler={props.toggleProfileModal} />
    </Modal>
  ) 
}