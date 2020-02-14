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
    const { name, location, avatar_url } = this.state.userData;
    return (
      <div className="page">
        <header className="header">
          <UserMenu
            name={name}
            avatar_url={avatar_url}
          />
        </header>
        <UserProfile
          name={name}
          location={location}
          avatar_url={avatar_url}
        />
      </div>
    );
  }
};
export default App;