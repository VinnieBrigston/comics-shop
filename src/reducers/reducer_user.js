import { handleActions } from 'redux-actions';

import {
  authorizeUser,
  logOutUser,
} from '../actions';

const initialState = {
  token: null,
  userId: null,
};

export const userReducer = handleActions(
  {
    [authorizeUser]: (state, { payload: { token, userId } }) => {
      return {
        ...state,
        token,
        userId,
      };
    },
    [logOutUser]: state => {
      return {
        ...state,
        token: null,
        userId: null,
      };
    },
  },
  initialState,
);
