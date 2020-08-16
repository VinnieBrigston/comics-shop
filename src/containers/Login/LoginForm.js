import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { login } from '../../actions';
import formClasses from '../../common/styles/form.module.scss';
import loginPageClasses from './login.module.scss';


const Form = (props) => {
  const formConfig = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('this field is required'),
      password: Yup.string()
        .required('Password could not be empty'),
    }),
    onSubmit: values => {
      const { login } = props;
      login(values);
    },
  });

  const { handleSubmit, touched, errors } = formConfig;
  return (
    <form onSubmit={handleSubmit} className={`${formClasses.form} ${loginPageClasses.loginForm}`}>
      <input
        id="email"
        name="email"
        placeholder="mail"
        type="text"
        className={`${formClasses.authInput} ${errors.email && formClasses.authInput_withError}`}
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
        className={`${formClasses.authInput} 'with-error'`}
        {...formConfig.getFieldProps('password')}
      />
      {touched.password && errors.password ? (
        <div className={formClasses.errorMessage}>{formConfig.errors.password}</div>
      ) : null}
      <button type="submit" className={formClasses.authSubmit}>yes</button>
    </form>
  );
};

const Enhanced = connect(null, { login })(Form);

export { Enhanced as Form };

Form.propTypes = {
  login: PropTypes.func.isRequired,
};
