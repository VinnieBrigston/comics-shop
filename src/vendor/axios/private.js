import axios from 'axios';
import { logout } from '../../modules/Authentication/store/actions';

const privateInstance = axios.create({
  baseURL: process.env.REACT_APP_PRIVATE_BASE_URL,
});


export const setAuthorizationToken = token => {
  privateInstance.defaults.headers.common.authorization = `${token}`;
};

export function configurateInterceptors(dispatch) {
  return privateInstance.interceptors.response.use(
    res => {
      const token = res.headers && res.headers.authorization;
      setAuthorizationToken(token);
      return res;
    },
    error => {
      if (error.response.status === 401) {
        // call action for removing of the user's session
        dispatch(logout());
        console.log('Token is expired');
      }
      Promise.reject(error);
    },
  );
}

export default privateInstance;
