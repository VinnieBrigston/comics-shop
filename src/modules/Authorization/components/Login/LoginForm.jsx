import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { logInUser } from '../../store/actions';
import formClasses from '../../styles/form.module.scss';
import loginPageClasses from './login.module.scss';
import { validation } from './validationSchema';
import { Input } from '../../components/FormElements/Input';
import { getAuthErrorText } from '../../store/selectors';

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = memo((props) => {
  const dispatch = useDispatch();
  const authError = useSelector(getAuthErrorText);
  const { hideModal } = props;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={values => {
        dispatch(logInUser(values, hideModal));
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
          authError={authError}
        />
        <button type="submit" className={formClasses.authSubmit}>yes</button>
      </Form>
    </Formik>
  );
});

LoginForm.propTypes = {
  hideModal: PropTypes.func.isRequired,
};
