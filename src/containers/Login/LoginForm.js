import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { login } from '../../actions';
import formClasses from '../../common/styles/form.module.scss';
import loginPageClasses from './login.module.scss';
import { validation } from './validationSchema';
import { Input } from '../../components/FormElements/Input';

const LoginForm = (props) => (
  <Formik
    initialValues={{
      email: '',
      password: '',
    }}
    validationSchema={validation}
    onSubmit={values => {
      const { login } = props;
      try {
        login(values);
      } catch (e) {
        console.log('rsdsd', e.response);
      }
    }}
  >
    <Form className={`${formClasses.form} ${loginPageClasses.loginForm}`}>
      <Input
        id="email"
        name="email"
        placeholder="mail"
        type="text"
      />
      <Input
        id="password"
        name="password"
        placeholder="password"
        type="password"
      />
      <button type="submit" className={formClasses.authSubmit}>yes</button>
    </Form>
  </Formik>
);

const Enhanced = connect(null, { login })(LoginForm);

export { Enhanced as LoginForm };

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};
