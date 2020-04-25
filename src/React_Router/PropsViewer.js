import React from "react";

function PropsViewer({ match, location }) {
  return (
    <div>
      match :{match.url} <br /> key : {location.key}{" "}
    </div>
  );
}

export default PropsViewer;
