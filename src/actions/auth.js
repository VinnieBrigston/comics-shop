import { createAction } from 'redux-actions';
import axios from '../vendor/axios';
import { configurateInterceptors } from '../vendor/axios/private';
import { saveState, removeState } from '../helpers/localStorage';

export const startAuthLoading = createAction('START_AUTH');

export const stopAuthLoading = createAction('STOP_AUTH');

export const authorizeUser = createAction('AUTHORIZE_USER');

export const notifyRequestError = createAction('NOTIFY_REQUEST_ERROR');

export const resetErrorMessages = createAction('RESET_ERROR_MESSAGES');

export const logOutUser = createAction('LOG_OUT_USER');

export const logout = () => (dispatch) => {
  removeState('shopAuthState');
  dispatch(logOutUser());
};

export const sendRecoveryLink = createAction('SEND_RECOVERY_LINK');

export const handleResetHashValidity = createAction('VALIDATE_RESET_HASH');

export const registerUser = ({ name, email, password }) => (dispatch) => {
  dispatch(startAuthLoading());
  axios.post('auth/registration', { name, email, password })
    .then(res => {
      const token = res.headers.authorization;
      const userId = res.data._id;
      saveState({
        auth: {
          token,
          userId,
        },
      }, 'shopAuthState');
      configurateInterceptors(token);
      dispatch(authorizeUser({ token, userId }));
    })
    .catch(error => {
      const errorMessage = error.response?.data?.message?.error;
      console.log('errorMessage in reg:', errorMessage);
      dispatch(notifyRequestError({ message: errorMessage }));
    })
    .finally(() => dispatch(stopAuthLoading));
};

export const logInUser = ({ email, password }) => (dispatch) => {
  dispatch(startAuthLoading());
  const data = { email, password };
  axios.post('auth/login', data)
    .then(res => {
      const token = res.headers.authorization;
      const userId = res.data._id;
      saveState({
        auth: {
          token,
          userId,
        },
      }, 'shopAuthState');
      configurateInterceptors(token);
      dispatch(authorizeUser({ token, userId }));
    })
    .catch(error => {
      const errorMessage = error.response?.data?.message?.error;
      console.log('errorMessage in log:', errorMessage);
      dispatch(notifyRequestError({ message: errorMessage }));
    })
    .finally(() => dispatch(stopAuthLoading));
};

export const resetPassword = ({ email }) => (dispatch) => {
  dispatch(startAuthLoading());
  axios.post('auth/reset-password', { email })
    .then(() => {
      dispatch(sendRecoveryLink());
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
      dispatch(handleResetHashValidity({ hashIsValid: true, message: errorMessage }));
    })
    .finally(() => dispatch(stopAuthLoading));
};

export const recoverPassword = ({ hash, password }) => (dispatch) => {
  dispatch(startAuthLoading());
  const data = { hash, password };
  axios.post('auth/recover-password', data)
    .then((res) => {
      const token = res.headers.authorization;
      const userId = res.data._id;
      saveState({
        auth: {
          token,
          userId,
        },
      }, 'shopAuthState');
      configurateInterceptors(token);
      dispatch(authorizeUser({ token, userId }));
    })
    .catch(error => {
      const errorMessage = error.response?.data?.message?.message;
      dispatch(notifyRequestError({ message: errorMessage }));
    })
    .finally(() => dispatch(stopAuthLoading));
};
