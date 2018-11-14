import React from 'react';

const TextAreaFieldGroup = ({
  input, // this brings in a lot of the values already, including the functions.
  placeholder,
  value,
  error,
  info,
  onChange,
}) => {
  return (
    <div className="form-group">
      <textarea
        {...input}
        className="form-control form-control-lg"
        placeholder={placeholder}
        // value={value}
        // onChange={onChange}
      />
      {info && <small className="form-text text-muted">{info}</small>}

      {/* Need to add class 'is-invalid' if we want this error text to show up. */}
      {/* {error && <div className="invalid-feedback">{error}</div>} */}
    </div>
  );
};

export default TextAreaFieldGroup;
