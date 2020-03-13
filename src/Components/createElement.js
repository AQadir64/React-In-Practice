import React from "react";
import ReactDOM from "react-dom";

const persons = [
  {
    name: "Ali"
  },
  {
    name: "Kazim"
  },
  {
    name: "Shaheer"
  },
  {
    name: "Asad"
  }
];

// const element = React.createElement(
//   "ol",
//   null,
//   React.createElement("li", null, "Ali"),
//   React.createElement("li", null, "Kazim"),
//   React.createElement("li", null, "Shaheer"),
//   React.createElement("li", null, "Asad")
// );

//using map function
const element = React.createElement(
  "ol",
  null,
  persons.map(x => {
    return React.createElement("li", { key: x.name }, x.name);
  })
);
ReactDOM.render(element, document.getElementById("root"));
