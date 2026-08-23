"use client";

import { EXTERNAL_LINKS } from "@/constants/externalLinks";

import styles from "@/app/page.module.css";

export default function CustomFooter() {
  return (
    <footer className={styles.footer}>
      <a
        href={EXTERNAL_LINKS.tanstack_docs}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        TanStack Start docs
      </a>
      <a
        href={EXTERNAL_LINKS.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        GitHub
      </a>
      <a
        href={EXTERNAL_LINKS.tanstack_org}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Go to tanstack.com →
      </a>
    </footer>
  );
}
