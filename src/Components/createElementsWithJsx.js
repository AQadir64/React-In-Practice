import React from "react";
import ReactDOM from "react-dom";

const foods = [
  {
    id: 1,
    name: "pizza",
    price: "13$"
  },
  {
    id: 2,
    name: "pasta",
    price: "8$"
  },
  {
    id: 3,
    name: "burger",
    price: "4$"
  },
  {
    id: 4,
    name: "softdrink",
    price: "2$"
  },
  {
    id: 5,
    name: "water",
    price: "1$"
  }
];

const elements = (
  <ol>
    {foods.map(val => {
      return (
        <li key={val.id}>
          {" "}
          {val.name} : {val.price}
        </li>
      );
    })}
  </ol>
);
ReactDOM.render(elements, document.getElementById("root"));
