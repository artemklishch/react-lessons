import React, { Component } from 'react';
import User from './User';
import Pagination from './Pagination';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 1,
    };
  }
  goPrev = () => {
      this.setState({
        pageNum: this.state.pageNum - 1,
      });
  };
  goNext = () => {
      this.setState({
        pageNum: this.state.pageNum + 1,
      });
      
  };
  render() {
    const currentArray = this.props.users.slice(this.state.pageNum*3-3, this.state.pageNum*3);
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