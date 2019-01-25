import React from 'react';
import classes from './Person.css';

const person = (props) => {
  const randomNum = Math.random();
  if (randomNum > 0.7) {
    throw new Error (' Oh Nooo! Go back!');
  }
  return(
    <div className={classes.Person}>
      <p onClick={props.click}>I'm  {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
};

export default person;