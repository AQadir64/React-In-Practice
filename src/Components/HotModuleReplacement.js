// Hot Module Replacement can be used in the src/index.js file to improve your experience as a
// developer. By default,create-react-app will cause the browser to refresh the page whenever its source
// code is modified. Try it by changing the helloWorld variable in your src/App.js file, which should
// cause the browser to refresh the page. There is a better way of handling source code changes during
// development, however

import React, { Component } from "react";

export default class HotModuleReplacement extends Component {
  render() {
    return <div>hell my name is react</div>;
  }
}

if (module.hot) {
  module.hot.accept();
}
