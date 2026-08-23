"use client";

import { ChakraProvider, ClientOnly, defaultSystem } from "@chakra-ui/react";

import { ColorModeProvider } from "./color-mode";
import { LanguageProvider } from "./language-context";

export function Provider({
  children,
}: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ClientOnly>
        <ColorModeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ColorModeProvider>
      </ClientOnly>
    </ChakraProvider>
  );
}
