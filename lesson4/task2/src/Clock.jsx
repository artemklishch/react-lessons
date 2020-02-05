import React, { Component } from 'react';
import moment from 'moment';
import './clock.scss';


const localeTime = (offset) => {
  const currentTime = new Date();
  const currentTimeWthOffset = currentTime.setHours(currentTime.getHours() + offset);
  return moment(currentTimeWthOffset).format('LTS');
};

class Clock extends Component{
  constructor(props){
    super(props);
    this.state = {
      time: localeTime(props.offset)
    };
    setInterval(() => {
      this.setState({
        time: localeTime(props.offset)
      });
    }, 1000);
  }
  render(){
    return (
      <div className="clock">
        <p className="clock__location">{this.props.location}</p>
        <p className="clock__time">{this.state.time}</p>
      </div>
    );
  }
}
export default Clock;