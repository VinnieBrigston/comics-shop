import React, { memo } from 'react';
import { Formik, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { resetPassword } from '../../store/actions';
import formClasses from '../../styles/form.module.scss';
import loginPageClasses from '../Login/login.module.scss';
import { validation } from './validationSchema';
import { Input } from '../../components/FormElements/Input';
import { getAuthErrorText } from '../../store/selectors';

const initialValues = {
  email: '',
};

export const ResetForm = memo((props) => {
  const dispatch = useDispatch();
  const authError = useSelector(getAuthErrorText);
  const { hideModal } = props;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={values => {
        dispatch(resetPassword(values, hideModal));
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

ResetForm.propTypes = {
  hideModal: PropTypes.func.isRequired,
};
