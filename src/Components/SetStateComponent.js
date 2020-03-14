import React, { Component } from "react";

export default class SetStateComponent extends Component {
  state = {
    count: 1
  };
  onCountUp = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.onCountUp();
          }}
        >
          Update Count
        </button>
      </div>
    );
  }
}
