import React from 'react';
import PropTypes from 'prop-types';
import formClasses from '../../../common/styles/form.module.scss';

export const Input = (props) => {
  const { elementConfig,value,onChange } = props;
  return (
    <div className={formClasses.Input}>
      <label className={formClasses.label}>{props.label}</label>
      <input
        className={formClasses.input}
        {...elementConfig}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

Input.defaultProps = {
  value: '',
  type: 'text'
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string
};