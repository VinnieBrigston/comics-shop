import React, { memo, useMemo } from 'react';
import { Formik, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { logInUser } from '../../actions';
import formClasses from '../../common/styles/form.module.scss';
import loginPageClasses from './login.module.scss';
import { validation } from './validationSchema';
import { Input } from '../../components/FormElements/Input';
import { getAuthErrorText } from '../../reducers/selectors/selectors_auth';

export const LoginForm = memo(() => {
  const initialValues = useMemo(() => ({
    email: '',
    password: '',
  }), []);
  const dispatch = useDispatch();
  const authError = useSelector(getAuthErrorText);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={values => {
        dispatch(logInUser(values));
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
