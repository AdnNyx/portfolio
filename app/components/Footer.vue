<template>
  <footer
    class="relative bg-space-950 border-t border-white/5 pt-12 pb-6 overflow-hidden"
  >
    <div
      class="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-neon-cyan/5 blur-[80px] pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
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
</template>
