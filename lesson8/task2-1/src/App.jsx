import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     visible: true,
  //   };
  //   //this.toggle = this.toggle.bind(this);
  // }
  state = {
    visible: true,
  };
  // toggle() {
  //   this.setState({
  //     visible: !this.state.visible
  //   });
  // };

  render() {
    return (
      this.state.visible &&
      <>
        <Clock location="London" offset={-2} />
        <Clock location="Kyiv" offset={0} />
        <Clock location="New York" offset={-7} />
      </>

      // <>
      //   {/* <button onClick={this.toggle}>Toggle</button> */}
      //   {
      //     this.state.visible &&
      //     <div className="forClocks">
      //       <Clock location="London" offset={-2} />
      //       <Clock location="Kyiv" offset={0} />
      //       <Clock location="New York" offset={-7} />
      //     </div>
      //   }
      // </>
    );
  }
};
export default App;