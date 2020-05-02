import { createContext } from "react";

export const themes = {
  light: {
    button: "#222222",
    background: "#eeeeee",
  },
  dark: {
    button: "#eeeeee",
    background: "#222222",
  },
};

export const ThemeContext = createContext({
  theme: themes.light,
  toggleTheme: () => {},
});
ThemeContext.displayName = "Theme";

export const SignedUser = createContext("guest");
