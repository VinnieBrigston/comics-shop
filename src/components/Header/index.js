import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Profile } from './Profile';
import { Controls } from './Controls';
import { ProfileModal } from './ProfileModal';
import { getAuthenticatedStatus } from '../../reducers/selectors/selectors_user';
import classes from './header.module.scss';

function Header(props) {
  const [isProfileModalOpen, toggleProfileModalStatus] = useState(false);
  const toggleProfileModal = () => {
    toggleProfileModalStatus(!isProfileModalOpen);
  };
  return (
    <div className={classes.header}>
      { props.isAuthenticated
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

const mapStateToProps = state => {
  return {
    isAuthenticated: getAuthenticatedStatus(state),
  };
};

const Enhanced = connect(mapStateToProps)(Header);

export { Enhanced as Header };

Header.defaultProps = {
  isAuthenticated: false,
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
};
