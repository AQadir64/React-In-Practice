import React from "react";
import { useHistory } from "react-router-dom";
import { fakeAuth } from "./FakeAuth";
function AuthButton() {
  let history = useHistory();
  return fakeAuth.isauthenticated ? (
    <div>
      {" "}
      <h1>Welcome !!!</h1>{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => {
            history.push("/");
          });
        }}
      >
        signout
      </button>{" "}
    </div>
  ) : (
    <h3>Your are not login</h3>
  );
}

export default AuthButton;
