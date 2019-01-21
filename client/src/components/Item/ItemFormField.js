import React from 'react';

export default ({ input, label, type }) => {
  return (
    <div>
      <label>{label}</label>

      {/* <input onChange={input.onChange} onBlur={input.onBlue} ...... etc..*/}
      <input {...input} type={type} />
    </div>
  );
};
