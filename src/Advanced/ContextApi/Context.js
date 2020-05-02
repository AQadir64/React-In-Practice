import React, { Component } from "react";
import ThemeButton from "./ThemedButton";
import { ThemeContext, themes, SignedUser } from "./ThemeContext";
import ThemeTogglerButton from "./ThemeTogglerButton";

// Creates a Context object. When React renders a component that subscribes to this Context
// object it will read the current context value from the closest matching Provider above it in the tree.

function Toolbar() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}

class Context extends Component {
  toggleTheme = () => {
    this.setState((state) => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
    }));
  };

  state = {
    theme: themes.dark,
    toggleTheme: this.toggleTheme,
    name: "AbdulQadir",
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {" "}
        <div>
          <SignedUser.Provider value={this.state.name}>
            <Toolbar />{" "}
          </SignedUser.Provider>
        </div>
        <section>
          <ThemeButton>logout</ThemeButton>
        </section>
      </ThemeContext.Provider>
    );
  }
}
export default Context;

// However, sometimes the same data needs to be accessible by many components in the tree,
// and at different nesting levels.
// Context lets you “broadcast” such data, and changes to it, to all components below.
// Common examples where using
// context might be simpler than the alternatives include managing the current locale, theme, or a data cache.
