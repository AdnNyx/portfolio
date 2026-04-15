<template>
  <section
    id="services-wrapper"
    class="relative text-white w-full h-screen overflow-hidden pt-24 lg:pt-32"
  >
    <div
      class="w-full flex flex-col items-center justify-center pb-8 z-40 relative px-8"
    >
      <h2
        class="text-4xl md:text-5xl font-display font-bold text-white tracking-wide text-center"
      >
        {{ $t("services.title_1") }}
        <span class="text-neon-cyan">{{ $t("services.title_2") }}</span>
      </h2>
      <div
        class="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mt-5 rounded-full"
      ></div>
    </div>

    <div
      class="flex-1 w-full max-w-7xl mx-auto flex flex-col lg:flex-row h-[calc(100vh-200px)] relative z-20 px-8 lg:px-12 pb-10 gap-8 lg:gap-16"
    >
      <div
        class="w-full lg:w-1/3 flex flex-row lg:flex-col justify-center gap-6 lg:gap-10 border-b lg:border-b-0 lg:border-l-2 border-white/10 pb-6 lg:pb-0 lg:pl-10 relative"
      >
        <div
          class="hidden lg:block absolute left-[-2px] w-1 bg-neon-cyan transition-all duration-500 ease-out rounded-full"
          :style="{
            top: `calc(${activeIndex * 33.33}% + 1rem)`,
            height: '3rem',
          }"
        ></div>

        <div
          v-for="(item, index) in navItems"
          :key="index"
          class="cursor-default transition-all duration-500 flex flex-col"
          :class="
            activeIndex === index
              ? 'opacity-100 scale-105'
              : 'opacity-40 scale-100'
          "
        >
          <span
            class="font-mono text-xs md:text-sm tracking-[0.2em] uppercase mb-1"
            :class="activeIndex === index ? 'text-neon-cyan' : 'text-slate-500'"
          >
            0{{ index + 1 }} // {{ item.subtitle }}
          </span>
          <h3
            class="font-display font-bold text-xl md:text-3xl lg:text-4xl transition-colors duration-500"
            :class="activeIndex === index ? 'text-white' : 'text-slate-400'"
          >
            {{ item.title }}
          </h3>
        </div>
      </div>

      <div
        class="w-full lg:w-2/3 h-full relative overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 bg-slate-900/60 backdrop-blur-xl"
      >
        <div
          class="absolute top-0 right-0 w-96 h-96 blur-[120px] rounded-full pointer-events-none transition-colors duration-1000"
          :class="{
            'bg-neon-cyan/20': activeIndex === 0,
            'bg-white/10': activeIndex === 1,
            'bg-neon-purple/20': activeIndex === 2,
          }"
        ></div>

        <div
          id="panel-0"
          class="service-panel absolute inset-0 w-full h-full p-8 lg:p-14 flex flex-col justify-center z-10"
        >
          <div
            class="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-slate-800/80 flex items-center justify-center border border-neon-cyan/30 mb-6 shadow-inner"
          >
            <Icon
              name="uil:laptop"
              class="text-2xl lg:text-3xl text-neon-cyan drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
            />
          </div>
          <h3
            class="text-2xl lg:text-3xl font-display font-bold mb-4 text-white tracking-wide"
          >
            {{ $t("services.dev_title") }}
          </h3>
          <p
            class="text-slate-300 text-base lg:text-lg leading-relaxed font-light mb-8 max-w-2xl"
          >
            {{ $t("services.dev_desc") }}
          </p>
          <div class="flex gap-4 items-center pt-6 border-t border-white/10">
            <div
              class="w-10 h-10 rounded-full bg-slate-900/80 flex items-center justify-center border border-white/10 hover:border-neon-cyan hover:scale-110 transition-all duration-300 group"
            >
              <Icon
                name="logos:vue"
                class="text-xl grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
              />
            </div>
            <div
              class="w-10 h-10 rounded-full bg-slate-900/80 flex items-center justify-center border border-white/10 hover:border-neon-cyan hover:scale-110 transition-all duration-300 group"
            >
              <Icon
                name="logos:go"
                class="text-2xl grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
              />
            </div>
            <div
              class="w-10 h-10 rounded-full bg-slate-900/80 flex items-center justify-center border border-white/10 hover:border-neon-cyan hover:scale-110 transition-all duration-300 group"
            >
              <Icon
                name="logos:tailwindcss-icon"
                class="text-xl grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
              />
            </div>
          </div>
        </div>

        <div
          id="panel-1"
          class="service-panel absolute inset-0 w-full h-full p-8 lg:p-14 flex flex-col justify-center z-20"
        >
          <div
            class="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-slate-800/80 flex items-center justify-center border border-white/30 mb-6 shadow-inner"
          >
            <Icon
              name="uil:robot"
              class="text-2xl lg:text-3xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            />
          </div>
          <h3
            class="text-2xl lg:text-3xl font-display font-bold mb-4 text-white tracking-wide"
          >
            {{ $t("services.ai_title") }}
          </h3>
          <p
            class="text-slate-300 text-base lg:text-lg leading-relaxed font-light mb-8 max-w-2xl"
          >
            {{ $t("services.ai_desc") }}
          </p>
          <div class="flex gap-4 items-center pt-6 border-t border-white/10">
            <div
              class="w-10 h-10 rounded-full bg-slate-900/80 flex items-center justify-center border border-white/10 hover:border-white hover:scale-110 transition-all duration-300 group"
            >
              <Icon
                name="logos:python"
                class="text-xl grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
              />
            </div>
            <div
              class="w-10 h-10 rounded-full bg-slate-900/80 flex items-center justify-center border border-white/10 hover:border-[#FF6F00] hover:scale-110 transition-all duration-300 group"
            >
              <Icon
                name="logos:tensorflow"
                class="text-xl grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
              />
            </div>
            <div
              class="w-10 h-10 rounded-full bg-slate-900/80 flex items-center justify-center border border-white/10 hover:border-[#EE4C2C] hover:scale-110 transition-all duration-300 group"
            >
              <Icon
                name="logos:pytorch-icon"
                class="text-xl grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
              />
            </div>
          </div>
        </div>

        <div
          id="panel-2"
          class="service-panel absolute inset-0 w-full h-full p-8 lg:p-14 flex flex-col justify-center z-30"
        >
          <div
            class="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-slate-800/80 flex items-center justify-center border border-neon-purple/30 mb-6 shadow-inner"
          >
            <Icon
              name="uil:cube"
              class="text-2xl lg:text-3xl text-neon-purple drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]"
            />
          </div>
          <h3
            class="text-2xl lg:text-3xl font-display font-bold mb-4 text-white tracking-wide"
          >
            {{ $t("services.blockchain_title") }}
          </h3>
          <p
            class="text-slate-300 text-base lg:text-lg leading-relaxed font-light mb-8 max-w-2xl"
          >
            {{ $t("services.blockchain_desc") }}
          </p>
          <div class="flex gap-4 items-center pt-6 border-t border-white/10">
            <div
              class="w-10 h-10 rounded-full bg-slate-900/80 flex items-center justify-center border border-white/10 hover:border-neon-purple hover:scale-110 transition-all duration-300 group"
            >
              <Icon
                name="logos:solidity"
                class="text-xl grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
              />
            </div>
            <div
              class="w-10 h-10 rounded-full bg-slate-900/80 flex items-center justify-center border border-white/10 hover:border-neon-purple hover:scale-110 transition-all duration-300 group"
            >
              <Icon
                name="logos:ethereum"
                class="text-xl grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
              />
            </div>
            <div
              class="w-10 h-10 rounded-full bg-slate-900/80 flex items-center justify-center border border-white/10 hover:border-neon-purple hover:scale-110 transition-all duration-300 group"
            >
              <Icon
                name="logos:rust"
                class="text-xl bg-white rounded-full grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const activeIndex = ref(0);

