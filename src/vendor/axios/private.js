import axios from 'axios';

const privateInstance = axios.create({
  baseURL: process.env.REACT_APP_PRIVATE_BASE_URL,
});


export const configurateInterceptors = (token) => {
  privateInstance.defaults.headers.common.authorization = `${token}`;
};

privateInstance.interceptors.response.use(
  res => {
    const token = res.headers && res.headers.authorization;
    configurateInterceptors(token);
    return res;
  },
  error => {
    if (error.response.status === 401) {
      // call action for removing of the user's session
      console.log('Token is expired');
    }
    Promise.reject(error);
  },
);

export default privateInstance;
