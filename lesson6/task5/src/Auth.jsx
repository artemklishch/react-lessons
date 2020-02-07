import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
  state = {
    onlineSatus: true,
    markForSpinner: false
  };
  handleLogin = () => {
    this.changeMarkForSpinner();
    this.setState({ onlineSatus: true });
  };
  handleLogout = () => {
    this.changeMarkForSpinner();
    this.setState({ onlineSatus: false });
  };
  changeMarkForSpinner = () => {
    setTimeout(() => {
      this.setState({
        markForSpinner: false
      });
    }, 2000);
    this.setState({
      markForSpinner: true
    });
  };
  render() {
    if (this.state.markForSpinner) {
      return <Spinner size={40} />;
    }
    return this.state.onlineSatus
      ? <Login onLogin={this.handleLogout} />
      : <Logout onLogout={this.handleLogin} />
  };
};

export default Auth;