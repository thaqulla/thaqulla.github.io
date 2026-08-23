import { FaGithub, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { createFileRoute } from "@tanstack/react-router";

import { EXTERNAL_LINKS } from "@/constants/externalLinks";
import CustomFooter from "@/components/footer";
import CustomHeader from "@/components/header";
import { useColorMode } from "@/components/ui/color-mode";
import { useLanguage } from "@/components/ui/language-context";
import { t } from "@/lib/i18n";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { colorMode } = useColorMode();
  const { language } = useLanguage();

  return (
    <div className="page">
      <CustomHeader />
      <main className="main">
        <div className="logo-container">
          <img
            className="logo"
            src={colorMode === "light" ? "/logo/black.svg" : "/logo/white.svg"}
            alt="Portfolio logo"
            width={180}
            height={38}
          />
        </div>

        <p className="framework-label">
          TanStack Start
        </p>

        <section className="welcome">
          <h1>
            {t("welcome.title", language)}
          </h1>
          <p className="welcome-message">
            {t("welcome.message", language)}
          </p>
        </section>

        <nav className="social-links" aria-label="Social links">
          <a className="button button-outline" href={EXTERNAL_LINKS.github} target="_blank" rel="noopener noreferrer">
            <FaGithub /> {t("common.github", language)}
          </a>
          <a className="button qiita-button" href={EXTERNAL_LINKS.qiita} target="_blank" rel="noopener noreferrer">
            <img src={colorMode === "light" ? "/qiita/color.svg" : "/qiita/monochrome.svg"} alt="Qiita" width={64} height={64} />
          </a>
          <a className="button button-outline youtube-button" href={EXTERNAL_LINKS.youtube} target="_blank" rel="noopener noreferrer">
            <FaYoutube /> {t("common.youtube", language)}
          </a>
          <a className="button button-outline twitter-button" href={EXTERNAL_LINKS.twitter} target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter /> {t("common.twitter", language)}
          </a>
        </nav>

        {import.meta.env.VITE_MESSAGE && <p className="message">{import.meta.env.VITE_MESSAGE}</p>}
      </main>
      <CustomFooter />
    </div>
  );
}
