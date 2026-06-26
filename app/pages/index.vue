<template>
  <div>
    <SectionHome />

    <LazySectionAbout />
    <LazySectionServices />
    <LazySectionPortfolio />
    <LazySectionContact />
  </div>
</template>

<script setup lang="ts">
import { useI18n, useSeoMeta, useHead } from "#imports";

const { t, locale } = useI18n();

useHead({
  htmlAttrs: {
    lang: locale.value,
  },
});

useSeoMeta({
  title: "Software Engineer",
  description: t("home.description"),

  ogType: "website",
  ogUrl: "https://nandev.my.id/",
  ogTitle: "Mahfudin Adnan | Full-Stack Software Engineer",
  ogDescription: t("home.description"),
  ogImage: "https://nandev.my.id/preview.webp",

  // Twitter Card
  twitterCard: "summary_large_image",
  twitterTitle: "Mahfudin Adnan | Software Engineer",
  twitterDescription: t("home.description"),
  twitterImage: "https://nandev.my.id/preview.webp",
});
</script>
