import React from 'react';
import { Link } from 'react-router-dom';
import classes from './header.module.scss';
import { LOGIN_URL, REGISTER_URL } from '../../constants/routes';

export const Controls = () => (
  <ul className={classes.suggestions}>
    <li>
      <Link to={REGISTER_URL} className={classes.link}>Sign Up</Link>
    </li>
    <li>
      <Link to={LOGIN_URL} className={classes.link}>Sign In</Link>
    </li>
  </ul>
);
