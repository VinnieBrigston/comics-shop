import React, { memo, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { registerUser } from '../../actions';
import formClasses from '../../common/styles/form.module.scss';
import registrationClasses from './registration.module.scss';
import { validation } from './validationSchema';
import { Input } from '../../components/FormElements/Input';

export const RegistrationForm = memo(() => {
  const initialValues = useMemo(() => ({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }));
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={values => {
        dispatch(registerUser(values));
      }}
    >
      <Form className={`${formClasses.form} ${registrationClasses.registrationForm}`}>
        <Input
          id="name"
          name="name"
          placeholder="name"
          type="text"
        />
        <Input
          id="email"
          name="email"
          placeholder="email"
          type="text"
        />
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
        <button type="submit" className={formClasses.authSubmit}>go</button>
      </Form>
    </Formik>
  );
});
