import React from 'react';
import PropTypes from 'prop-types';
import formClasses from '../../common/styles/form.module.scss';

export function AuthModal(props) {
  const {
    component: Component,
    hideModal,
    showModal,
    hash,
  } = props;

  return (
    <div className={formClasses.authWrapper}>
      <Component hideModal={hideModal} showModal={showModal} hash={hash} />
      <button
        className={formClasses.authBackLink}
        onClick={hideModal}
      >
      </button>
      <div className={formClasses.overlay}></div>
    </div>
  );
}

AuthModal.defaultProps = {
  hash: null,
};

AuthModal.propTypes = {
  component: PropTypes.any.isRequired,
  hideModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  hash: PropTypes.string,
};
