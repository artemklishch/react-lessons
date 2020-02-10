import React, { Component } from 'react';
import Pagination from './Pagination';
import Filter from './Filter';

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
    return text;
  };
  render() {
    return (
      <div>
        <Pagination onChange={this.onChange} count={this.state.certainUsers.length} />
        <ul className="users">
          <Filter certainUsers={this.state.certainUsers} />
        </ul>
      </div>
    );
  }
};
export default UserList;