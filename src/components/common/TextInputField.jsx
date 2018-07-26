import React from 'react';
import PropTypes from 'prop-types';

const TextInputField = ({
  type,
  label,
  htmlFor,
  name,
  placeholder,
  value,
  onChange
}) => {
  return (
    <div className="form-group">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={type}
        name={name}
        className="form-control form-control-lg"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

TextInputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  htmlFor: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextInputField;
