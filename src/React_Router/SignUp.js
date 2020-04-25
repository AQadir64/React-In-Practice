import React, { Component, Fragment } from "react";
import { Prompt } from "react-router-dom";

class SignUp extends Component {
  state = {
    valid: "false",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      valid: true,
    });
  };
  render() {
    return (
      <Fragment>
        <Prompt
          when={this.state.valid !== true}
          message={"leaving this page will cause in data lose"}
        />
        <h1>Prompt message component</h1>
        <form>
          <input type="email" placeholder="email id" required /> <br></br>
          <input type="password" placeholder="password" required /> <br></br>
          <button type="submit" onClick={this.onSubmit}>
            Submit
          </button>
        </form>
      </Fragment>
    );
  }
}

export default SignUp;
