import axios from '../vendor/axios';
import { configurateInterceptors } from '../vendor/axios/private';
import { AUTH_START,AUTH_SUCCESS,AUTH_LOGOUT } from './types';
import { saveState } from '../helpers/localStorage';

export const authStart = () => {
  return {
      type: AUTH_START
  };
};

export const authSuccess = (token, userId) => {
  return {
      type: AUTH_SUCCESS,
      token,
      userId
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  return {
      type: AUTH_LOGOUT
  };
};

export const login = (email, password) => {
  
  return dispatch => {
    dispatch(authStart());
    const data = { email,password };
    axios.post('auth/login',data)
      .then(res => {
        console.log('resss',res);
        const token = res.headers.authorization;
        const userId = res.data._id;
        // localStorage.setItem('token', token);
        // localStorage.setItem('userId', userId);
        saveState({
          auth: {
            token,
            userId
          }
        },'shopAuthState')
        configurateInterceptors(token);
        dispatch(authSuccess(token, userId));
      })
  }
}