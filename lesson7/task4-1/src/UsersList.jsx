import React, { Component } from 'react';
import User from './User';
import Pagination from './Pagination';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0,
      startUser: 0,
    };
  }

  goPrev = () => {
    if (this.state.startUser !== 0) {
      this.setState({
        pageNum: this.state.pageNum - 1,
        startUser: this.state.startUser - 3,
      });
    }
  };
  goNext = () => {
    if (this.state.startUser < this.props.users.length - 1) {
      this.setState({
        pageNum: this.state.pageNum + 1,
        startUser: this.state.startUser + 3,
      });
    }
  };
  render() {
    const currentArray = (this.state.startUser + 3 > this.props.users.length)
      ? this.props.users.slice(this.state.startUser)
      : this.props.users.slice(this.state.startUser, this.state.startUser + 3);
    return (
      <>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={this.state.pageNum}
          totalItems={this.props.users.length}
          itemsPerPage={currentArray.length}
        />
        <ul className="users">
          {currentArray.map(user => <User key={user.id} {...user} />)}
        </ul>
      </>
    );
  }
};
export default UsersList;