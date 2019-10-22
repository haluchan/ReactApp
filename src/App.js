import React, { useState } from 'react';
import './App.css';
import Person from "./Person/Person.js";
class App extends Component {
  state = {
      persons:[
        { name: 'mac', age: 28},
        { name: 'alex', age: 23},
        { name: 'pei', age: 22},
      ]
    };
  switchNameHandler = () => {  //要用arrow function
    // console.log('ckicked')
    //DO DO THIS: this.state.persons[0].name = 'apple'
    this.setState({
      persons:[
        { name: 'apple', age: 28},
        { name: 'alex', age: 23},
        { name: 'pei', age: 30},
      ]
    })
  }
  render() {
    return (
      <div className='App'>
        <h1>I'm a react app</h1>
        <p>
          <button onClick={this.switchNameHandler}>switch name</button>
        </p>
        <Person name={ this.state.persons[0].name } age={ this.state.persons[0].age }> hello </Person>
        <Person name={ this.state.persons[1].name } age={ this.state.persons[1].age }/>
        <Person name={ this.state.persons[2].name } age={ this.state.persons[2].age }/>
      </div>
    )
    // return (
    //   React.createElement('div', { className:'App'}, React.createElement('h1',null ,'Hi I\'m a react app'))
    // )
  }
}

export default App;
