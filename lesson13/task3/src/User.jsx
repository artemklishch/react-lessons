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

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.user.login !== this.props.match.params.userId) {
  //     this.fetchUserData(this.props.match.params.userId);
  //   }
  // }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId !== this.props.match.params.userId) {
      this.fetchUserData(this.props.match.params.userId);
    }
  }

  componentWillUnmount(){
    this.setState({
      user: ''
    });
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