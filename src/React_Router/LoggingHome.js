import React from "react";
import { Route } from "react-router-dom";
import DefaultLoggingComponent from "./DefaultLoggingComponent";
import LoggingLink from "./LoggingLink";

function LoggingHome({ match }) {
  return (
    <div>
      <h1>Logging Home!</h1>
      <h2>
        <LoggingLink style={{ color: "black" }} to={`${match.url}/lorem/1`}>
          link 1
        </LoggingLink>
        <LoggingLink style={{ color: "black" }} to={`${match.url}/lorem/2`}>
          link 2
        </LoggingLink>
      </h2>
      <Route path={match.url} component={DefaultLoggingComponent} exact />
    </div>
  );
}
export default LoggingHome;
