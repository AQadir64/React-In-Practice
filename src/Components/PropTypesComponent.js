import React, { Component } from "react";
import PropTypes from "prop-types";

class PropTypesComponent extends Component {
  render() {
    const email = this.props.email
    return <div>email : {email}</div>;
  }
}

class Main extends Component {
  render() {
    return (
      <div>
        <PropTypesComponent email={"a.qadir67@outlook.com"} />
      </div>
    );
  }
}

PropTypesComponent.propTypes = {
  email: PropTypes.string.isRequired
};

export default Main;
