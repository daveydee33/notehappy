import React from 'react';

const TextFieldGroup = ({
  input, // this brings in a lot of the values already, including the onChange, onSubmit, name, etc.  console log it to see.
  placeholder,
  label,
  info,
  meta, // 'touched', 'error'.. this comes from react-form, validate function
}) => {
  const classNames = `field ${meta.error && meta.touched ? '' : ''}`;

  return (
    <div className={classNames}>
      {label && <label>{label}</label>}
      <input {...input} placeholder={placeholder} />
      {info && <small>{info}</small>}
      {meta.error && meta.touched && (
        <div className="ui error message">{meta.error}</div>
      )}
    </div>
  );
};

TextFieldGroup.defaultProps = {
  type: 'text',
};

export default TextFieldGroup;
