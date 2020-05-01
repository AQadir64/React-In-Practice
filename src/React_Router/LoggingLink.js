import React, { Component } from "react";
import { Link } from "react-router-dom";
class LoggingLink extends Component {
  handleClick = () => {
    let urlParts = this.props.to.split("/");
    const eid = urlParts[3];
    alert(`this event is fired by clicking the id : ${eid}`);
  };
  render() {
    return <Link {...this.props} onClick={this.handleClick}></Link>;
  }
}
export default LoggingLink;
