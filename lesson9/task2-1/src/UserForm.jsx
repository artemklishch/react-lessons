import React, { Component } from 'react';

class UserForm extends Component{
  state = {
    name: '',
    student: '',
    occupation: 'London',
    about: ''
  };

  handledChange = event => {
    const { name, value, type, checked } = event.target;
    const val = type === 'checkbox'
      ? checked
      : value;
    this.setState({
      [name]: val
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render(){
    return (
      <form className="login-form" onSubmit={this.onSubmit}>
        <h1 className="form-title">Profile</h1>
        <div className="form-control">
          <label className="form-label" htmlFor="name">Name</label>
          <input className="form-input" type="text" id="name" name="name" onChange={this.handledChange} value={this.state.value} />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="student">Student</label>
          <input className="form-input" type="checkbox" id="student" name="student" onChange={this.handledChange} value={this.state.value} />
        </div>
        <div className="form-control">
          <label className="form-label" id="occupation" htmlFor="occupation">Occupation</label>
          <select name="occupation" className="form-input" onChange={this.handledChange} value={this.state.value}>
            <option value={this.state.occupation}>London</option>
            <option value={this.state.occupation}>New York</option>
            <option value={this.state.occupation}>Sidney</option>
            <option value={this.state.occupation}>Berlin</option>
          </select>
        </div>
        <div className="form-control">
          <label className="form-label" id="about" htmlFor="about">About</label>
          <textarea name="about" className="form-input" onChange={this.handledChange} value={this.state.value} />
        </div>
        <button className="submit-button" type="submit">Submit</button>
      </form>
    );
  }
}
export default UserForm;