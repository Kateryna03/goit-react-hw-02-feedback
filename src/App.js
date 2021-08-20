import React, { Component } from 'react';
import Expresso from './components/Expresso/Expresso';
import Buttons from './components/Buttons';
import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    const textButton = e.target.textContent;
    // console.log(textButton);

    this.setState(prevState => ({
      [textButton]: prevState[textButton] + 1,

      // good: prevState.good + 1,
      // neutral: prevState.neutral + 1,
      // bad: prevState.bad + 1,
    }));
    // console.log([textButton]);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const name = Object.keys(this.state);

    return (
      <div className="App">
        <h1>PLEASE LEAVE FEEDBACK</h1>
        <ul>
          {name.map((item, index) => (
            <li key={index}>
              <Buttons
                state={this.state}
                handleIncrement={this.handleIncrement}
                name={item}
              />
            </li>
          ))}
        </ul>
        <h2>Statistics</h2>
        <Expresso good={good} neutral={neutral} bad={bad} />
      </div>
    );
  }
}
export default App;
