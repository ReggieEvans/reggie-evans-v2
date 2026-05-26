"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type ThemeMode = "professional" | "unleashed";

interface ThemeContextType {
  mode: ThemeMode;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: "professional",
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("professional");

  useEffect(() => {
    document.body.dataset.theme = mode;
  }, [mode]);

  const toggle = () =>
    setMode((prev) => (prev === "professional" ? "unleashed" : "professional"));

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
