import React, { Component, PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  /* static getDerivedStateFromProps(props, state) {
    console.log('Persons getDerivedStateFromProps');
    return state;
  } */

  /* componentWillReceiveProps(props) {
    console.log('Persons componentWillReceiveProps', props);
  } */

  /* shouldComponentUpdate(nextProps, nextState) {
    console.log('Persons shouldComponentUpdate');
    if(nextProps.persons !== this.props.persons || 
      nextProps.changed !== this.props.changed || 
      nextProps.clicked !== this.props.clicked) {
      return true;
    } else {
      return false;
    }
  } */

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

  componentWillUnmount() {
    console.log('Persons componentWillUnmount');
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