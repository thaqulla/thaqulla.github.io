"use client";

import { Button, IconButton } from "@chakra-ui/react";
import { RiMailLine } from "react-icons/ri"

import { useColorMode } from "@/components/ui/color-mode"
import { LuMoon, LuSun } from "react-icons/lu"

export default function CustomHeader() {
  const { toggleColorMode, colorMode } = useColorMode()
  return (
    <header className="flex justify-end items-center p-4 gap-4 h-16">
      <Button colorPalette="teal" variant="solid">
        <RiMailLine /> Email
      </Button>
      <IconButton onClick={toggleColorMode} variant="outline" size="sm">
        {colorMode === "light" ? <LuSun /> : <LuMoon />}
      </IconButton>
    </header>
  );
}
