import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { validateResetHash } from '../../actions';
import formClasses from '../../common/styles/form.module.scss';
import { PasswordRecoveryForm } from './PasswordRecoveryForm';
import closeIcon from '../../assets/images/icons/close.svg';
import registrationClasses from '../Registration/registration.module.scss';
import { HOME_URL } from '../../constants/routes';

class PasswordRecovery extends PureComponent {
  state={
    hash: '',
  }

  componentDidMount() {
    const hash = this.props.match?.params?.hash;
    const { validateResetHash } = this.props;
    this.setState({
      hash,
    });
    if (hash) validateResetHash(hash);
  }

  render() {
    const { hash } = this.state;
    const { isAuthenticated, hashIsValid, authError } = this.props;
    return isAuthenticated
      ? <Redirect to={HOME_URL} />
      : hashIsValid
        ? (
          <div className={registrationClasses.wrapper}>
            <h2 className={formClasses.authTitle}>Password Recovery</h2>
            <PasswordRecoveryForm hash={hash} />
            <Link to={HOME_URL} className={formClasses.authBackLink}>
              <img className={formClasses.authCloseIcon} src={closeIcon} alt="close page" />
            </Link>
          </div>
        )
        : (
          <div className={registrationClasses.wrapper}>
            <h2>{authError}</h2>
            <Link to={HOME_URL} className={formClasses.authBackLink}>
              <img className={formClasses.authCloseIcon} src={closeIcon} alt="close page" />
            </Link>
          </div>
        );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.auth.isLoading,
    isAuthenticated: !!state.user.token,
    authError: state.auth.authError,
    hashIsValid: state.auth.recovery.hashIsValid,
  };
};

PasswordRecovery.defaultProps = {
  isAuthenticated: false,
  authError: '',
};

PasswordRecovery.propTypes = {
  isAuthenticated: PropTypes.bool,
  validateResetHash: PropTypes.func.isRequired,
  hashIsValid: PropTypes.bool.isRequired,
  authError: PropTypes.string,
};

const Enhanced = connect(mapStateToProps, { validateResetHash })(PasswordRecovery);

export { Enhanced as PasswordRecovery };
