import { handleActions } from 'redux-actions';

import {
  startAuthLoading,
  stopAuthLoading,
} from '../../../Authentication/store/actions';

import {
  notifyRequestError,
  sendRecoveryLink,
  handleResetHashValidity,
  resetErrorMessages,
} from '../actions';

const initialState = {
  isLoading: false,
  authError: null,
  recovery: {
    resetLinkIsSent: false,
    hashIsValid: false,
  },
};

export const authReducer = handleActions(
  {
    [startAuthLoading]: state => ({ ...state, isLoading: true }),
    [stopAuthLoading]: state => ({ ...state, isLoading: false }),
    [notifyRequestError]: (state, { payload: { message } }) => (
      {
        ...state,
        authError: message,
      }
    ),
    [sendRecoveryLink]: state => (
      {
        ...state,
        recovery: {
          ...state.recovery,
          resetLinkIsSent: true,
        },
      }
    ),
    [handleResetHashValidity]: (state, { payload: { hashIsValid, message } }) => (
      {
        ...state,
        ...(!hashIsValid ? { authError: message } : {}),
        recovery: {
          ...state.recovery,
          hashIsValid,
        },
      }
    ),
    [resetErrorMessages]: state => (
      {
        ...state,
        authError: null,
        recovery: {
          resetLinkIsSent: false,
          hashIsValid: false,
        },
      }
    ),

  },
  initialState,
);
