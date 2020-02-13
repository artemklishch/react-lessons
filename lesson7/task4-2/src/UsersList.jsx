import React, { Component } from 'react';
import User from './User';
import Pagination from './Pagination';

class UsersList extends Component {
  state = {
      currentPage: 0,
      itemsPerPage: 3,
  };
  goNext = () => {
      this.setState({
          currentPage: this.state.currentPage + 1,
      });
  };
  goPrev = () => {
      this.setState({
          currentPage: this.state.currentPage - 1,
      });
  };
  render() {
      const { users } = this.props;
      const { currentPage, itemsPerPage } = this.state;
      const start = currentPage * itemsPerPage;
      const usersToDisplay = users.slice(start, start + itemsPerPage);
      return (
          <div>
              <Pagination
                  goNext={this.goNext}
                  goPrev={this.goPrev}
                  currentPage={currentPage}
                  totalItems={users.length}
                  itemsPerPage={itemsPerPage}
              />
              <ul className="users">
                  {usersToDisplay.map(user => (
                      <User key={user.id} {...user} />
                  ))}
              </ul>
          </div>
      );
  }
}
export default UsersList;