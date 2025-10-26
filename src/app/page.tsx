"use client";

import Image from "next/image";

import { useColorMode } from "@/components/ui/color-mode";
import CustomHeader from "@/components/header";
import { EXTERNAL_LINKS } from "@/constants/externalLinks";

import styles from "./page.module.css";

export default function Home() {
  const { colorMode } = useColorMode();
  return (
    <div className={styles.page}>
      <CustomHeader />
      <main className={styles.main}>
        <Image
            className={styles.logo}
            src={colorMode === "light" ? "/nextjs/black.svg":"/nextjs/white.svg"}
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href={EXTERNAL_LINKS.vercel_new}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src={
                colorMode === "light"
                  ? "/vercel/black.svg"
                  : "/vercel/white.svg"
              }
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href={EXTERNAL_LINKS.nextjs_docs}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href={EXTERNAL_LINKS.nextjs_learn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href={EXTERNAL_LINKS.vercel_templates}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href={EXTERNAL_LINKS.nextjs_org}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
