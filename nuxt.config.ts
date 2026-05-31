export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  // Global SEO
  app: {
    head: {
      titleTemplate: "%s | Mahfudin Adnan",
      title: "Software Engineer",
      htmlAttrs: {
        lang: "id",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#22d3ee" },
        {
          name: "description",
          content:
            "Portfolio Mahfudin Adnan, seorang Software Engineer yang berfokus pada pengembangan ekosistem digital modern, fungsional, dan intuitif.",
        },

        // Open Graph (Facebook, LinkedIn, WhatsApp)
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Mahfudin Adnan - Software Engineer" },
        {
          property: "og:description",
          content:
            "Portfolio Mahfudin Adnan, seorang Software Engineer yang berfokus pada pengembangan ekosistem digital modern, fungsional, dan intuitif.",
        },
        { property: "og:url", content: "https://nandev-kappa.vercel.app/" }, // Ganti dengan domain aslimu (.dev atau .io)
        {
          property: "og:image",
          content:
            "https://nandev-kappa.vercel.app/_nuxt/profile.CEzFXbrh.webp",
        }, // Ganti dengan path gambar aslimu

        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Mahfudin Adnan - Software Engineer",
        },
        {
          name: "twitter:description",
          content:
            "Portfolio Mahfudin Adnan, seorang Software Engineer yang berfokus pada pengembangan ekosistem digital modern, fungsional, dan intuitif.",
        },
        {
          name: "twitter:image",
          content:
            "https://nandev-kappa.vercel.app/_nuxt/profile.CEzFXbrh.webp",
        }, // Ganti dengan path gambar aslimu
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
