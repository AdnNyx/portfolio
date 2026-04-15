<template>
  <div class="relative min-h-screen flex flex-col bg-space-900">
    <header
      class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      :class="
        scrolled
          ? 'bg-space-900/80 backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      "
    >
      <nav
        class="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center relative z-50"
      >
        <a
          href="#home"
          class="text-2xl font-display font-bold text-white tracking-wider"
        >
          <span class="text-neon-cyan">Nan</span>
        </a>

        <div class="hidden md:flex items-center space-x-8">
          <ul class="flex space-x-8 text-sm font-medium text-slate-300">
            <li v-for="item in navItems" :key="item.id">
              <a
                :href="`#${item.id}`"
                class="transition-colors duration-300 relative py-2 group"
                :class="
                  activeSection === item.id
                    ? 'text-neon-cyan'
                    : 'hover:text-white'
                "
              >
                {{ $t(`nav.${item.key}`) }}
                <span
                  class="absolute bottom-0 left-0 h-[2px] bg-neon-cyan transition-all duration-300"
                  :class="
                    activeSection === item.id
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  "
                ></span>
              </a>
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

        <button
          @click="toggleMenu"
          class="md:hidden text-white p-2 focus:outline-none"
        >
          <Icon
            :name="isMenuOpen ? 'uil:times' : 'uil:bars'"
            class="text-2xl transition-transform duration-300"
            :class="isMenuOpen ? 'text-neon-cyan rotate-90' : 'rotate-0'"
          />
        </button>
      </nav>

      <transition name="fade">
        <div
          v-show="isMenuOpen"
          @click="closeMenu"
          class="fixed inset-0 bg-space-900/80 backdrop-blur-sm z-40 md:hidden cursor-pointer"
        ></div>
      </transition>

      <div
        class="fixed top-0 right-0 h-screen w-64 bg-space-950 border-l border-white/10 pt-24 px-8 z-40 transform transition-transform duration-500 ease-in-out md:hidden shadow-[-20px_0_50px_rgba(0,0,0,0.5)] flex flex-col"
        :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <ul
          class="flex flex-col space-y-6 text-lg font-medium text-slate-300 mb-10"
        >
          <li v-for="(item, index) in navItems" :key="item.id">
            <a
              :href="`#${item.id}`"
              @click="closeMenu"
              class="flex items-center gap-4 transition-colors duration-300"
              :class="
                activeSection === item.id
                  ? 'text-neon-cyan'
                  : 'hover:text-white'
              "
            >
              <span class="text-xs font-mono opacity-50">0{{ index + 1 }}</span>
              {{ $t(`nav.${item.key}`) }}
            </a>
          </li>
        </ul>

        <div class="w-full h-px bg-white/10 mb-6"></div>

        <button
          @click="toggleLanguage"
          class="flex items-center gap-3 text-base font-semibold text-slate-300 hover:text-neon-cyan transition-colors"
        >
          <Icon name="uil:globe" class="text-xl" />
          <div>
            <span :class="{ 'text-neon-cyan': locale === 'id' }">ID</span>
            <span class="text-slate-500 mx-2">/</span>
            <span :class="{ 'text-neon-cyan': locale === 'en' }">EN</span>
          </div>
        </button>
      </div>
    </header>

    <main class="flex-1 pt-16 lg:pt-20">
      <slot />
    </main>

    <footer
      class="relative bg-space-950 border-t border-white/5 pt-12 pb-6 overflow-hidden mt-20"
    >
      <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-neon-cyan/5 blur-[80px] pointer-events-none"
      ></div>

      <div class="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div
          class="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div class="flex flex-col items-center md:items-start gap-2">
            <a
              href="#home"
              class="text-2xl font-display font-bold text-white tracking-wider cursor-pointer"
            >
              <span class="text-neon-cyan">Nan</span>
            </a>
            <p
              class="text-slate-500 text-xs md:text-sm font-light text-center md:text-left"
            >
              {{ $t("footer.copyright") }}
            </p>
          </div>

          <div
            class="flex items-center gap-4 md:gap-6 text-xs md:text-sm text-slate-400 font-light font-mono"
          >
            <a
              href="#"
              class="hover:text-neon-cyan transition-colors duration-300"
            >
              {{ $t("footer.terms") }}
            </a>
            <div class="w-1 h-1 rounded-full bg-slate-700"></div>
            <a
              href="#"
              class="hover:text-neon-cyan transition-colors duration-300"
            >
              {{ $t("footer.privacy") }}
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

// Language
const { locale, setLocale } = useI18n();
const toggleLanguage = () => {
  setLocale(locale.value === "id" ? "en" : "id");
};

// Mobile Menu
const isMenuOpen = ref(false);
const scrolled = ref(false);
const activeSection = ref("home");

// Link
const navItems = [
  { id: "home", key: "home" },
  { id: "about", key: "about" },
  { id: "services-wrapper", key: "services" }, // Pastikan ID ini cocok dengan file SectionServices.vue Anda
  { id: "portfolio-section", key: "portfolio" },
  { id: "contact", key: "contact" },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

// GSAP
const handleScroll = () => {
  if (import.meta.server) return;

  scrolled.value = window.scrollY > 20;

  const triggerPoint = window.innerHeight / 3;
  let current = "";

  navItems.forEach((item) => {
    const section = document.getElementById(item.id);
    if (section) {
      const target = section.closest(".pin-spacer") || section;
      const rect = target.getBoundingClientRect();

      if (rect.top <= triggerPoint && rect.bottom > triggerPoint) {
        current = item.id;
      }
    }
  });

  if (window.scrollY < 50) {
    current = "home";
  }

  if (current) {
    activeSection.value = current;
  }
};

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  }
});

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener("scroll", handleScroll);
  }
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
