import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserTools } from './Profile';
import { Controls } from './Controls';
import { ProfileModal } from './ProfileModal';
import { getAuthenticatedStatus } from '../../../modules/Authentication/store/selectors';
import Logo from '../../../assets/images/logo.svg';
import LoupIcon from '../../../assets/images/loup.svg';
import { HOME_URL } from '../../constants/routes';
import classes from './header.module.scss';

export function Header() {
  const isAuthenticated = useSelector(getAuthenticatedStatus);
  const [isProfileModalOpen, setModalStatus] = useState(false);
  const toggleProfileModal = useCallback(() => {
    setModalStatus(!isProfileModalOpen);
  }, [isProfileModalOpen]);
  return (
    <div className={classes.header}>
      <button className={classes.menuButton}></button>
      <div className={classes.overlay}></div>
      <Link to={HOME_URL} className={classes.logo}>
        <img src={Logo} alt="comics shop logo" />
      </Link>
      <div className={classes.buttons}>
        <button className={classes.button}>
          <img src={LoupIcon} alt="Search" />
        </button>
        { isAuthenticated
          ? <UserTools openModal={toggleProfileModal} />
          : <Controls />
        }
      </div>
      <ProfileModal
        isOpen={isProfileModalOpen}
        toggleProfileModal={toggleProfileModal}
      />
    </div>
  );
}
