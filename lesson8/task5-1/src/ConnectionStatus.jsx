import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    textIsOnline: 'Online',
    classStyle: this.textIsOnline === 'Offline' 
      ? 'status' : 'status status_offline'
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
      textIsOnline: 'Online',
    });
  };
  handleOfflineHeader = () => {
    this.setState({
      textIsOnline: 'Offline',
    });
  };
  render() {
    return <div className={this.state.classStyle}>{this.state.textIsOnline}</div>;
  }

};
export default ConnectionStatus;