import { SAVE_TOKEN } from './types';

export const saveToken = (token) => {
  return {
    type: SAVE_TOKEN,
    token: token
  }
}