import React from 'react';
import { InputBase } from '@material-ui/core';

const TextForm = (props) => {
  const handleChange = (event) => {
    props.backgroundState(event.target.value);
  }

  return (
    <div>
      <div>{props.background}</div>
      #<InputBase defaultValue={props.background} onChange={handleChange}/>
    </div>
  )
}

export default TextForm;