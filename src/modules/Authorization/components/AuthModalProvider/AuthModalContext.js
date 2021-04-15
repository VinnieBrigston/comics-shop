import { createContext } from 'react';

export const AuthModalContext = createContext({
  modalContext: {
    component: null,
    props: {},
    showModal: () => {},
    hideModal: () => {},
  },
});
