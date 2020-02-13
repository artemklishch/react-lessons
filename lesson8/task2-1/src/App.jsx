import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  render() {
    return (
      <>
        {
          this.state.visible &&
          <>
            <Clock location="London" offset={-2} />
            <Clock location="Kyiv" offset={0} />
            <Clock location="New York" offset={-7} />
          </>
        }
      </>
    );
  }
};
export default App;