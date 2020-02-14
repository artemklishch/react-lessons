import React, { Component } from 'react';
import UserMenu from './UserMenu';
import UserProfile from './UserProfile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null
    }
  }
  componentDidMount(){
    this.fetchUserData(this.props.userId);
  };
  fetchUserData = userId => {
    return fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(userData => 
        this.setState({
          userData,
        })
      );
  };
  render() {
    if(!this.state.userData)return null;
    return (
      <div className="page">
        <header className="header">
          <UserMenu
            userData={this.state.userData}
          />
        </header>
        <UserProfile
          userData={this.state.userData}
        />
      </div>
    );
  }
};
export default App;