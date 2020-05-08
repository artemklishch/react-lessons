import React, { Component } from 'react';
import moment from 'moment';


class Clock extends Component{
  constructor(props){
    super(props);
    this.state = {
      time: this.localeTime(props.offset)
    };
  }

  componentDidMount(){
    this.interval = setInterval(() => {
      this.setState({
        time: this.localeTime(this.props.offset)
      });
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  localeTime = (offset) => {
    const currentTime = new Date();
    const currentTimeWthOffset = currentTime.setHours(currentTime.getHours() + offset);
    return moment(currentTimeWthOffset).format('LTS');
  };
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