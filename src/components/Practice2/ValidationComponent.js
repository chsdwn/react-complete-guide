import React from 'react';

const ValidationComponent = (props) => {
  let result;

  if (props.textLength > 6) {
    result = (
      <p>Text long enough!</p>
    );
  } else {
    result = (
      <p>Text too short!</p>
    );
  }
  
  return(
    <div>
      <p>Text length: {props.textLength}</p>
      {result}
    </div>
  );
}

export default ValidationComponent;