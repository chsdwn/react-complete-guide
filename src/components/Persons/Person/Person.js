import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.module.css';
import Aux from '../../../hoc/Auxiliary';
import WithClass from '../../../hoc/WithClass';

class Person extends Component {
  constructor(props) {
    super(props);
    // New version
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    return (
      <Aux>
        {this.props.isAuth ? <p>Authenticated</p> : <p>Please log in</p>}
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input 
          type="text"
          // ref={(inputEl) => {this.inputElement = inputEl}} // Older version
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name} />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default WithClass(Person, classes.Person);