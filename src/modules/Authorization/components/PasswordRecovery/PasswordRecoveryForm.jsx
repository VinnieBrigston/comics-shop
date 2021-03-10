import React, { memo, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { recoverPassword } from '../../store/actions';
import formClasses from '../../styles/form.module.scss';
import loginPageClasses from '../Login/login.module.scss';
import { validation } from './validationSchema';
import { Input } from '../../components/FormElements/Input';

export const PasswordRecoveryForm = memo((props) => {
  const dispatch = useDispatch();
  const { hash, hideModal } = props;
  const initialValues = useMemo(() => ({
    hash,
    password: '',
    confirmPassword: '',
  }), [hash]);
  const handleSubmit = (values) => {
    dispatch(recoverPassword(values, hideModal));
  };

  return (
    <Formik
      initialValues={{ ...initialValues, hash }}
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
});
PasswordRecoveryForm.defaultProps = {
  hash: '',
};

PasswordRecoveryForm.propTypes = {
  hash: PropTypes.string,
  hideModal: PropTypes.func.isRequired,
};
