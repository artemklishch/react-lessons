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
    return (
      this.state.isOnline === true 
        ? <div className="status">online</div>
        : <div className="status status_offline">offline</div>
    );
  }

};
export default ConnectionStatus;