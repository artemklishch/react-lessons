import React, { PureComponent } from 'react';
import Dialog from './Dialog';

class App extends PureComponent {
  state = {
    isOpen: false,
  };
  hideDialog = () => {
    this.setState({
      isOpen:false
    });
  };
  showDialog = () => {
    this.setState({
      isOpen:true
    });
  };
  render() {
    return (
      <div className="app">
        <button className="btn" onClick={this.showDialog}>Show dialog</button>
        <Dialog 
          isOpen={this.state.isOpen}
          onClose={this.hideDialog}
          title="some title"
        >
          <p>Some text</p>
        </Dialog>
      </div>
    );
  }
}
export default App;