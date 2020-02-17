import React, { PureComponent } from 'react';

class Expand extends PureComponent {
  state = {
    isShown: true
  };

  onToggle = () => {
      this.setState({
        isShown: !this.state.isShown
      });
  };

  render() {
    return (
      <div className="app">
        <div className="expand border">
          <div className="expand__header">
            <span className="expand__title">{this.props.title}</span>
            <button className="expand__toggle-btn" onClick={this.onToggle}>
              {this.state.isShown 
                ? <i className="fas fa-chevron-up"></i>
                : <i className="fas fa-chevron-down"></i>
              }
            </button>
          </div>
          <div className="expand__content">
            <p>
              {
              this.state.isShown
                ? this.props.content
                : ''
              }
            </p>
          </div>
        </div>
      </div>
    );
  }
};
export default Expand;