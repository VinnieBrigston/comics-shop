import React, { memo } from 'react';
import { Formik, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { resetPassword } from '../../actions';
import formClasses from '../../common/styles/form.module.scss';
import loginPageClasses from '../Login/login.module.scss';
import { validation } from './validationSchema';
import { Input } from '../../components/FormElements/Input';
import { getAuthErrorText } from '../../reducers/selectors/selectors_auth';

const initialValues = {
  email: '',
};

export const ResetForm = memo(() => {
  const dispatch = useDispatch();
  const authError = useSelector(getAuthErrorText);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={values => {
        dispatch(resetPassword(values));
      }}
    >
      <Form className={`${formClasses.form} ${loginPageClasses.loginForm}`}>
        <Input
          id="email"
          name="email"
          placeholder="mail"
          type="text"
          authError={authError}
        />
        <button type="submit" className={formClasses.authSubmit}>reset</button>
      </Form>
    </Formik>
  );
});
