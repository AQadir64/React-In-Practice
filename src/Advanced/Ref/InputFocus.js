import React, { Component, Fragment, createRef } from "react";
import Input from "./Input";

class InputFocus extends Component {
  constructor(props) {
    super(props);
    this.focusInputRef = createRef();
  }

  onClick = () => {
    this.focusInputRef.current.onFocus();
  };
  render() {
    return (
      <Fragment>
        <Input ref={this.focusInputRef} />
        <button onClick={this.onClick}>input focus</button>
      </Fragment>
    );
  }
}
export default InputFocus;
