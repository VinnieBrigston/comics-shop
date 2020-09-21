import axios from '../vendor/axios';
import { configurateInterceptors } from '../vendor/axios/private';
import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_LOGOUT,
  AUTH_FAILED,
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

export const logout = () => {
  removeState('shopAuthState');
  return {
    type: AUTH_LOGOUT,
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
