import React from 'react';

export default ({ input }) => {
  return (
    <div>
      {/* <input onChange={input.onChange} onBlur={input.onBlue} ...... etc..*/}
      <input {...input} />
    </div>
  );
};
