import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Persons getSnapshotBeforeUpdate');
    return { message: 'Snapshot' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Persons componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('Persons componentWillUnmount');
  }

  render() {
    return this.props.persons.map((person, index) => {
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