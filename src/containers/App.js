import React, { Component } from 'react';
import classes from './App.module.css';
import Person from '../components/Persons/Person/Person';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { name: 'Serdar', age: 18 },
      { name: 'Arife', age: 22 },
      { name: 'Ali', age: 27 }
    ],
    otherState: 'other state',
    showPersons: false
  }

  nameChangeHandler = (event, index) => {
    const person = {...this.state.persons[index]};
    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[index] = person;
    this.setState({ persons });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  }

  render() {
    let persons = null;
    let btnClass = '';

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={index}>
              <Person
                name={person.name}
                age={person.age}
                click={this.deletePersonHandler.bind(this, index)}
                changed={(event) => this.nameChangeHandler(event, index)} />
            </ErrorBoundary>
          })}
        </div>
      );

      btnClass = classes.red;
    }

    const assignedClasses = [];
    if(this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    const rnd = Math.random();
    if(rnd > 0.3) {
      throw new Error('some error');
    }

    return (
      <div className={classes.App}>
        <h1>Hi from React. Road to React Native</h1>
        <p className={assignedClasses.join(' ')}>Maybe there a little p</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>
          Toggle persons
        </button>
        {persons}
      </div>
    );
  }
} 

export default App;