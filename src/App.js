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

  render() {
    return (
      <div className="App">
        <h1>Hi! I'm a React App!</h1>
        
        <button onClick={() => this.switchNameHandler('Moris')}>Switch name</button> 
        <Person
         name={this.state.persons[0].name} age={this.state.persons[0].age}
         changed={this.nameChangedHandler} />
        <Person
         name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person
         name={this.state.persons[2].name} age={this.state.persons[2].age}
         /*the annonymus function passed to onClick methid above could be inefficient sometimes
          *because of that bind syntax is preferable
         */
         click={this.switchNameHandler.bind(this, 'Miranda')} >My Hobbies: JavaScript</Person >
      </div>
    );
  }
}

export default App;
