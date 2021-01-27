import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { AuthModalContext } from './auth-modal-context';
import { witAuthModal } from './withAuthModal';
import { AuthModal } from '../../components/AuthModal';

class AuthModalProvider extends PureComponent {
  state = {
    component: null,
    props: {},
  };

  showModal = (component, props = {}, modalProps) => {
    this.setState({
      component,
      props,
      modalProps,
    });
  };

  hideModal = () => {
    this.setState({
      component: null,
      props: {},
    });
  }

  render() {
    const { children } = this.props;
    const { component, props, modalProps } = this.state;

    return (
      <AuthModalContext.Provider
        value={{
          modalContext: {
            component,
            props,
            showModal: this.showModal,
            hideModal: this.hideModal,
          },
        }}
      >
        {children}
        {component ? (
          <AuthModal
            component={component}
            open
            hideModal={this.hideModal}
            showModal={this.showModal}
            {...modalProps}
            {...props}
          />
        ) : null}
      </AuthModalContext.Provider>
    );
  }
}

AuthModalProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

const Enhanced = witAuthModal(AuthModalProvider);
Enhanced.displayName = 'AuthModalProvider';

export { Enhanced as AuthModalProvider };
