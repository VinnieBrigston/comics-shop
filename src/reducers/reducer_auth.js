import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_LOGOUT,
  AUTH_FAILED,
} from '../actions/types';

const initialState = {
  token: null,
  userId: null,
  loading: false,
  authError: null,
};

const authStart = (state) => {
  return {
    ...state,
    loading: true,
  };
};

const authSuccess = (state, action) => {
  return {
    ...state,
    token: action.token,
    userId: action.userId,
    loading: false,
  };
};

const authFailed = (state, action) => {
  return {
    ...state,
    authError: action.message,
  };
};

const authLogout = (state) => {
  return {
    ...state,
    token: null,
    userId: null,
  };
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START: return authStart(state, action);
    case AUTH_SUCCESS: return authSuccess(state, action);
    case AUTH_FAILED: return authFailed(state, action);
    case AUTH_LOGOUT: return authLogout(state.action);
    default: return state;
  }
};
