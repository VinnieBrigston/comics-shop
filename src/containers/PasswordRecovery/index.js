import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { validateResetHash } from '../../actions';
import formClasses from '../../common/styles/form.module.scss';
import { PasswordRecoveryForm } from './PasswordRecoveryForm.jsx';
import closeIcon from '../../assets/images/icons/close.svg';
import registrationClasses from '../Registration/registration.module.scss';
import { HOME_URL } from '../../constants/routes';
import { getAuthenticatedStatus } from '../../reducers/selectors/selectors_user';
import {
  getAuthErrorText,
  getHashValidationStatus,
} from '../../reducers/selectors/selectors_auth';

export function PasswordRecovery(props) {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(getAuthenticatedStatus);
  const authError = useSelector(getAuthErrorText);
  const hashIsValid = useSelector(getHashValidationStatus);
  const [hash, setHash] = useState('');

  useEffect(() => {
    const hashFromUrl = props.match?.params?.hash;
    console.log('hashFromUrl:', hashFromUrl)
    setHash(hashFromUrl);
    if (hashFromUrl) dispatch(validateResetHash(hashFromUrl));
  }, []);

  return isAuthenticated
    ? <Redirect to={HOME_URL} />
    : hashIsValid
      ? (
        <div className={formClasses.authWrapper}>
          <div className={registrationClasses.wrapper}>
            <h2 className={formClasses.authTitle}>Password Recovery</h2>
            <PasswordRecoveryForm hash={hash} />
            <Link to={HOME_URL} className={formClasses.authBackLink}>
              <img className={formClasses.authCloseIcon} src={closeIcon} alt="close page" />
            </Link>
          </div>
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
