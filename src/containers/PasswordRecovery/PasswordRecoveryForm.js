import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { recoverPassword } from '../../actions';
import formClasses from '../../common/styles/form.module.scss';
import loginPageClasses from '../Login/login.module.scss';
import { validation } from './validationSchema';
import { Input } from '../../components/FormElements/Input';

const PasswordRecoveryForm = (props) => {
  const { hash, recoverPassword } = props;

  const initialValues = useMemo(() => ({
    hash,
    password: '',
    confirmPassword: '',
  }), [hash]);

  const handleSubmit = (values) => {
    recoverPassword(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={validation}
      onSubmit={handleSubmit}
    >
      <Form className={`${formClasses.form} ${loginPageClasses.loginForm}`}>
        <Input
          id="password"
          name="password"
          placeholder="password"
          type="password"
        />
        <Input
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Please repeat you password"
          type="password"
        />
        <Input
          id="hash"
          name="hash"
          placeholder="secret hash"
          type="text"
          isHidden
        />
        <button type="submit" className={formClasses.authSubmit}>submit</button>
      </Form>
    </Formik>
  );
};

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
  };
};

PasswordRecoveryForm.defaultProps = {
  authError: '',
  hash: '',
};

PasswordRecoveryForm.propTypes = {
  recoverPassword: PropTypes.func.isRequired,
  authError: PropTypes.string,
  hash: PropTypes.string,
};

const Enhanced = connect(mapStateToProps, { recoverPassword })(PasswordRecoveryForm);

export { Enhanced as PasswordRecoveryForm };
