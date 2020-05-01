import React from "react";
import { fakeAuth } from "./FakeAuth";
import { Route, Redirect } from "react-router-dom";
function PrivateRoute({ children, ...rest }) {
  console.log(rest);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return fakeAuth.isauthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

export default PrivateRoute;
