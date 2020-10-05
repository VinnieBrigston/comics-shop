import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { validateHash } from '../../actions';
import formClasses from '../../common/styles/form.module.scss';
import { PasswordRecoveryForm } from './PasswordRecoveryForm';
import closeIcon from '../../assets/images/icons/close.svg';
import registrationClasses from '../Registration/registration.module.scss';
import { HOME_URL } from '../../constants/routes';

class PasswordRecovery extends Component {
  state={
    hash: '',
  }

  componentDidMount() {
    const hash = this.props.match?.params?.hash;
    const { validateHash } = this.props;
    this.setState({
      hash,
    });
    if (hash) validateHash(hash);
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
    loading: state.auth.loading,
    isAuthenticated: !!state.auth.token,
    authError: state.auth.authError,
    hashIsValid: state.auth.recovery.hashIsValid,
  };
};

PasswordRecovery.defaultProps = {
  isAuthenticated: false,
};

PasswordRecovery.propTypes = {
  isAuthenticated: PropTypes.bool,
  validateHash: PropTypes.func.isRequired,
  hashIsValid: PropTypes.bool.isRequired,
};

const Enhanced = connect(mapStateToProps, { validateHash })(PasswordRecovery);

export { Enhanced as PasswordRecovery };
