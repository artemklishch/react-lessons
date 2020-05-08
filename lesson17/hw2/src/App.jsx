import React, { Component } from 'react';
import OddNumbers from './OddNumbers';
import EvenNumbers from './EvenNumbers';
import Numbers from './Numbers';

class App extends Component {
  state = {
    number: 0,
  };
  componentDidMount(){
    this.interval = setInterval(() => {
      this.setState({
        number: this.state.number + 1,
      });
    }, 1000);
  }
  render() {
    return (
      <div className="app">
        <OddNumbers number={this.state.number} />
        <EvenNumbers number={this.state.number} />
        <Numbers number={this.state.number} />
        <Numbers number={17} />
      </div>
    );
  }
};
export default App;