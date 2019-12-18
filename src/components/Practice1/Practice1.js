import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import './Practice1';

class Practice1 extends Component {
  state = {
    usernames: [
      { username: 'username1' }
    ]
  }

  changeUsername = (event) => {
    this.setState({
      usernames: [
        { username: event.target.value }
      ]
    });
  }

  render() {
    return (
      <div className="Practice1">
        <h1>Practice 1</h1>
        <UserOutput username="chsdwn"/>
        <UserOutput username={this.state.usernames[0].username} />
        <UserInput changeUsernameReference={this.changeUsername} username={this.state.usernames[0].username}/>
      </div>
    );
  }
}

export default Practice1;