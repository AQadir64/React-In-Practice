import React, { Component } from "react";

export default class ComponentRendering extends Component {
  render() {
    const foods = this.props.foods;
    console.log(foods);
    const elements = (
      <ol>
        {this.props.foods.map(val => {
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
}
