import React, { Component } from 'react';

class Search extends Component {
  state = { value: '' };
  handleChange = event => {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <form className="search">
        <input type="text" onChange={this.handleChange} value={this.state.value} className="search__input" />
        <button className="search__button">Search</button>
      </form>
    );
  }
}
export default Search;