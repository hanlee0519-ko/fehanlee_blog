import { useState } from "react";
import { useCookies } from "react-cookie";

const useDarkMode = (defaultTheme: string) => {
  const [theme, setTheme] = useState<string>(defaultTheme);
  const [, setCookie] = useCookies(["theme"]);

  const setAndSaveTheme = (theme: string) => {
    setTheme(theme);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
    setCookie("theme", theme);
  };

  const toggleTheme = () => {
    setAndSaveTheme(theme === "light" ? "dark" : "light");
  };

  return { theme, toggleTheme };
};

export default useDarkMode;
