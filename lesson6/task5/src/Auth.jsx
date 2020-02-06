import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: true,
      markForSpinner: 0
    };
  }
  handleLogin = () => {
    this.setState({
      isOnline: true
    });

  };
  handleLogout = () => {
    this.setState({
      isOnline: false
    });
  };
  changeMarkForSpinner = () => {
    this.setState({
      markForSpinner: 1
    });
  };
  render() {
    if (this.state.markForSpinner === 0) {
      setTimeout(() => {
        this.changeMarkForSpinner();
      }, 2000);
      return <Spinner size={40} />
    }
    if (this.state.isOnline) {
      this.state.markForSpinner = 0;
      return <Login onLogin={this.handleLogout} />;
    } else {
      this.state.markForSpinner = 0;
      return <Logout onLogout={this.handleLogin} />;
    }
  }
}
export default Auth;