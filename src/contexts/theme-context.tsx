"use client";

import React, { createContext, useReducer, useEffect } from "react";
import type { ThemeState, ThemeAction } from "@/types/theme-context-type";

export const ThemeStateContext = createContext<ThemeState | undefined>(
  undefined
);
export const ThemeDispatchContext = createContext<
  React.Dispatch<ThemeAction> | undefined
>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(state.theme);
  }, [state.theme]);

  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
}

function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
}

const INITIAL_STATE: ThemeState = {
  theme: "light",
};
