import React from "react";
import Spinner from "./Spinner";

function withDataLoader(Component, url) {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: url,
        isShown: false,
      };
    }

    componentDidMount() {
      fetch(this.state.data)
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            data: data,
            isShown: true
          });
        });
    }
    render() {
      return !this.state.isShown ? (
        <Spinner size={20} />
      ) : (
        <Component data={this.state.data} />
      );
    }
  }
  return NewComponent;
}
export default withDataLoader;
