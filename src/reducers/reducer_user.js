import { SAVE_TOKEN } from '../actions/types';

const initialState = {
  auth: null,
  token: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SAVE_TOKEN:
      return { ...this.state, token: action.token};
    default:
      return state;
  }
}