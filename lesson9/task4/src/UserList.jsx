import React, { Component } from 'react';
import User from './User';

class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      certainUsers: props.users
    };
  }
  onChange = event => {
    const text = event.target.value.toLowerCase();
    if(!text){ this.setState({certainUsers: this.props.user});}
    const newArr = this.props.users
      .filter(user => user.name.toLowerCase().includes(text));
    this.setState({
      certainUsers: newArr
    });
  };
  render() {
    return (
      <div>
        <div className="filter">
        <span className="filter__count">{this.state.certainUsers.length}</span>
          <input type="text" className="filter__input" onChange={this.onChange} />
        </div>
        <ul className="users">
          {
            this.state.certainUsers
              .map(user => <User key={user.id} {...user} />)
          }
        </ul>
      </div>
    );
  }
};
export default UserList;