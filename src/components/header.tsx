"use client";

import { LuMoon, LuSun } from "react-icons/lu";
import { RiMailLine } from "react-icons/ri";

import { t } from "@/lib/i18n";
import { Button, HStack, IconButton, Text } from "@chakra-ui/react";

import CustomDialog from "@/components/dialog";
import { useColorMode } from "@/components/ui/color-mode";
import { useLanguage } from "@/components/ui/language-context";

export default function CustomHeader() {
  const { toggleColorMode, colorMode } = useColorMode();
  const { language, setLanguage } = useLanguage();

  const handleClick = () => {
    alert(t("common.emailPrivate", language));
  };

  return (
    <header className="flex justify-end items-center p-4 gap-4 h-16">
      <Button colorPalette="teal" variant="solid" onClick={handleClick}>
        <RiMailLine /> {t("common.email", language)}
      </Button>
      <Text>{t("greeting", language, { name: "太郎" })}</Text>

      {/* Language Switcher */}
      <HStack gap={1}>
        {(["ja", "en", "fr"] as const).map((lang) => (
          <Button
            key={lang}
            size="sm"
            variant={language === lang ? "solid" : "outline"}
            colorPalette={language === lang ? "blue" : "gray"}
            onClick={() => setLanguage(lang)}
          >
            {lang.toUpperCase()}
          </Button>
        ))}
      </HStack>

      <IconButton onClick={toggleColorMode} variant="outline" size="sm">
        {colorMode === "light" ? <LuSun /> : <LuMoon />}
      </IconButton>
      <CustomDialog />
    </header>
  );
}
