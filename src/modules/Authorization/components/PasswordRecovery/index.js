import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { validateResetHash } from '../../store/actions';
import formClasses from '../../styles/form.module.scss';
import { PasswordRecoveryForm } from './PasswordRecoveryForm.jsx';
import registrationClasses from '../Registration/registration.module.scss';
import {
  getAuthErrorText,
  getHashValidationStatus,
} from '../../store/selectors';

export function PasswordRecovery(props) {
  const dispatch = useDispatch();
  const authError = useSelector(getAuthErrorText);
  const hashIsValid = useSelector(getHashValidationStatus);
  const { hideModal, hash } = props;

  useEffect(() => {
    if (hash) dispatch(validateResetHash(hash));
  }, []);

  return (
    <div className={registrationClasses.wrapper}>
      <h2 className={formClasses.authTitle}>Password Recovery</h2>
      {hashIsValid
        ? <PasswordRecoveryForm hash={hash} hideModal={hideModal} />
        : <h2>{authError}</h2>
      }
    </div>
  );
}

PasswordRecovery.defaultProps = {
  hash: '',
};

PasswordRecovery.propTypes = {
  hash: PropTypes.string,
  hideModal: PropTypes.func.isRequired,
};
