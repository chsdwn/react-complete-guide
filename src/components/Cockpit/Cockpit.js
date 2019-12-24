import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
  useEffect(() => {
    console.log('Cockpit useEffect');
    // Http request
  });

  const assignedClasses = [];
  let btnClass = '';

  if(props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if(props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  if(props.showPersons) {
    btnClass = classes.red;
  }

  return(
    <div className={classes.Cockpit}>
      <h1>Hi from React. Road to React Native</h1>
      <p className={assignedClasses.join(' ')}>Maybe there a little p</p>
      <button
        className={btnClass}
        onClick={props.clicked}>
        Toggle persons
      </button>
    </div>
  );
};

export default Cockpit;