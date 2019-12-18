import React from 'react';

const UserInput = (props) => {
  return (
    <div>
      <input type="text" onChange={props.changeUsernameReference} value={props.username} />
    </div>
  );
}

export default UserInput;