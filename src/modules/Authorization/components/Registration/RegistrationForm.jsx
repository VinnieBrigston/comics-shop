import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { registerUser } from '../../store/actions';
import formClasses from '../../styles/form.module.scss';
import registrationClasses from './registration.module.scss';
import { validation } from './validationSchema';
import { Input } from '../../components/FormElements/Input';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const RegistrationForm = memo((props) => {
  const dispatch = useDispatch();
  const { hideModal } = props;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={values => {
        dispatch(registerUser(values, hideModal));
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

RegistrationForm.propTypes = {
  hideModal: PropTypes.func,
};
