import { localStore } from '../utilities/storage';

export const loadState = (key) => {
  try {
    const serializedState = localStore.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return null;
  }
};

export const saveState = (state, key) => {
  try {
    const serializedState = JSON.stringify(state);
    localStore.setItem(key, serializedState);
  } catch (err) {
    console.log(err);
  }
};

export const removeState = (key) => {
  try {
    localStore.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};
