import React from "react";
import { useParams } from "react-router-dom";

function UrlParameter() {
  const { name } = useParams();
  return <div>{name}</div>;
}

export default UrlParameter;
