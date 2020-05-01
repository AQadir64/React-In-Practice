import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { fakeAuth } from "./FakeAuth";

function LoginPage() {
  let history = useHistory();
  let location = useLocation();
  console.log(location.state.from.pathname)
  let from = location.state.from.pathname || "/" ;
  console.log(from)
  let login = () => {
    fakeAuth.authentcate(() => {
      history.replace(from);
    });
  };
  return (
    <div>
      <p>you must login before viewing the page at {from}</p>
      <button onClick={login}>login</button>
    </div>
  );
}
export default LoginPage;
