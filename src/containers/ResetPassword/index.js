import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ResetForm } from './ResetForm.jsx';
import loginPageClasses from '../Login/login.module.scss';
import formClasses from '../../common/styles/form.module.scss';
import closeIcon from '../../assets/images/icons/close.svg';
import { HOME_URL } from '../../constants/routes';
import { resetErrorMessages } from '../../actions';
import { checkSendingLink } from '../../reducers/selectors/selectors_auth';

export function PasswordResetting() {
  const dispatch = useDispatch();
  const resetLinkIsSent = useSelector(checkSendingLink);

  useEffect(() => {
    return () => {
      dispatch(resetErrorMessages());
    };
  }, []);

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
