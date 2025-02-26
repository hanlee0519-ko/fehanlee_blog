import { useState } from "react";

type Theme = "dark" | "light";

const useDarkMode = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  const setAndSaveTheme = (theme: Theme) => {
    setTheme(theme);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  };

  const toggleTheme = () => {
    setAndSaveTheme(theme === "dark" ? "light" : "dark");
  };

  return { theme, toggleTheme };
};

export default useDarkMode;
