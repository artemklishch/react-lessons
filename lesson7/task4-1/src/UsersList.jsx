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

  getSubarray = (pos, array) => {
    if (pos > array.length) {
      const numOfThreeSubArrs = Math.trunc(array.length / 3);
      const restNumber = array.length - numOfThreeSubArrs*this.state.pageNum;
      const arr = array.slice(0, pos).slice(-restNumber); 
      return arr;
    }
    const arr = array.slice(0, pos);
    if (arr.length <= array.length) {
      return arr.slice(-3);
    } else{
      const difference = arr.length - array.length;
     return arr.slice(-difference);
    }
  }

  render() {
    const currentArray = this.getSubarray(this.state.pageNum * 3, this.props.users);
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