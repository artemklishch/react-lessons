import React, { Component } from 'react';
import User from './User';

class App extends Component {
  state = {
    userData: null,
  };
  componentDidMount() {
    this.fetchGetData('facebook');
  }
  fetchGetData(userId) {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => {
        if (response.ok) return response.json();
        throw new Error('some error');
      })
      .then(data => this.setState({
        userData: data,
      }));
  }
  render() {
    const { userData } = this.state;
    if (!userData) return null;
    return (
      <div className="page">
        <div className="page__content">
          <h1>Users</h1>
          <ul className="navigation">
            <li className="navigation__item">
              <button onClick={() => this.fetchGetData('github')} href="/users/github">Github</button>
            </li>
            <li className="navigation__item">
              <button onClick={() => this.fetchGetData('facebook')} href="/users/facebook">Facebook</button>
            </li>
          </ul>
        </div>
        <User {...userData} />
      </div>
    );
  }
};
export default App;