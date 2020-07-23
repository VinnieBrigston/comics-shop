import React,{ memo } from 'react';
import { Link } from 'react-router-dom';
import classes from './header.module.scss';

export const Header = memo(() => (
  <div className={classes.header}>
    <ul className={classes.suggestions}>
      <li>
        <Link to="/register" className={classes.link}>Sign Up</Link>
      </li>
      <li>
        <Link to="/login" className={classes.link}>Sign In</Link>
      </li>
    </ul>
  </div>
))
