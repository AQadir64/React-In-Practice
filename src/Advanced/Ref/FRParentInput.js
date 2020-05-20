import React, { Component, Fragment, createRef } from "react";
import FRInput from "./FRInput";

class FRParentInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
  }

  handleClick = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <Fragment>
        <FRInput ref={this.inputRef} />
        <button onClick={this.handleClick}>FR Focus Input</button>
      </Fragment>
    );
  }
}
export default FRParentInput;
