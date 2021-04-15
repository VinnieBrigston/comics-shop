import { createAction } from 'redux-actions';
import axios from '../../../vendor/axios';
import {
  startAuthLoading,
  stopAuthLoading,
  updateUser,
} from '../../Authentication/store/actions';


export const notifyRequestError = createAction('NOTIFY_REQUEST_ERROR');

export const resetErrorMessages = createAction('RESET_ERROR_MESSAGES');

export const sendRecoveryLink = createAction('SEND_RECOVERY_LINK');

export const handleResetHashValidity = createAction('VALIDATE_RESET_HASH');

export const registerUser = ({ name, email, password }, onSucceed) => (dispatch) => {
  dispatch(startAuthLoading());
  axios.post('auth/registration', { name, email, password })
    .then(res => {
      updateUser(res, dispatch);
      onSucceed();
    })
    .catch(error => {
      const errorMessage = error.response?.data?.message?.error;
      dispatch(notifyRequestError({ message: errorMessage }));
    })
    .finally(() => dispatch(stopAuthLoading));
};

export const logInUser = ({ email, password }, onSucceed) => (dispatch) => {
  dispatch(startAuthLoading());
  const data = { email, password };
  axios.post('auth/login', data)
    .then(res => {
      updateUser(res, dispatch);
      onSucceed();
    })
    .catch(error => {
      const errorMessage = error.response?.data?.message?.error;
      dispatch(notifyRequestError({ message: errorMessage }));
    })
    .finally(() => dispatch(stopAuthLoading));
};

export const resetPassword = ({ email }, onSucceed) => (dispatch) => {
  dispatch(startAuthLoading());
  axios.post('auth/recover', { email })
    .then(() => {
      dispatch(sendRecoveryLink());
      onSucceed();
    })
    .catch(error => {
      const errorMessage = error.response?.data?.message?.error;
      dispatch(notifyRequestError({ message: errorMessage }));
    })
    .finally(() => dispatch(stopAuthLoading));
};

export const validateResetHash = (hash) => (dispatch) => {
  dispatch(startAuthLoading());
  const data = { hash };
  axios.post('auth/validate-hash', data)
    .then(() => {
      dispatch(handleResetHashValidity({ hashIsValid: true }));
    })
    .catch(error => {
      const errorMessage = error.response?.data?.message?.message;
      dispatch(handleResetHashValidity({ hashIsValid: false, message: errorMessage }));
    })
    .finally(() => dispatch(stopAuthLoading));
};

export const recoverPassword = ({ hash, password }, onSucceed) => (dispatch) => {
  dispatch(startAuthLoading());
  const data = { hash, password };
  axios.post('auth/restore', data)
    .then((res) => {
      updateUser(res, dispatch);
      onSucceed();
    })
    .catch(error => {
      const errorMessage = error.response?.data?.message?.message;
      dispatch(notifyRequestError({ message: errorMessage }));
    })
    .finally(() => dispatch(stopAuthLoading));
};
