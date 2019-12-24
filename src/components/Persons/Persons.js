import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  /* static getDerivedStateFromProps(props, state) {
    console.log('Persons getDerivedStateFromProps');
    return state;
  } */

  /* componentWillReceiveProps(props) {
    console.log('Persons componentWillReceiveProps', props);
  } */

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Persons shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Persons getSnapshotBeforeUpdate');
    return { message: 'Snapshot' };
  }

  /* componentWillUpdate() {
  } */

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Persons componentDidUpdate');
    console.log(snapshot);
  }

  render() {
    return this.props.persons.map((person, index) => {
      //console.log('Persons.js rendering;');
      return(
        <Person
          key={index}
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event, index)} />
      );
    });
  }
}

export default Persons;