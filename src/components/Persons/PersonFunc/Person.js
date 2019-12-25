import React from 'react';
import classes from './Person.module.css';

function Person(props) {
  console.log('[Person.js] rendering...');
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I am {props.name} my age is {props.age}
      </p>
      <input type="text" onChange={props.Changer} value={props.name} />
      <p>{props.children}</p>
    </div>
  );
}

export default Person;
