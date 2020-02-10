import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    //isOnline: true
    isOnline: 'Online',
  };
  componentDidMount(){
    window.addEventListener('online', this.handleOnlineHeader);
    window.addEventListener('offline', this.handleOfflineHeader);
  }
  componentWillUnmount(){
    window.removeEventListener('online', this.handleOnlineHeader);
    window.removeEventListener('offline', this.handleOfflineHeader);
  }
  // handleOnlineHeader = () => {
  //   this.setState({
  //     isOnline: true
  //   });
  // };
  // handleOfflineHeader = () => {
  //   this.setState({
  //     isOnline: false
  //   });
  // };
  handleOnlineHeader = () => {
    const elem = document.querySelector('.status');
    elem.classList.remove('status_offline');
    this.setState({
      isOnline: 'Online'
    });
  };
  handleOfflineHeader = () => {
    const elem = document.querySelector('.status');
    elem.classList.add('status_offline');
    this.setState({
      isOnline: 'Offline'
    });
  };
  render() {
    // return (
    //   this.state.isOnline === true 
    //     ? <div className="status">Online</div>
    //     : <div className="status status_offline">Offline</div>
    // );
    return <div className="status">{this.state.isOnline}</div>
  }
};
export default ConnectionStatus;