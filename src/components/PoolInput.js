import React from 'react';
import { Input } from 'reactstrap';
const PoolInput = ({option,placeholder,id,handleChange}) => {
  return (
    <React.Fragment>
      <Input
        id={id}
        placeholder={placeholder}
        value={option}
        onChange={handleChange}
        required
      />{' '}
      <br />
    </React.Fragment>
  );
};

export default PoolInput;
