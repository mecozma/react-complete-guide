import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log(`[App.js] Inside Constructor, ${props}`);
    this.state = {
      persons: [
        {id: 'dfgf',name: 'Eduard', age: 33},
        {id: ';lkj',name: 'Andrei', age: 31},
        {id: '5344',name: 'Carla', age: 29}
      ],
      showPersons: false
    }
  }
  componentWillMount() {
    console.log(`[App.js] inside componentWillMount()`);
  }
  componentDidMount() {
    console.log(`[App.js] Inside componentDidMount()`);
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(`[UPDATE App.js] Inside shouldComponentUpdate(), ${nextProps}, ${nextState}`);
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }
  componentWillUpdate(nextProps, nextState) {
    console.log(`[UPDATE App.js] Inside componentWillUpdate, ${nextProps}, ${nextState}`);
  }
  componentDidUpdate() {
    console.log(`[UPDATE App.js] Inside componentDidUpdate`);
  }
  // state = {
  //   persons: [
  //     {id: 'dfgf',name: 'Eduard', age: 33},
  //     {id: ';lkj',name: 'Andrei', age: 31},
  //     {id: '5344',name: 'Carla', age: 29}
  //   ],
  //   showPersons: false
  // }

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
    console.log(`[App.js] Inside render`);
    let persons = null;
    
    if (this.state.showPersons) {
      persons =  <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
    } 
    
    return (
        <div className={classes.App}>
            <button onClick={() => this.setState({showPersons: true})}>Show persons</button>
            <Cockpit 
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              clicked={this.togglePersonsHandler} />
            {persons}
        </div>
    );
  }
}

export default App;
