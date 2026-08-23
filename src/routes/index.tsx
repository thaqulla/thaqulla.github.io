import { FaGithub, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { createFileRoute } from "@tanstack/react-router";
import { Button, Center, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";

import { EXTERNAL_LINKS } from "@/constants/externalLinks";
import styles from "@/app/page.module.css";
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
    <div className={styles.page}>
      <CustomHeader />
      <main className={styles.main}>
        <Center mb={6}>
          <img
            className={styles.logo}
            src={colorMode === "light" ? "/logo/black.svg" : "/logo/white.svg"}
            alt="Portfolio logo"
            width={180}
            height={38}
          />
        </Center>

        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          TanStack Start
        </Text>

        <VStack gap={2} mb={8}>
          <Heading as="h1" size="2xl">
            {t("welcome.title", language)}
          </Heading>
          <Text fontSize="lg" opacity={0.7}>
            {t("welcome.message", language)}
          </Text>
        </VStack>

        <Flex gap={4} mb={8}>
          <Link href={EXTERNAL_LINKS.github} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: "none" }}>
            <Button colorPalette="gray" variant="outline"><FaGithub /><Text>{t("common.github", language)}</Text></Button>
          </Link>
          <Link href={EXTERNAL_LINKS.qiita} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: "none" }}>
            <Button bg={colorMode === "light" ? "#55C500" : "#fff"} _hover={{ bg: colorMode === "light" ? "#55C500" : "#fff" }} p={2}>
              <img src={colorMode === "light" ? "/qiita/color.svg" : "/qiita/monochrome.svg"} alt="Qiita" width={64} height={64} />
            </Button>
          </Link>
          <Link href={EXTERNAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: "none" }}>
            <Button colorPalette="red" variant="outline"><FaYoutube color="#ff0000" />{t("common.youtube", language)}</Button>
          </Link>
          <Link href={EXTERNAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: "none" }}>
            <Button colorPalette="blue" variant="outline"><FaSquareXTwitter color={colorMode === "light" ? "#000" : "#fff"} /><Text>{t("common.twitter", language)}</Text></Button>
          </Link>
        </Flex>

        {import.meta.env.VITE_MESSAGE && <Text fontSize="md" fontStyle="italic">{import.meta.env.VITE_MESSAGE}</Text>}
      </main>
      <CustomFooter />
    </div>
  );
}
