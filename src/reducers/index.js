import { combineReducers } from 'redux';
import { authReducer } from './reducer_auth';
import { userReducer } from './reducer_user';

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});
