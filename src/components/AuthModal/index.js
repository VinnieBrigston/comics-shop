import React from 'react';
import PropTypes from 'prop-types';
import formClasses from '../../common/styles/form.module.scss';

export function AuthModal(props) {
  const {
    component: Component,
    hideModal,
    showModal,
  } = props;

  const handleAuthModalClosing = () => {
    hideModal();
  };

  return (
    <div className={formClasses.authWrapper}>
      <Component hideModal={hideModal} showModal={showModal} />
      <button
        className={formClasses.authBackLink}
        onClick={handleAuthModalClosing}
      >
      </button>
      <div className={formClasses.overlay}></div>
    </div>
  );
}

AuthModal.propTypes = {
  component: PropTypes.any,
  hideModal: PropTypes.func,
  showModal: PropTypes.func,
};
