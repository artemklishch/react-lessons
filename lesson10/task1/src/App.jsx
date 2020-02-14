import React, { Component } from 'react';
import UserMenu from './UserMenu';
import UserProfile from './UserProfile';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="page">
        <header className="header">
          <UserMenu />
        </header>
        <UserProfile />
      </div>
    );
  }
};
export default App;