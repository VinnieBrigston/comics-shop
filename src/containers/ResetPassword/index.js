import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ResetForm } from './ResetForm';
import loginPageClasses from '../Login/login.module.scss';
import formClasses from '../../common/styles/form.module.scss';
import closeIcon from '../../assets/images/icons/close.svg';
import { HOME_URL } from '../../constants/routes';
import { resetErrorMessages } from '../../actions';

class PasswordResetting extends PureComponent {
  componentWillUnmount() {
    const { resetErrorMessages } = this.props;
    resetErrorMessages();
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

PasswordResetting.propTypes = {
  resetLinkIsSent: PropTypes.bool.isRequired,
  resetErrorMessages: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    isLoading: state.auth.isLoading,
    resetLinkIsSent: state.auth.recovery.resetLinkIsSent,
  };
};

const Enhanced = connect(mapStateToProps, { resetErrorMessages })(PasswordResetting);

export { Enhanced as PasswordResetting };
