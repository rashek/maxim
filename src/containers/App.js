import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import WithClass from '../hoc/WithClassOld';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxillary';

import classes from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[app.js] constructor');
    // this.state ={
    //   persons: [
    //     { id: 1, name: 'rashek', age: 28 },
    //     { id: 2, name: 'atul', age: 22 },
    //     { id: 3, name: 'sajal', age: 30 }
    //   ],
    //   showpersons: false
    // };
  }
  state = {
    persons: [
      { id: 1, name: 'rashek', age: 28 },
      { id: 2, name: 'atul', age: 22 },
      { id: 3, name: 'sajal', age: 30 }
    ],
    showpersons: false,
    showCockpit: true,
    changeCounter: 0
  };
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }
  nameSwitcher = newName => {
    console.log('somthing');
    this.setState({
      persons: [
        { name: 'rasheiku', age: 500 },
        { name: 'atulLoverBoy', age: 420 },
        { name: newName, age: 0 }
      ]
    });
  };

  nameChanger = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  deletePerson = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  personsToggler = () => {
    const personsShow = this.state.showpersons;
    this.setState({ showpersons: !personsShow });
  };

  render() {
    console.log('[App.js] render()');
    let persons = null;

    if (this.state.showpersons) {
      persons = <Persons persons={this.state.persons} clicked={this.deletePerson} changed={this.nameChanger} />;
    }
    return (
      <Aux>
        <button onClick={() => this.setState({ showCockpit: false })}>Clean Cockpit</button>
        {this.state.showCockpit ? (
          <Cockpit
            Title={this.props.appTitle}
            showPersons={this.state.showpersons}
            personsLenght={this.state.persons.length}
            clicked={this.personsToggler}
          />
        ) : null}

        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);

/* <WithClass className={classes.App}>  */

/* </WithClass> */
