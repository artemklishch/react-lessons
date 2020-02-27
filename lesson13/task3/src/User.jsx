import React, { Component } from 'react';

class User extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: ''
    }
  }
  
  componentDidMount(){
    this.fetchUserData(this.props.match.params.userId);
  }

  // shouldComponentUpdate(){
  //   return this.props.match.params.userId !== this.state.user.login;
  // }

  componentDidUpdate(prevProps, prevState){
    // console.log(prevState.user.login);
    //console.log(prevProps.match.params.userId);
    if(this.props.match.params.userId !== this.state.user.login){
      this.fetchUserData(this.props.match.params.userId);
    }
  }

  fetchUserData = userId => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(userData =>
        this.setState({ user: userData })
      );
  };

  render() {
    const { avatar_url, name, location } = this.state.user;
    return (
      <div className="user">
        <img alt="User Avatar" src={avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
};
export default User;