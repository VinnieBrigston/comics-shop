import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { register } from '../../actions';
import formClasses from '../../common/styles/form.module.scss';
import registrationClasses from './registration.module.scss';

const Form = (props) => {
  const formConfig = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('this field is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('this field is required'),
      password: Yup.string()
        .required('Password could not be empty'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Password could not be empty'),
    }),
    onSubmit: values => {
      const { register } = props;
      register(values);
    },
  });

  const { handleSubmit, touched, errors } = formConfig;

  return (
    <form onSubmit={handleSubmit} className={`${formClasses.form} ${registrationClasses.registrationForm}`}>
      <input
        id="name"
        name="name"
        placeholder="name"
        type="text"
        className={formClasses.authInput}
        {...formConfig.getFieldProps('name')}
      />
      {touched.name && errors.name ? (
        <div className={formClasses.errorMessage}>{formConfig.errors.name}</div>
      ) : null}
      <input
        id="email"
        name="email"
        placeholder="email"
        type="text"
        className={formClasses.authInput}
        {...formConfig.getFieldProps('email')}
      />
      {touched.email && errors.email ? (
        <div className={formClasses.errorMessage}>{formConfig.errors.email}</div>
      ) : null}
      <input
        id="password"
        name="password"
        placeholder="password"
        type="password"
        className={formClasses.authInput}
        {...formConfig.getFieldProps('password')}
      />
      {touched.password && errors.password ? (
        <div className={formClasses.errorMessage}>{formConfig.errors.password}</div>
      ) : null}
      <input
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Please repeat you password"
        type="password"
        className={formClasses.authInput}
        {...formConfig.getFieldProps('confirmPassword')}
      />
      {touched.confirmPassword && errors.confirmPassword ? (
        <div className={formClasses.errorMessage}>{formConfig.errors.confirmPassword}</div>
      ) : null}
      <button type="submit" className={formClasses.authSubmit}>go</button>
    </form>
  );
};

Form.propTypes = {
  register: PropTypes.func.isRequired,
};

const Enhanced = connect(null, { register })(Form);

export { Enhanced as Form };
