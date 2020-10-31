import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { resetPassword } from '../../actions';
import formClasses from '../../common/styles/form.module.scss';
import loginPageClasses from '../Login/login.module.scss';
import { validation } from './validationSchema';
import { Input } from '../../components/FormElements/Input';
import { getAuthErrorText } from '../../reducers/selectors/selectors_auth';

const ResetForm = (props) => (
  <Formik
    initialValues={{
      email: '',
    }}
    validationSchema={validation}
    onSubmit={values => {
      const { resetPassword } = props;
      resetPassword(values);
    }}
  >
    <Form className={`${formClasses.form} ${loginPageClasses.loginForm}`}>
      <Input
        id="email"
        name="email"
        placeholder="mail"
        type="text"
        authError={props.authError}
      />
      <button type="submit" className={formClasses.authSubmit}>reset</button>
    </Form>
  </Formik>
);

const mapStateToProps = state => {
  return {
    authError: getAuthErrorText(state),
  };
};

ResetForm.defaultProps = {
  authError: '',
};

ResetForm.propTypes = {
  resetPassword: PropTypes.func.isRequired,
  authError: PropTypes.string,
};

const Enhanced = connect(mapStateToProps, { resetPassword })(ResetForm);

export { Enhanced as ResetForm };
