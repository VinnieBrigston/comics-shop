import React from 'react';
import PropTypes from 'prop-types';

export const Input = (props) => {
  const { placeholder,value,onChange,type,className } = props;
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  )
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