import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Eduard', age: 33},
      {name: 'Andrei', age: 31},
      {name: 'Carla', age: 29}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('I was clicked');
    // DON'T DO THIS this.state.persons[0].name = 'Marius';
    // The bellow method merges the object with the object already existent in the State
    this.setState({
      persons: [
        {name: newName, age: 33},
        {name: 'Andrei', age: 30},
        {name: newName, age: 29}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        {name: event.target.value, age: 33},
        {name: 'Andrei', age: 31},
        {name: 'Carla', age: 29}
      ]
    })
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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <div>
            {this.state.persons.map((elem) => {
              return <Person name={elem.name} age={this.age} />
            })}
          </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi! I'm a React App!</h1>
        
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Switch name</button> 
          {persons}
       </div>
    );
  }
}

export default App;
