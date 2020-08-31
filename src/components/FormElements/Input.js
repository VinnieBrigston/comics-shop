import React from 'react';
import { useField } from 'formik';
import formClasses from '../../common/styles/form.module.scss';

export const Input = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input
        className={`${formClasses.authInput} ${meta.error && formClasses.authInput_withError}`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && (
        <div className={formClasses.errorMessage}>{meta.error}</div>
      )}
    </>
  );
};
