import React from 'react';
import PropTypes from 'prop-types';
import classes from './header.module.scss';
import ProfileIcon from '../../../assets/images/profile.svg';
import BoxIcon from '../../../assets/images/box.svg';

export function UserTools(props) {
  return (
    <>
      <button className={classes.button} onClick={props.openModal}>
        <img src={ProfileIcon} alt="Profile" />
      </button>
      <button className={classes.button}>
        <img src={BoxIcon} alt="Cart" />
      </button>
    </>
  );
}

UserTools.propTypes = {
  openModal: PropTypes.func.isRequired,
};
