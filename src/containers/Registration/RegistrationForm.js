import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { register } from '../../actions';
import formClasses from '../../common/styles/form.module.scss';
import registrationClasses from './registration.module.scss';
import { validation } from './validationSchema';
import { Input } from '../../components/FormElements/Input';

const RegistrationForm = (props) => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    }}
    validationSchema={validation}
    onSubmit={values => {
      const { register } = props;
      register(values);
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

RegistrationForm.propTypes = {
  register: PropTypes.func.isRequired,
};

const Enhanced = connect(null, { register })(RegistrationForm);

export { Enhanced as RegistrationForm };
