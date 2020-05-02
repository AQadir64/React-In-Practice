import React, { Component } from "react";
import { ThemeContext } from "./ThemeContext";
class ThemeButton extends Component {
  render() {
    let {theme} = this.context;
    console.log(theme);
    return (
      <button
        {...this.props}
        style={{ backgroundColor: theme.background, color: theme.button }}
      />
    );
  }
}
ThemeButton.contextType = ThemeContext;

export default ThemeButton;
