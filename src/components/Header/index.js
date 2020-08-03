import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Profile } from './Profile';
import { Controls } from './Controls';
import { ProfileModal } from './modal';
import classes from './header.module.scss';

class Header extends Component {

  state = {
    showProfileModal: false
  }

  toggleProfileModal = () => {
    this.setState({
      showProfileModal: !this.state.showProfileModal
    })
  }


  render() {
    return(
      <div className={classes.header}>
        { this.props.isAuthenticated ? <Profile openModal={this.toggleProfileModal} /> : <Controls /> }
        <ProfileModal
          showModal={this.state.showProfileModal}
          toggleProfileModal={this.toggleProfileModal}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
  }
}

export default connect(mapStateToProps,null)(Header);