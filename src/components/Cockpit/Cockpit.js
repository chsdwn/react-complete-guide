import React, { useEffect, useRef } from 'react';

import classes from './Cockpit.module.css';

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log('Cockpit useEffect');
    toggleBtnRef.current.click();
    return () => {
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
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.clicked}>
        Toggle persons
      </button>
      <button onClick={props.login}>Log in</button>
    </div>
  );
};

export default React.memo(Cockpit);
