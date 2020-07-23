import { combineReducers } from 'redux';
import userReducer from './reducer_user';

export const rootReducer  = combineReducers({
  user: userReducer
})