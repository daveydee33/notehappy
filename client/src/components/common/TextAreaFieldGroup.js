import React from 'react';

const TextAreaFieldGroup = ({
  input, // this brings in a lot of the values already, including the functions.
  placeholder,
  info,
  meta, // 'touched', 'error, etc.  this comes from react-form, validate function
}) => {
  const classNames = `field ${meta.error && meta.touched ? '' : ''}`;

  return (
    <div className={classNames}>
      <textarea {...input} placeholder={placeholder} />
      {info && <small>{info}</small>}
      {meta.error && meta.touched && (
        <div className="ui error message">{meta.error}</div>
      )}
    </div>
  );
};

export default TextAreaFieldGroup;
