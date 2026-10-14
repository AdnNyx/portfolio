export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  // Pengaturan dasar aplikasi
  app: {
    head: {
      titleTemplate: "%s | Mahfudin Adnan",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#22d3ee" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxt/icon",
    "@nuxtjs/google-fonts",
    "@tresjs/nuxt",
    "@nuxtjs/i18n",
    "@nuxt/image",
  ],

  features: {
    inlineStyles: true,
  },

  image: {
    format: ["webp"],
    quality: 80,
  },

  i18n: {
    locales: [
      { code: "id", name: "ID", file: "id.json", language: "id-ID" },
      { code: "en", name: "EN", file: "en.json", language: "en-US" },
    ],
    defaultLocale: "id",
    strategy: "no_prefix",
    baseUrl: "https://nandev.my.id",
  },

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      Outfit: [500, 700, 800],
    },
    display: "swap",
  },

  nitro: {
    preset: "vercel",
  },

  vite: {
    optimizeDeps: {
      include: [
        "three",
        "@vue/devtools-core",
        "@vue/devtools-kit",
        "lenis",
        "gsap",
        "gsap/ScrollTrigger",
      ],
    },
  },
});
