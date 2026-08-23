"use client";

import { LuMoon, LuSun } from "react-icons/lu";
import { RiMailLine } from "react-icons/ri";

import { t } from "@/lib/i18n";

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
    <header className="site-header">
      <button className="button button-primary" type="button" onClick={handleClick}>
        <RiMailLine /> {t("common.email", language)}
      </button>
      <span className="greeting">{t("greeting", language, { name: "太郎" })}</span>

      {/* Language Switcher */}
      <div className="language-switcher">
        {(["ja", "en", "fr"] as const).map((lang) => (
          <button
            key={lang}
            className={`language-button ${language === lang ? "is-active" : ""}`}
            type="button"
            onClick={() => setLanguage(lang)}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>

      <button className="icon-button" type="button" aria-label="Toggle color mode" onClick={toggleColorMode}>
        {colorMode === "light" ? <LuSun /> : <LuMoon />}
      </button>
      <CustomDialog />
    </header>
  );
}
