"use client";

import { ColorModeProvider } from "./color-mode";
import { LanguageProvider } from "./language-context";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ColorModeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ColorModeProvider>
  );
}
