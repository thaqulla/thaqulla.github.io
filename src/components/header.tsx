"use client";

import { RiMailLine } from "react-icons/ri";

import { useColorMode } from "@/components/ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";
import { Button, IconButton, CloseButton, Dialog, Portal } from "@chakra-ui/react"

export default function CustomHeader() {
  const { toggleColorMode, colorMode } = useColorMode();
  const handleClick = () => {
    alert("メールは非公開です");
  };
  return (
    <header className="flex justify-end items-center p-4 gap-4 h-16">
      <Button colorPalette="teal" variant="solid" onClick={handleClick}>
        <RiMailLine /> Email
      </Button>
      <IconButton onClick={toggleColorMode} variant="outline" size="sm">
        {colorMode === "light" ? <LuSun /> : <LuMoon />}
      </IconButton>
    </header>
  );
}
