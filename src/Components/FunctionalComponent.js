import React from "react";

function FunctionalComponent(props) {
  const foods = props.foods;
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
  return <div>{elements}</div>;
}

export default FunctionalComponent;
