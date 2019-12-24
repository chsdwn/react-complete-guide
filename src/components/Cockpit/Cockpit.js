import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
  useEffect(() => {
    console.log('Cockpit useEffect');
    // Http request
    const timer = setTimeout(() => {
      alert('Saved');
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log('Cockpit cleanup work in useEffect');
    }
  }, []); // [] = Just run once when component runs.

  useEffect(() => {
    console.log('Cockpit 2nd useEffect');
    return () => {
      console.log('Cockpit cleanup work in 2nd useEffect');
    }
  });

  const assignedClasses = [];
  let btnClass = '';

  if(props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if(props.personsLength <= 1) {
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

export default React.memo(Cockpit);
