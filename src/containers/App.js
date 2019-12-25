import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import Aux from '../hoc/Auxiliary';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App.js constructor');
  }

  state = {
    persons: [
      { name: 'Serdar', age: 18 },
      { name: 'Arife', age: 22 },
      { name: 'Ali', age: 27 }
    ],
    otherState: 'other state',
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('App.js getDerivedStateFromProps', props);
    return state;
  }

  /* componentWillMount() {
    console.log('App.js componentWillMount');
  } */

  componentDidMount() {
    console.log('App.js componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('App shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('App componentDidUpdate');
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
    console.log('App.js render');
    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />;
    }

    return (
      <Aux>
        <button onClick={() => {
          this.setState({showCockpit: false });
          }}>Remove Cockpit</button>
        {this.state.showCockpit ? (
        <Cockpit
          personsLength={this.state.persons.length}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}/>
        ) : null}
        {persons}
      </Aux>
    );
  }
}

export default WithClass(App, classes.App);
