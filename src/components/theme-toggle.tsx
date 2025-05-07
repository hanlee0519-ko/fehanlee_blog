"use client";

import React, { useContext } from "react";
import {
  ThemeStateContext,
  ThemeDispatchContext,
} from "../contexts/theme-context";

export default function ThemeToggle() {
  const state = useContext(ThemeStateContext);
  const dispatch = useContext(ThemeDispatchContext);

  if (!state || !dispatch) throw new Error("Error in ThemeContext");

  return (
    <button
      onClick={() => dispatch({ type: "TOGGLE_THEME" })}
      className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {state.theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
