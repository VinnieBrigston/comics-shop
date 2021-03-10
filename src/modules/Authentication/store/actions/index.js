import { createAction } from 'redux-actions';
import { setAuthorizationToken } from '../../../../vendor/axios/private';
import { saveState, removeState } from '../../../../helpers/localStorage';

export const logOutUser = createAction('LOG_OUT_USER');
export const startAuthLoading = createAction('START_AUTH');
export const stopAuthLoading = createAction('STOP_AUTH');
export const authorizeUser = createAction('AUTHORIZE_USER');

export const logout = () => (dispatch) => {
  removeState('shopAuthState');
  dispatch(logOutUser());
};

export const updateUser = (res, dispatch) => {
  const token = res.headers.authorization;
  const userId = res.data._id;
  saveState({
    user: {
      token,
      userId,
    },
  }, 'shopAuthState');
  setAuthorizationToken(token);
  dispatch(authorizeUser({ token, userId }));
};