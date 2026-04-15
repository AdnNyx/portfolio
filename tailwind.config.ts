import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          900: "#020617", // Latar belakang utama
          800: "#0f172a", // Kartu / elemen di atas latar
          700: "#1e293b", // Border
        },
        neon: {
          cyan: "#22d3ee",
          purple: "#c084fc",
          blue: "#3b82f6",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
    },
  },
};
