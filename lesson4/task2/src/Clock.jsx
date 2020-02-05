import React, { Component } from 'react';

import './clock.scss';

class Clock extends Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    <div className="clock">
      <p className="clock__location"></p>
      <p className="clock__time"></p>
    </div>
  }
}
export default Clock;