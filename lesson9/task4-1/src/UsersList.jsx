import React, { Component } from 'react';
import Filter from './Filter';
import User from './User';

class UsersList extends Component {
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
      <>
        <Filter
          count={this.state.certainUsers.length}
          onChange={this.onChange} 
        />
        <ul className="users">
          {this.state.certainUsers
              .map(user => <User key={user.id} {...user} />)
          }
        </ul>
     </>  
    );
  }
};
export default UsersList;