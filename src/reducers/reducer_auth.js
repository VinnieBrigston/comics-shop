import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_LOGOUT,
  AUTH_FAILED,
  RESET_HASH_SENT,
  RESET_HASH_IS_VALID,
  RESET_HASH_IS_NOT_VALID,
  RESET_AUTH_NOTIFICATIONS,
} from '../actions/types';

const initialState = {
  token: null,
  userId: null,
  loading: false,
  authError: null,
  recovery: {
    resetLinkIsSent: false,
    hashIsValid: false,
  },
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

const resetHashWasSentSuccessfully = (state) => {
  return {
    ...state,
    recovery: {
      ...state.recovery,
      resetLinkIsSent: true,
    },
    loading: false,
  };
};

const resetHashIsValid = (state) => {
  return {
    ...state,
    recovery: {
      ...state.recovery,
      hashIsValid: true,
    },
    loading: false,
  };
};

const resetHashIsNotValid = (state, action) => {
  return {
    ...state,
    authError: action.message,
    recovery: {
      ...state.recovery,
      hashIsValid: false,
    },
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

const resetNotifications = (state) => {
  return {
    ...state,
    authError: null,
    recovery: {
      resetLinkIsSent: false,
      hashIsValid: false,
    },
  };
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START: return authStart(state, action);
    case AUTH_SUCCESS: return authSuccess(state, action);
    case AUTH_FAILED: return authFailed(state, action);
    case AUTH_LOGOUT: return authLogout(state, action);
    case RESET_HASH_SENT: return resetHashWasSentSuccessfully(state);
    case RESET_HASH_IS_VALID: return resetHashIsValid(state);
    case RESET_HASH_IS_NOT_VALID: return resetHashIsNotValid(state, action);
    case RESET_AUTH_NOTIFICATIONS: return resetNotifications(state);
    default: return state;
  }
};
