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

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        {name: event.target.value, age: 33},
        {name: 'Andrei', age: 31},
        {name: 'Carla', age: 29}
      ]
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
            {this.state.persons.map((person, index) => {
              return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} />
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
