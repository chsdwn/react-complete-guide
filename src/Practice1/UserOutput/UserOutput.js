import React from 'react';

const UserOutput = (props) => {
  const style = {
    backgroundColor: 'white',
    border: '1px solid grey',
    textAlign: 'center',
    marginBottom: '15px'
  };

  return (
    <div style={style}>
      <p>First p</p>
      <p>Second p</p>
      <h3>Username: {props.username}</h3>
    </div>
  );
}

export default UserOutput;