import React, { Component } from "react";

class ControledComponent extends Component {
  state = {
    query: ""
  };

  onUpdate = query => {
    this.setState(() => ({
      query: query
    }));
  };
  render() {
    return (
      <div>
        <input
          onChange={event => {
            this.onUpdate(event.target.value);
          }}
        />
        output :{this.state.query}
      </div>
    );
  }
}
export default ControledComponent;
