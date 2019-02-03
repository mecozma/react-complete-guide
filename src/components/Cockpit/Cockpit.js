import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Auxiliary';

const cockpit = (props) => {
  // Changing the <p> styless by adding classes dynamically
  let assignedClasses = [];

  let btnClasses = classes.Button;
  if (props.showPersons) {
    btnClasses = [classes.Button ,classes.Red].join(' ');
  }

  if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
  }
  if (props.persons.length < 2)  {
    assignedClasses.push(classes.bold);
  }
  return (
    <Aux>
          <h1>Hi! I'm a React App!</h1>
          <p className={assignedClasses.join(' ')}>This is a paragraph</p>
          <button
            className={btnClasses}
            onClick={props.clicked}>Toggle Persons List</button> 
            <button onClick={props.login}>Log in</button>
    </Aux>
  )
}

export default React.memo(cockpit);