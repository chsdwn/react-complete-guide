import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';
import Practice1 from './Practice1/Practice1';

/* function App() {
  return (
    <div className="App">
      <h1>Hi from emmet</h1>
    </div>
  );
}*/

/* const App = (props) => {
  // There is a new version to handle states like this but companies use this method rn.
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Selim' },
      { name: 'Mehmet' },
    ]
  });

  const [ otherState, setOtherState ] = useState({
    otherState: 'other state'
  })

  const switchNameHandler = (newName) => {
    //this.state.persons[0].name = 'Ali';
    setPersonsState(
      {
        persons: [
          { name: newName },
          { name: 'Veli' }
        ]
      }
    );
  };

  const nameChangedHandler = (event) => {
    setPersonsState(
      {
        persons: [
          { name: event.target.value },
          { name: 'Veli' }
        ]
      }
    );
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'hello from createElement'));
  return (
    <div className="App">
      <h1>Hello from class</h1>
      <p>A working p</p>
      <button style={style} onClick={() => switchNameHandler('Mahmut')}>Switch Name</button>  Not Recommended, Inefficient
      <Person name="Hulu" />
      <Person name="Hulusi" click={switchNameHandler.bind(this, 'Halil')}>Hobbies: Programming</Person>  Use this method
      <Person name={personsState.persons[0].name} changed={nameChangedHandler} />
      <Person name={personsState.persons[1].name} />
    </div>
  );
} */

class App extends Component {
  state = {
    persons: [
      { name: 'Serdar', age: 18 },
      { name: 'Arife', age: 22 }
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
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                      key={index}
                      name={person.name}
                      age={person.age}
                      click={this.deletePersonHandler.bind(this, index)}
                      changed={(event) => this.nameChangeHandler(event, index)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi from React. Road to React Native</h1>
        <p>Maybe there a little p</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
    );
  }
}

export default App;