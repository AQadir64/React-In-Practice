import React from "react";
import { ThemeContext, SignedUser } from "./ThemeContext";
import Profile from "./Profile";

function ThemeTogglerButton() {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        return (
          <SignedUser.Consumer>
            {(name) => {
              return (
                <div>
                  <Profile user={name} />
                  <button
                    onClick={context.toggleTheme}
                    style={{
                      backgroundColor: context.theme.background,
                      color: context.theme.button,
                    }}
                  >
                    Toggle Theme
                  </button>
                </div>
              );
            }}
          </SignedUser.Consumer>
        );
      }}
    </ThemeContext.Consumer>
  );
}
export default ThemeTogglerButton;