const navItems = [
  { subtitle: "Expertise", title: "Development" },
  { subtitle: "Innovation", title: "AI Solutions" },
  { subtitle: "Future", title: "Architecture" },
];

onMounted(() => {
  if (import.meta.server) return;

  gsap.registerPlugin(ScrollTrigger);

  // Initial state
  gsap.set("#panel-1", { autoAlpha: 0, y: 40 });
  gsap.set("#panel-2", { autoAlpha: 0, y: 40 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#services-wrapper",
      start: "top top",
      end: "+=200%",
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        if (progress < 0.33) activeIndex.value = 0;
        else if (progress >= 0.33 && progress < 0.66) activeIndex.value = 1;
        else activeIndex.value = 2;
      },
    },
  });

  tl.to("#panel-0", { autoAlpha: 0, y: -40, duration: 1 })
    .to("#panel-1", { autoAlpha: 1, y: 0, duration: 1 }, "<")
    .to({}, { duration: 0.4 })
    .to("#panel-1", { autoAlpha: 0, y: -40, duration: 1 })
    .to("#panel-2", { autoAlpha: 1, y: 0, duration: 1 }, "<");
});

onUnmounted(() => {
  if (import.meta.client) {
    ScrollTrigger.getAll().forEach((t) => t.kill());
  }
});
</script>

<style scoped>
.transition-colors {
  transition-property: color, background-color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.service-panel {
  will-change: transform, opacity;
  transform: translateZ(0);
}
</style>
