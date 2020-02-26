import React, { Component } from 'react';

class User extends Component {
  state = {
    avatar_url: '',
    name: '',
    location: ''
  }
  render() {
    fetch(`https://api.github.com/users/${this.props.match.params.userId}`)
      .then(response => response.json())
      .then(userData =>
        this.setState({
          avatar_url: userData.avatar_url,
          name: userData.name,
          location: userData.location,
        })
      );
    return (
      <div className="user">
        <img alt="User Avatar" src={this.state.avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{this.state.name}</span>
          <span className="user__location">{this.state.location}</span>
        </div>
      </div>
    );
  }


  // return (
  //   <div className="user">
  //     <img alt="User Avatar" src="https://avatars1.githubusercontent.com/u/9919?v=4" className="user__avatar" />
  //     <div className="user__info">
  //       <span className="user__name">GitHub</span>
  //       <span className="user__location">San Francisco,CA</span>
  //     </div>
  //   </div>
  // );
};
export default User;