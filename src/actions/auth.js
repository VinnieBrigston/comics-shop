import axios from '../vendor/axios';
import { configurateInterceptors } from '../vendor/axios/private';
import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_LOGOUT,
  AUTH_FAILED,
  RESET_HASH_SENT,
  RESET_HASH_IS_VALID,
  RESET_HASH_IS_NOT_VALID,
  RESET_AUTH_NOTIFICATIONS,
} from './types';
import { saveState, removeState } from '../helpers/localStorage';

export const authStart = () => (
  {
    type: AUTH_START,
  }
);

export const authSuccess = (token, userId) => {
  return {
    type: AUTH_SUCCESS,
    token,
    userId,
  };
};

export const authFailed = (message) => {
  return {
    type: AUTH_FAILED,
    message,
  };
};

export const resetAuthNotifications = () => {
  return {
    type: RESET_AUTH_NOTIFICATIONS,
  };
};

export const logout = () => {
  removeState('shopAuthState');
  return {
    type: AUTH_LOGOUT,
  };
};

export const sendRecoveryLink = () => {
  return {
    type: RESET_HASH_SENT,
  };
};

export const hashIsValid = () => {
  return {
    type: RESET_HASH_IS_VALID,
  };
};

export const hashIsNotValid = (message) => {
  return {
    type: RESET_HASH_IS_NOT_VALID,
    message,
  };
};

export const register = ({ name, email, password }) => (dispatch) => {
  dispatch(authStart());
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
      dispatch(authSuccess(token, userId));
    });
};

export const login = ({ email, password }) => (dispatch) => {
  dispatch(authStart());
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
      dispatch(authSuccess(token, userId));
    })
    .catch(error => {
      const errorMessage = error.response?.data?.message?.error;
      dispatch(authFailed(errorMessage));
    });
};

export const reset = ({ email }) => (dispatch) => {
  dispatch(authStart());
  const data = { email };
  axios.post('auth/reset-password', data)
    .then(() => {
      dispatch(sendRecoveryLink());
    })
    .catch(error => {
      const errorMessage = error.response?.data?.message?.error;
      dispatch(authFailed(errorMessage));
    });
};

export const validateHash = (hash) => (dispatch) => {
  dispatch(authStart());
  const data = { hash };
  axios.post('auth/validate-hash', data)
    .then(() => {
      dispatch(hashIsValid());
    })
    .catch(error => {
      const errorMessage = error.response?.data?.message?.message;
      dispatch(hashIsNotValid(errorMessage));
    });
};

export const recoverPassword = ({ hash, password }) => (dispatch) => {
  dispatch(authStart());
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
      dispatch(authSuccess(token, userId));
    })
    .catch(error => {
      const errorMessage = error.response?.data?.message?.message;
      dispatch(authFailed(errorMessage));
    });
};
