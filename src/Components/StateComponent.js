import React, { Component } from "react";

export default class StateComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Shaheer Imam"
    };
  }

  render() {
    return <div>{this.state.name}</div>;
  }
}
