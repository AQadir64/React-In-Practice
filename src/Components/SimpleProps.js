import React, { Component } from "react";
import ComponentRendering from "./ComponentRendering";
import UpdatingTheElement from "./UpdatingTheElement";
import FunctionalComponent from "./FunctionalComponent";
import StateComponent from "./StateComponent";
import SetStateComponent from "./SetStateComponent";
import Main from "./PropTypesComponent";
import ControledComponent from "./ControledComponent";
export default class SimpleProps extends Component {
  render() {
    return (
      <div>
        <Main />
        <ControledComponent />
        <SetStateComponent />
        <StateComponent />
        <UpdatingTheElement />
        <FunctionalComponent
          foods={[
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
            }
          ]}
        />
        <ComponentRendering
          foods={[
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
          ]}
        />
        <ComponentRendering
          foods={[
            {
              id: 4,
              name: "tea",
              price: "2$"
            },
            {
              id: 5,
              name: "yogurt",
              price: "3.2$"
            }
          ]}
        />
      </div>
    );
  }
}
