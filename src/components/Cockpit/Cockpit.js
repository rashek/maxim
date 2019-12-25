import React, { useEffect } from 'react';

import classes from './Cockpit.module.css';

function Cockpit(props) {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  });

  let btnclass = '';
  const classNew = [];

  if (props.showPersons) {
    btnclass = classes.Red;
  }

  if (props.personsLenght <= 2) {
    classNew.push(classes.red);
  }

  if (props.personsLenght <= 1) {
    classNew.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.Title}</h1>
      <h1> this is class name{classNew}</h1>
      <p className={classNew.join(' ')}>This is really working</p>
      <button className={btnclass} onClick={props.clicked}>
        persons Display
      </button>
    </div>
  );
}

export default React.memo(Cockpit);
