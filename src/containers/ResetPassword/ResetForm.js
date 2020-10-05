import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { reset } from '../../actions';
import formClasses from '../../common/styles/form.module.scss';
import loginPageClasses from '../Login/login.module.scss';
import { validation } from './validationSchema';
import { Input } from '../../components/FormElements/Input';

const ResetForm = (props) => (
  <Formik
    initialValues={{
      email: '',
    }}
    validationSchema={validation}
    onSubmit={values => {
      const { reset } = props;
      reset(values);
    }}
  >
    <Form className={`${formClasses.form} ${loginPageClasses.loginForm}`}>
      <Input
        id="email"
        name="email"
        placeholder="mail"
        type="text"
        autherror={props.authError}
      />
      <button type="submit" className={formClasses.authSubmit}>reset</button>
    </Form>
  </Formik>
);

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
  };
};

ResetForm.defaultProps = {
  authError: null,
};

ResetForm.propTypes = {
  reset: PropTypes.func.isRequired,
  authError: PropTypes.string,
};

const Enhanced = connect(mapStateToProps, { reset })(ResetForm);

export { Enhanced as ResetForm };
