import React, { Component, Fragment, createRef } from "react";

class Input extends Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }

  onFocus = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <Fragment>
        <input ref={this.inputRef} />
      </Fragment>
    );
  }
}
export default Input;
