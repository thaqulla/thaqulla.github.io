"use client";

import Image from "next/image";

import { EXTERNAL_LINKS } from "@/constants/externalLinks";

import styles from "@/app/page.module.css";

export default function CustomFooter() {
  return (
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
  );
}
