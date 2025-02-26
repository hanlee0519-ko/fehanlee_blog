"use client";

import useDarkMode from "@/hooks/use-dark-mode";

const MODE_ICONS = {
  dark: "🌙",
  light: "🌞",
};

export default function DarkMode() {
  const { theme, toggleTheme } = useDarkMode();

  return <button onClick={toggleTheme}>{MODE_ICONS[theme]}</button>;
}
