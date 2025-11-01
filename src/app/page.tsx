"use client";

import { FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import Image from "next/image";

import { EXTERNAL_LINKS } from "@/constants/externalLinks";
import { Button, Center, Flex, Link, Text } from "@chakra-ui/react";

import styles from "@/app/page.module.css";

import CustomFooter from "@/components/footer";
import CustomHeader from "@/components/header";
import { useColorMode } from "@/components/ui/color-mode";

export default function Home() {
  const { colorMode } = useColorMode();
  return (
    <div className={styles.page}>
      <CustomHeader />
      <main className={styles.main}>
        <Center>
          <Image
            className={styles.logo}
            src={colorMode === "light" ? "/logo/black.svg" : "/logo/white.svg"}
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </Center>

        <Image
          className={styles.logo}
          src={
            colorMode === "light" ? "/nextjs/black.svg" : "/nextjs/white.svg"
          }
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
        <Flex gap={4}>
          <Link
            href={EXTERNAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ textDecoration: "none" }}
          >
            <Button colorPalette="gray" variant="outline">
              <FaGithub />
              <Text>GitHub</Text>
            </Button>
          </Link>
          <Link
            href={EXTERNAL_LINKS.qiita}
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ textDecoration: "none" }}
          >
            <Button
              rel="noopener noreferrer"
              // variant="ghost"
              bg={colorMode === "light" ? "#55C500" : "#fff"}
              _hover={{
                bg: colorMode === "light" ? "#55C500" : "#fff",
                // transform: "scale(1.05)",
              }}
              p={2}
            >
              <Image
                aria-hidden
                src={
                  colorMode === "light"
                    ? "/qiita/color.svg"
                    : "/qiita/monochrome.svg"
                }
                alt="Qiita"
                width={64}
                height={64}
              />
            </Button>
          </Link>
          <Link
            href={EXTERNAL_LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ textDecoration: "none" }}
          >
            <Button colorPalette="red" variant="outline">
              <FaYoutube color="#ff0000" />
              Youtube
            </Button>
          </Link>
          <Link
            href={EXTERNAL_LINKS.twitter}
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ textDecoration: "none" }}
          >
            <Button colorPalette="blue" variant="outline">
              {colorMode === "light" ? (
                <FaTwitter color="#00acee" />
              ) : (
                <FaSquareXTwitter color="#fff" />
              )}
              <Text>{colorMode === "light" ? "Twitter" : "X(旧Twitter)"}</Text>
            </Button>
          </Link>
        </Flex>
        <p>{process.env.NEXT_PUBLIC_MESSAGE}</p>
      </main>
      <CustomFooter />
    </div>
  );
}
