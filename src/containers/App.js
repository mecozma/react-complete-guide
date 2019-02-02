import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

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
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
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
      this.setState( (prevState, props) =>{
        return {
          persons: persons,
          toggleClicked: prevState.toggleClicked + 1
        }
      });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState (
      {
        showPersons: !doesShow
      }
    )
  }

  loginHandler = () => {
    this.setState({authenticated: true});
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
      <Aux>
            <button onClick={() => this.setState({showPersons: true})}>Show persons</button>
            <Cockpit 
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              login={this.loginHandler}
              clicked={this.togglePersonsHandler} />
              <AuthContext.Provider value={this.state.authenticated}>
                {persons}
              </AuthContext.Provider>
        </Aux>
    );
  }
}

export default withClass(App, classes.App);
