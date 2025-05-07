type Theme = "light" | "dark";

export type ThemeState = {
  theme: Theme;
};

export type ThemeAction = {
  type: "TOGGLE_THEME";
};
