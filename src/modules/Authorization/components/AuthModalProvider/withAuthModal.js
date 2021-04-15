import React from 'react';
import { AuthModalConsumer } from './AuthModalConsumer';

export function witAuthModal(Component) {
  return function AuthModalComponent(props) {
    return (
      <AuthModalConsumer>
        {contexts => <Component {...props} {...contexts} />}
      </AuthModalConsumer>
    );
  };
}