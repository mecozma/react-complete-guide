import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi! I'm a React App!</h1>
        <Person name="Eduard" age="33" />
        <Person name="Andrei" age="31"/>
        <Person name="Carla" age="29" />
      </div>
    );
  }
}

export default App;
