import React from 'react';
import './index.scss';
import Auth from './Auth';

class Login extends Auth{
  constructor(props){
    super(props);
  }
  handleLogin = () => {
    super.handleLogin;
  };
  render(){
    return (
      <button className="btn login" onClick={this.handleLogin}>Login</button>
    );
  }
}
export default Login;