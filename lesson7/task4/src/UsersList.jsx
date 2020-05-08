import React, { Component } from 'react';
import User from './User';
import Pagination from './Pagination';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0,
      startUser: 0,
      disabled1: true,
      disabled2: props.users.length <= 3 ? true : false,
      prevArrow:'',
      nextArrow: props.users.length <= 3 ? '' : '→',
    };
  }

  goPrev = () => {
    if (this.state.startUser !== 0) {
      this.setState({
        pageNum: this.state.pageNum - 1,
        startUser: this.state.startUser - 3,
        disabled2:false,
        nextArrow:'→'
      });
    }
    if (this.state.pageNum === 1) {
      this.setState({
        disabled1: true,
        prevArrow:''
      });
    }
  };
  goNext = () => {
    if (this.state.startUser < this.props.users.length - 1) {
      this.setState({
        pageNum: this.state.pageNum + 1,
        startUser: this.state.startUser + 3,
        disabled1:false,
        prevArrow:'←'
      });
    }
    if ((this.props.users.length - this.state.startUser) <= 5 || (this.props.users.length - this.state.startUser) === 6) {
      this.setState({
        disabled2:true,
        nextArrow:''
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
          disabled1={this.state.disabled1}
          disabled2={this.state.disabled2}
          prevArrow={this.state.prevArrow}
          nextArrow={this.state.nextArrow}
        />
        <ul className="users">
          {currentArray.map(user => <User key={user.id} {...user} />)}
        </ul>
      </>
    );
  }
};
export default UsersList;