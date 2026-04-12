export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxt/icon",
    "@nuxtjs/google-fonts",
    "@tresjs/nuxt",
    "@nuxtjs/i18n",
  ],

  i18n: {
    locales: [
      { code: "id", name: "ID", file: "id.json" },
      { code: "en", name: "EN", file: "en.json" },
    ],
    defaultLocale: "id",
    strategy: "no_prefix",
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
      include: ["three"],
    },
  },
});
