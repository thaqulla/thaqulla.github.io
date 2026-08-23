"use client";

import * as React from "react";
import { LuMoon, LuSun } from "react-icons/lu";

export interface ColorModeProviderProps {
  children: React.ReactNode;
}

export function ColorModeProvider({ children }: ColorModeProviderProps) {
  const [colorMode, setColorMode] = React.useState<ColorMode>("light");

  React.useEffect(() => {
    const storedMode = window.localStorage.getItem("color-mode");
    const preferredMode = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialMode = storedMode === "dark" || storedMode === "light"
      ? storedMode
      : preferredMode;

    setColorMode(initialMode);
  }, []);

  React.useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(colorMode);
    window.localStorage.setItem("color-mode", colorMode);
  }, [colorMode]);

  const toggleColorMode = () =>
    setColorMode((currentMode) => (currentMode === "dark" ? "light" : "dark"));

  return (
    <ColorModeContext.Provider
      value={{ colorMode, setColorMode, toggleColorMode }}
    >
      {children}
    </ColorModeContext.Provider>
  );
}

export type ColorMode = "light" | "dark";

export interface UseColorModeReturn {
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
  toggleColorMode: () => void;
}

const ColorModeContext = React.createContext<UseColorModeReturn | undefined>(
  undefined,
);

export function useColorMode(): UseColorModeReturn {
  const context = React.useContext(ColorModeContext);
  if (!context) throw new Error("useColorMode must be used within ColorModeProvider");

  return context;
}

export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? dark : light;
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? <LuMoon /> : <LuSun />;
}
