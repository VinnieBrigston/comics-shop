import { combineReducers } from 'redux';
import { authReducer } from './reducer_auth';

export const rootReducer = combineReducers({
  auth: authReducer,
});
