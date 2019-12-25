import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Auxillary';
import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
      <Aux>
        <p onClick={this.props.click}>
          I am {this.props.name} my age is {this.props.age}
        </p>
        <input type="text" onChange={this.props.Changer} value={this.props.name} />
        <p>{this.props.children}</p>
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
