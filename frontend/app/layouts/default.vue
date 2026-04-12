<template>
  <div class="relative min-h-screen">
    <header
      class="fixed top-0 left-0 w-full z-50 bg-space-900/60 backdrop-blur-md border-b border-white/10"
    >
      <nav
        class="max-w-6xl mx-auto px-8 lg:px-12 py-4 flex justify-between items-center"
      >
        <div class="text-2xl font-display font-bold text-white tracking-wider">
          <span class="text-neon-cyan">Nan</span>
        </div>

        <div class="hidden md:flex items-center space-x-8">
          <ul class="flex space-x-8 text-sm font-medium text-slate-300">
            <li>
              <a
                href="#home"
                class="hover:text-neon-cyan transition-colors duration-300"
                >{{ $t("nav.home") }}</a
              >
            </li>
            <li>
              <a
                href="#about"
                class="hover:text-neon-cyan transition-colors duration-300"
                >{{ $t("nav.about") }}</a
              >
            </li>
            <li>
              <a
                href="#services"
                class="hover:text-neon-cyan transition-colors duration-300"
                >{{ $t("nav.services") }}</a
              >
            </li>
            <li>
              <a
                href="#portfolio"
                class="hover:text-neon-cyan transition-colors duration-300"
                >{{ $t("nav.portfolio") }}</a
              >
            </li>
            <li>
              <a
                href="#contact"
                class="hover:text-neon-cyan transition-colors duration-300"
                >{{ $t("nav.contact") }}</a
              >
            </li>
          </ul>

          <div class="w-px h-5 bg-white/20"></div>

          <button
            @click="toggleLanguage"
            class="flex items-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-neon-cyan transition-colors"
          >
            <Icon name="uil:globe" class="text-lg" />
            <span :class="{ 'text-neon-cyan': locale === 'id' }">ID</span>
            <span class="text-slate-500">/</span>
            <span :class="{ 'text-neon-cyan': locale === 'en' }">EN</span>
          </button>
        </div>
      </nav>
    </header>

    <main class="pt-20">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n();

const toggleLanguage = () => {
  setLocale(locale.value === "id" ? "en" : "id");
};
</script>
