import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classes from './header.module.scss';
import { logout } from '../../actions';

const LogoutButton = (props) => {
  const { clickHandler, logout } = props;
  const handleClick = () => {
    clickHandler();
    logout();
  };
  return (
    <button className={classes.logout} onClick={handleClick}>Logout</button>
  );
};

LogoutButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

const Enhanced = connect(null, { logout })(LogoutButton);

export { Enhanced as LogoutButton };
