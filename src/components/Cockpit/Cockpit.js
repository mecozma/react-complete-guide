import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  // Changing the <p> styless by adding classes dynamically
  let assignedClasses = [];

  let btnClasses = '';
  if (props.showPersons) {
    btnClasses = classes.Red;
  }

  if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
  }
  if (props.persons.length < 2)  {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
          <h1>Hi! I'm a React App!</h1>
          <p className={assignedClasses.join(' ')}>This is a paragraph</p>
          <button
            className={btnClasses}
            onClick={props.clicked}>Toggle Persons List</button> 
        </div>
  )
}

export default cockpit;