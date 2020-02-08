import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    isOnline: true
  };
  componentDidMount(){
    window.addEventListener('online', this.handleOnlineHeader);
    window.addEventListener('offline', this.handleOfflineHeader);
  }
  componentWillUnmount(){
    window.removeEventListener('online', this.handleOnlineHeader);
    window.removeEventListener('offline', this.handleOfflineHeader);
  }
  handleOnlineHeader = () => {
    this.setState({
      isOnline: true
    });
  };
  handleOfflineHeader = () => {
    this.setState({
      isOnline: false
    });
  };
  render() {
    const connect = this.state.isOnline === true
      ? 'Online'
      : 'Offline';
    return (
      <div className="status status_offline">{connect}</div>
    );
  }

};
export default ConnectionStatus;