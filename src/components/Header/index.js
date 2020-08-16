import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Profile } from './Profile';
import { Controls } from './Controls';
import { ProfileModal } from './modal';
import classes from './header.module.scss';

class Header extends Component {
  state = {
    showProfileModal: false,
  }

  toggleProfileModal = () => {
    this.setState(({ showProfileModal }) => ({ showProfileModal: !showProfileModal }));
  }


  render() {
    return (
      <div className={classes.header}>
        { this.props.isAuthenticated
          ? <Profile openModal={this.toggleProfileModal} />
          : <Controls />
        }
        <ProfileModal
          showModal={this.state.showProfileModal}
          toggleProfileModal={this.toggleProfileModal}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
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
