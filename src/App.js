import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      {id: 'dfgf',name: 'Eduard', age: 33},
      {id: ';lkj',name: 'Andrei', age: 31},
      {id: '5344',name: 'Carla', age: 29}
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
      // const persons = this.state.persons.slice(); using the .slice methos we won't mutate the state
      // spread operator gets a copy of the array, as .slice method does above.
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState (
      {
        showPersons: !doesShow
      }
    )
  }

  render() {
    let persons = null;
    let btnClasses = '';
    if (this.state.showPersons) {
      persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <ErrorBoundary key={person.id}>
                <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)} /></ErrorBoundary>
            })}
          </div>
      );
      btnClasses = classes.Red;
    } 
    // Changing the <p> styless by adding classes dynamically
    let assignedClasses = [];

    if (this.state.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (this.state.persons.length < 2)  {
      assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.App}>
          <h1>Hi! I'm a React App!</h1>
          <p className={assignedClasses.join(' ')}>This is a paragraph</p>
          <button
            className={btnClasses}
            onClick={this.togglePersonsHandler}>Toggle Persons List</button> 
            {persons}
        </div>
    );
  }
}

export default App;
