import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import cn from 'classnames';
import formClasses from '../../styles/form.module.scss';

export function Input(props) {
  const [field, { error, touched }] = useField(props);
  const {
    authError,
    isHidden,
    id,
    name,
    placeholder,
    type,
  } = props;
  return (
    <div className={formClasses.inputElement}>
      <div
        className={
          cn(
            formClasses.inputWrapper,
            { [formClasses.inputWrapper_withError]: error },
          )
        }
      >
        <input
          className={
            cn(
              formClasses.authInput,
              { [formClasses.authInput_withError]: error },
              { [formClasses.hiddenElement]: isHidden },
            )
          }
          {...field}
          id={id}
          name={name}
          placeholder={placeholder}
          type={type}
        />
      </div>
      {touched && error && (
        <div className={formClasses.errorMessage}>{error}</div>
      )}
      {touched && authError && (
        <div className={formClasses.errorMessage}>{authError}</div>
      )}
    </div>
  );
}

Input.defaultProps = {
  authError: '',
  isHidden: false,
  id: '',
  name: '',
  placeholder: '',
  type: 'text',
};

Input.propTypes = {
  authError: PropTypes.string,
  isHidden: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};
