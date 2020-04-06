import React, { Component } from 'react';

class OddNumbers extends Component {
  shouldComponentUpdate = nextProps => nextProps.number % 2 !== 0;
  render() {
    return (
      <div className="number">
        <span className="number__title">Odd number</span>
        <span className="number__value">{this.props.number}</span>
      </div>
    );
  }
}
export default OddNumbers;