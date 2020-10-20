import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Profile } from './Profile';
import { Controls } from './Controls';
import { ProfileModal } from './ProfileModal';
import classes from './header.module.scss';

class Header extends Component {
  state = {
    profileModalIsOpen: false,
  }

  toggleProfileModal = () => {
    this.setState(({ profileModalIsOpen }) => ({ profileModalIsOpen: !profileModalIsOpen }));
  }


  render() {
    return (
      <div className={classes.header}>
        { this.props.isAuthenticated
          ? <Profile openModal={this.toggleProfileModal} />
          : <Controls />
        }
        <ProfileModal
          isOpen={this.state.profileModalIsOpen}
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
