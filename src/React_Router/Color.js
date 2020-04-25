import React from "react";
import { withRouter } from "react-router-dom";

function Color(props) {
  console.log(props);
  const styleSheet = {
    width: "100px",
    height: "100px",
    backgroundColor: props.color,
  };
  return <div style={styleSheet}></div>;
}
export default withRouter(Color);
