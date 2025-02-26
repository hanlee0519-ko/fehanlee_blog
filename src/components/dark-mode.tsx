"use client";

import useDarkMode from "@/hooks/use-dark-mode";

const MODE_ICONS = {
  dark: "🌙",
  light: "🌞",
};

export default function DarkMode({ defaultTheme }: { defaultTheme: string }) {
  const { theme, toggleTheme } = useDarkMode(defaultTheme);

  return (
    <button onClick={toggleTheme}>
      {MODE_ICONS[theme as keyof typeof MODE_ICONS]}
    </button>
  );
}
