import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Eduard', age: 33},
      {name: 'Andrei', age: 31},
      {name: 'Carla', age: 29}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi! I'm a React App!</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} >My Hobbies: JavaScript</Person >
      </div>
    );
  }
}

export default App;
