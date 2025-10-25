"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ClerkProvider } from "@clerk/nextjs";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

export function Provider({ children, ...props }: ColorModeProviderProps & { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <ChakraProvider value={defaultSystem}>
        {/* <ColorModeProvider {...props}> */}
          {children}
        {/* </ColorModeProvider> */}
      </ChakraProvider>
    </ClerkProvider>
  );
}
