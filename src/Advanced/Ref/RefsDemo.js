import React, { Component, Fragment, createRef } from "react";

class InputField extends Component {
  constructor() {
    super();
    this.inputRef = createRef();
    this.cbRef = null;
    this.setcbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    if (this.cbRef) {
      this.cbRef.focus();
    }
    // console.log(this.inputRef);
    // this.inputRef.current.focus();
  }

  handleClick = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <Fragment>
        <input ref={this.inputRef} />
        <input ref={this.setcbRef} />
        <button onClick={this.handleClick}>Click</button>
      </Fragment>
    );
  }
}

function RefsDemo() {
  return <InputField />;
}

export default RefsDemo;
