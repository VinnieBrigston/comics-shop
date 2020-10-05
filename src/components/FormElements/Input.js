import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import formClasses from '../../common/styles/form.module.scss';

export const Input = ({ ...props }) => {
  const [field, { error, touched }] = useField(props);
  const { autherror, elementishidden } = props;
  return (
    <>
      <input
        className={`
          ${formClasses.authInput} 
          ${error && formClasses.authInput_withError} 
          ${elementishidden && formClasses.hiddenElement}
        `}
        {...field}
        {...props}
      />
      {touched && error && (
        <div className={formClasses.errorMessage}>{error}</div>
      )}
      {touched && autherror && (
        <div className={formClasses.errorMessage}>{autherror}</div>
      )}
    </>
  );
};

Input.defaultProps = {
  autherror: null,
  elementishidden: null,
};

Input.propTypes = {
  autherror: PropTypes.string,
  elementishidden: PropTypes.bool,
};
