"use client";

import { LuMoon, LuSun } from "react-icons/lu";
import { RiMailLine } from "react-icons/ri";

import { t } from "@/lib/i18n";
import { Button, IconButton, Text } from "@chakra-ui/react";

import CustomDialog from "@/components/dialog";
import { useColorMode } from "@/components/ui/color-mode";

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
      <Text>{t("greeting", "ja", { name: "太郎" })}</Text>
      <IconButton onClick={toggleColorMode} variant="outline" size="sm">
        {colorMode === "light" ? <LuSun /> : <LuMoon />}
      </IconButton>
      <CustomDialog />
    </header>
  );
}
