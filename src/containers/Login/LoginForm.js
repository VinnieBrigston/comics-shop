import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { logInUser } from '../../actions';
import formClasses from '../../common/styles/form.module.scss';
import loginPageClasses from './login.module.scss';
import { validation } from './validationSchema';
import { Input } from '../../components/FormElements/Input';
import { getAuthErrorText } from '../../reducers/selectors/selectors_auth';

const LoginForm = (props) => (
  <Formik
    initialValues={{
      email: '',
      password: '',
    }}
    validationSchema={validation}
    onSubmit={values => {
      const { logInUser } = props;
      logInUser(values);
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
        authError={props.authError}
      />
      <button type="submit" className={formClasses.authSubmit}>yes</button>
    </Form>
  </Formik>
);

const mapStateToProps = state => {
  return {
    authError: getAuthErrorText(state),
  };
};

LoginForm.defaultProps = {
  authError: '',
};

LoginForm.propTypes = {
  logInUser: PropTypes.func.isRequired,
  authError: PropTypes.string,
};

const Enhanced = connect(mapStateToProps, { logInUser })(LoginForm);

export { Enhanced as LoginForm };
