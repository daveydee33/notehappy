import React from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({
  input, // this brings in a lot of the values already, including the onChange, onSubmit, name, etc.  console log it to see.
  name,
  placeholder,
  value,
  label,
  // error,
  info,
  type,
  onChange,
  disabled,
  meta: { touched, error }, // this comes from react-form, validate function
}) => {
  // let classname;

  // if (touched && error) {
  //   classname = 'form-control form-control-lg is-invalid';
  // } else {
  //   classname = 'form-control form-control-lg';
  // }

  return (
    <div className="form-group">
      <input
        {...input}
        // type={type}
        className={classnames('form-control form-control-lg', {
          'is-invalid': touched && error,
        })}
        placeholder={placeholder}
        // name={name}  // these come off the {..input} already
        // value={value} // these come off the {..input} already
        // onChange={onChange}
        disabled={disabled}
      />
      {info && <small className="form-text text-muted">{info}</small>}

      {/* Need to add class 'is-invalid' if we want this error text to show up. */}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextFieldGroup.defaultProps = {
  type: 'text',
};

export default TextFieldGroup;
