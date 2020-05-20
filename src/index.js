import React from "react";
import ReactDOM from "react-dom";
import InputFocus from "./Advanced/Ref/InputFocus";
import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";
import FRParentInput from "./Advanced/Ref/FRParentInput";

ReactDOM.render(<FRParentInput />, document.getElementById("root"));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
