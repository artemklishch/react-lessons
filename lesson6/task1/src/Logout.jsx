import React from 'react';
import './index.scss';
import Auth from './Auth';

class Logout extends Auth{
  constructor(props){
    super(props);
  }
  handleLogout = () => {
  super.handleLogout;
  };
  render(){
    return (
      <button className="btn logout" onClick={this.handleLogout}>Logout</button>
    );
  }
}
export default Logout;