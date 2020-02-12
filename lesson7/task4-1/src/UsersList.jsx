import React, { Component } from 'react';
import User from './User';
import Pagination from './Pagination';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 1,
      elemsPerPage: 3
    };
  }
  currentArray = this.props.users.slice(0, 3);
  goPrev = () => {
    this.setState({
      pageNum: this.state.pageNum - 1,
    });
    const tempVal = this.state.pageNum * 3 - 3;
    this.currentArray = this.props.users.slice(0, tempVal).slice(-3);
  };
  goNext = () => {
    this.setState({
      pageNum: this.state.pageNum + 1,
    }); 
    const tempVal = this.state.pageNum * 3 + 3;
    this.currentArray = this.props.users.slice(0, tempVal).slice(-3);
  };

  render() {
    return (
      <>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={this.state.pageNum}
          totalItems={this.props.users.length}
          itemsPerPage={this.currentArray.length}
        />
        <ul className="users">
          {this.currentArray.map(user => <User key={user.id} {...user} />)}
        </ul>
      </>
    );
  }
};
export default UsersList;