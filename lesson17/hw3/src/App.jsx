import React, { Component } from 'react';
import User from './User';

class App extends Component {
  state = {
    userId: 'facebook',
    userData: null,
  };

  setUser = userId => {
    this.setState({
      userId
    });
  }

  render() {
    return (
      <div className="page">
        <div className="page__content">
          <h1>Users</h1>
          <ul className="navigation">
            <li className="navigation__item">
              <button onClick={() => this.setUser('github')} href="/users/github">Github</button>
            </li>
            <li className="navigation__item">
              <button onClick={() => this.setUser('facebook')} href="/users/facebook">Facebook</button>
            </li>
          </ul>
        </div>
        <User userId={this.state.userId} />
      </div>
    );
  }
};
export default App;