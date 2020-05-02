import React from "react";

function Profile(props) {
  console.log(props);
  return (
    <div>
      <h1>user : {props.user}</h1>
    </div>
  );
}
export default Profile;
