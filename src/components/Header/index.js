import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Profile } from './Profile';
import { Controls } from './Controls';
import { ProfileModal } from './ProfileModal';
import { getAuthenticatedStatus } from '../../reducers/selectors/selectors_user';
import classes from './header.module.scss';

export function Header() {
  const isAuthenticated = useSelector(getAuthenticatedStatus);
  const [isProfileModalOpen, setModalStatus] = useState(false);
  const toggleProfileModal = useCallback(() => {
    setModalStatus(!isProfileModalOpen);
  }, [isProfileModalOpen]);
  return (
    <div className={classes.header}>
      { isAuthenticated
        ? <Profile openModal={toggleProfileModal} />
        : <Controls />
      }
      <ProfileModal
        isOpen={isProfileModalOpen}
        toggleProfileModal={toggleProfileModal}
      />
    </div>
  );
}
