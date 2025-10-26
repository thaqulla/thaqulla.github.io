"use client";

import { ChakraProvider, defaultSystem, ClientOnly } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

export function Provider({
  children,
  ...props
}: ColorModeProviderProps & { children: React.ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ClientOnly>
        <ColorModeProvider {...props}>{children}</ColorModeProvider>
      </ClientOnly>
    </ChakraProvider>
  );
}
