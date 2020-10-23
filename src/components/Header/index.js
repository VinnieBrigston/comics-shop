import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Profile } from './Profile';
import { Controls } from './Controls';
import { ProfileModal } from './ProfileModal';
import classes from './header.module.scss';

class Header extends Component {
  state = {
    isProfileModalOpen: false,
  }

  toggleProfileModal = () => {
    this.setState(({ isProfileModalOpen }) => ({ isProfileModalOpen: !isProfileModalOpen }));
  }


  render() {
    return (
      <div className={classes.header}>
        { this.props.isAuthenticated
          ? <Profile openModal={this.toggleProfileModal} />
          : <Controls />
        }
        <ProfileModal
          isOpen={this.state.isProfileModalOpen}
          toggleProfileModal={this.toggleProfileModal}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.user.token,
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
