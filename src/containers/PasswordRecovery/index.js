import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { validateResetHash } from '../../actions';
import formClasses from '../../common/styles/form.module.scss';
import { PasswordRecoveryForm } from './PasswordRecoveryForm';
import closeIcon from '../../assets/images/icons/close.svg';
import registrationClasses from '../Registration/registration.module.scss';
import { HOME_URL } from '../../constants/routes';
import { getAuthenticatedStatus } from '../../reducers/selectors/selectors_user';
import {
  getLoadingStatus,
  getAuthErrorText,
  getHashValidationStatus,
} from '../../reducers/selectors/selectors_auth';

function PasswordRecovery(props) {
  const [hash, setHash] = useState('');
  const {
    isAuthenticated,
    hashIsValid,
    authError,
    validateResetHash,
  } = props;

  useEffect(() => {
    const hashFromUrl = props.match?.params?.hash;
    setHash(hashFromUrl);
    if (hashFromUrl) validateResetHash(hash);
  }, []);

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

const mapStateToProps = state => {
  return {
    isLoading: getLoadingStatus(state),
    isAuthenticated: getAuthenticatedStatus(state),
    authError: getAuthErrorText(state),
    hashIsValid: getHashValidationStatus(state),
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
