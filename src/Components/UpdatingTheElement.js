import React, { Component } from "react";

export default class UpdatingTheElement extends Component {
  render() {
    return (
      <div>
        {" "}
        <h2> It is {new Date().toLocaleTimeString()}</h2>
      </div>
    );
  }
}
