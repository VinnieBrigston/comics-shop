import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ResetForm } from './ResetForm.jsx';
import loginPageClasses from '../Login/login.module.scss';
import formClasses from '../../styles/form.module.scss';
import { resetErrorMessages } from '../../store/actions';
import { checkSendingLink } from '../../store/selectors';

export function PasswordResetting(props) {
  const dispatch = useDispatch();
  const resetLinkIsSent = useSelector(checkSendingLink);
  const { hideModal } = props;

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
        : <ResetForm hideModal={hideModal} />
      }
    </div>
  );
}

PasswordResetting.propTypes = {
  hideModal: PropTypes.func.isRequired,
};
