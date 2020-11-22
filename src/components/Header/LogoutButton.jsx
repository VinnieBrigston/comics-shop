import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import classes from './header.module.scss';
import { logout } from '../../actions';

export function LogoutButton(props) {
  const { clickHandler } = props;
  const dispatch = useDispatch();
  function handleClick() {
    clickHandler();
    dispatch(logout());
  }
  return (
    <button className={classes.logout} onClick={handleClick}>Logout</button>
  );
}

LogoutButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
