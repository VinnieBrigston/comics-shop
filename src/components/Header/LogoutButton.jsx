import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classes from './header.module.scss';
import { handleLogOutClick } from '../../actions';

const LogoutButton = (props) => {
  const { clickHandler, handleLogOutClick } = props;
  const handleClick = () => {
    clickHandler();
    handleLogOutClick();
  };
  return (
    <button className={classes.logout} onClick={handleClick}>Logout</button>
  );
};

LogoutButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  handleLogOutClick: PropTypes.func.isRequired,
};

const Enhanced = connect(null, { handleLogOutClick })(LogoutButton);

export { Enhanced as LogoutButton };
