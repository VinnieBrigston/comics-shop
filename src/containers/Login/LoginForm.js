import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { login } from '../../actions';
import formClasses from '../../common/styles/form.module.scss';
import loginPageClasses from './login.module.scss';

const Form = (props) => {
  const formConfig = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      const { login } = props;
      login(values);
    },
  });

  return (
    <form onSubmit={formConfig.handleSubmit} className={`${formClasses.form} ${loginPageClasses.loginForm}`}>
      <input
        id="email"
        name="email"
        placeholder="mail"
        type="text"
        className={formClasses.authInput}
        onChange={formConfig.handleChange}
        value={formConfig.values.email}
      />
      <input
        id="password"
        name="password"
        placeholder="password"
        type="password"
        className={formClasses.authInput}
        onChange={formConfig.handleChange}
        value={formConfig.values.password}
      />
      <button type="submit" className={formClasses.authSubmit}>yes</button>
    </form>
  );
};

export default connect(null, { login })(Form);

Form.propTypes = {
  login: PropTypes.func.isRequired,
};
