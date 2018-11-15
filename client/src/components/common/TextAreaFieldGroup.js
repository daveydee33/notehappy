import React from 'react';
import classnames from 'classnames';

const TextAreaFieldGroup = ({
  input, // this brings in a lot of the values already, including the functions.
  placeholder,
  value,
  // error,
  info,
  onChange,
  meta: { touched, error }, // this comes from react-form, validate function
}) => {
  return (
    <div className="form-group">
      <textarea
        {...input}
        className={classnames('form-control form-control-lg', {
          'is-invalid': touched && error,
        })}
        placeholder={placeholder}
        // value={value}
        // onChange={onChange}
      />
      {info && <small className="form-text text-muted">{info}</small>}

      {/* Need to add class 'is-invalid' if we want this error text to show up. */}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default TextAreaFieldGroup;
