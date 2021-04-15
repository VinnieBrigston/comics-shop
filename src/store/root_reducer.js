import { combineReducers } from 'redux';
import { authReducer } from '../modules/Authorization/store/reducers';
import { userReducer } from '../modules/Authentication/store/reducers';

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});
