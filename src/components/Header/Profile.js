import React from 'react';
import PropTypes from 'prop-types';
import classes from './header.module.scss';
import ProfileIcon from '../../assets/images/user.svg';

export const Profile = (props) => (
  <button className={classes.profile} onClick={props.openModal}>
    <img src={ProfileIcon} alt="Profile" />
  </button>
);

Profile.propTypes = {
  openModal: PropTypes.func.isRequired,
};
