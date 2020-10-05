import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ResetForm } from './ResetForm';
import loginPageClasses from '../Login/login.module.scss';
import formClasses from '../../common/styles/form.module.scss';
import closeIcon from '../../assets/images/icons/close.svg';
import { HOME_URL } from '../../constants/routes';
import { resetAuthNotifications } from '../../actions';

class Resetting extends Component {
  componentWillUnmount() {
    const { resetAuthNotifications } = this.props;
    resetAuthNotifications();
  }

  render() {
    const { resetLinkIsSent } = this.props;
    return (
      <div className={loginPageClasses.wrapper}>
        <h2 className={formClasses.authTitle}>reset yout password</h2>
        {resetLinkIsSent
          ? (
            <h3 className={formClasses.recoveryMessage}>
              Recovery link was sent on your email. Please check
            </h3>
          )
          : <ResetForm />
        }
        <Link to={HOME_URL} className={formClasses.authBackLink}>
          <img className={formClasses.authCloseIcon} src={closeIcon} alt="close page" />
        </Link>
      </div>
    );
  }
}

Resetting.propTypes = {
  resetLinkIsSent: PropTypes.bool.isRequired,
  resetAuthNotifications: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    resetLinkIsSent: state.auth.recovery.resetLinkIsSent,
  };
};

const Enhanced = connect(mapStateToProps, { resetAuthNotifications })(Resetting);

export { Enhanced as Resetting };
