import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { register } from '../../actions';
import formClasses from '../../common/styles/form.module.scss';
import registrationClasses from './registration.module.scss';

const Form = (props) => {
  const formConfig = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: values => {
      const { register } = props;
      register(values);
    },
  });

  return (
    <form onSubmit={formConfig.handleSubmit} className={`${formClasses.form} ${registrationClasses.registrationForm}`}>
      <input
        id="name"
        name="name"
        placeholder="name"
        type="text"
        className={formClasses.authInput}
        onChange={formConfig.handleChange}
        value={formConfig.values.name}
      />
      <input
        id="email"
        name="email"
        placeholder="email"
        type="text"
        className={formClasses.authInput}
        onChange={formConfig.handleChange}
        value={formConfig.values.email}
      />
      <input
        id="password"
        name="password"
        placeholder="password"
        type="password"
        className={formClasses.authInput}
        onChange={formConfig.handleChange}
        value={formConfig.values.password}
      />
      <button type="submit" className={formClasses.authSubmit}>go</button>
    </form>
  );
};

export default connect(null, { register })(Form);

Form.propTypes = {
  register: PropTypes.func.isRequired,
};
