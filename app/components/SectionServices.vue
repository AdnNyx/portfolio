<template>
  <section
    id="services-wrapper"
    class="relative text-white w-full min-h-screen pb-20 pt-24 lg:pt-32 overflow-hidden"
  >
    <div
      class="w-full flex flex-col items-center justify-center pb-16 z-40 relative px-8"
    >
      <h2
        class="service-header opacity-0 text-4xl md:text-5xl font-display font-bold text-white tracking-wide text-center hw-accel"
      >
        {{ $t("services.title_1") }}
        <span class="text-neon-cyan">{{ $t("services.title_2") }}</span>
      </h2>
      <div
        class="service-header opacity-0 w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mt-5 rounded-full hw-accel"
      ></div>
    </div>

    <div
      class="w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20"
    >
      <div class="service-card-left opacity-0 hw-accel h-full">
        <div
          class="relative h-full bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col group hover:-translate-y-2 hover:border-neon-cyan/50 hover:shadow-[0_15px_40px_rgba(34,211,238,0.15)] transition-all duration-500 overflow-hidden"
        >
          <div
            class="absolute -top-20 -right-20 w-48 h-48 bg-neon-cyan/20 blur-[60px] rounded-full pointer-events-none group-hover:bg-neon-cyan/30 transition-colors duration-500"
          ></div>

          <div
            class="w-14 h-14 rounded-xl bg-slate-800/80 flex items-center justify-center border border-neon-cyan/30 mb-6 shadow-inner relative z-10"
          >
            <Icon
              name="uil:laptop"
              class="text-3xl text-neon-cyan drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          <h3
            class="text-2xl font-display font-bold mb-4 text-white tracking-wide relative z-10"
          >
            {{ $t("services.dev_title") }}
          </h3>
          <p
            class="text-slate-300 text-base leading-relaxed font-light mb-8 flex-1 relative z-10"
          >
            {{ $t("services.dev_desc") }}
          </p>

          <div
            class="flex gap-4 items-center pt-6 border-t border-white/10 relative z-10 mt-auto"
          >
            <div
              class="w-10 h-10 rounded-full bg-slate-900/80 flex items-center justify-center border border-white/10 hover:border-neon-cyan hover:scale-110 transition-all duration-300 group/icon"
            >
              <Icon
                name="logos:vue"
                class="text-xl grayscale opacity-50 group-hover/icon:grayscale-0 group-hover/icon:opacity-100 transition-all"
              />
            </div>
            <div
              class="w-10 h-10 rounded-full bg-slate-900/80 flex items-center justify-center border border-white/10 hover:border-neon-cyan hover:scale-110 transition-all duration-300 group/icon"
            >
              <Icon
                name="logos:go"
                class="text-2xl grayscale opacity-50 group-hover/icon:grayscale-0 group-hover/icon:opacity-100 transition-all"
              />
            </div>
            <div
              class="w-10 h-10 rounded-full bg-slate-900/80 flex items-center justify-center border border-white/10 hover:border-neon-cyan hover:scale-110 transition-all duration-300 group/icon"
            >
              <Icon
                name="logos:tailwindcss-icon"
                class="text-xl grayscale opacity-50 group-hover/icon:grayscale-0 group-hover/icon:opacity-100 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="service-card-center opacity-0 hw-accel h-full">
        <div
          class="relative h-full bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col group hover:-translate-y-2 hover:border-white/50 hover:shadow-[0_15px_40px_rgba(255,255,255,0.1)] transition-all duration-500 overflow-hidden"
        >
          <div
            class="absolute -top-20 -right-20 w-48 h-48 bg-white/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-white/20 transition-colors duration-500"
          ></div>

          <div
            class="w-14 h-14 rounded-xl bg-slate-800/80 flex items-center justify-center border border-white/30 mb-6 shadow-inner relative z-10"
          >
            <Icon
              name="uil:robot"
              class="text-3xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          <h3
            class="text-2xl font-display font-bold mb-4 text-white tracking-wide relative z-10"
          >
            {{ $t("services.ai_title") }}
          </h3>
          <p
            class="text-slate-300 text-base leading-relaxed font-light mb-8 flex-1 relative z-10"
          >
            {{ $t("services.ai_desc") }}
          </p>

          <div
            class="flex gap-4 items-center pt-6 border-t border-white/10 relative z-10 mt-auto"
          >
            <div
              class="w-10 h-10 rounded-full bg-slate-900/80 flex items-center justify-center border border-white/10 hover:border-white hover:scale-110 transition-all duration-300 group/icon"
            >
              <Icon
                name="logos:python"
                class="text-xl grayscale opacity-50 group-hover/icon:grayscale-0 group-hover/icon:opacity-100 transition-all"
              />
            </div>
            <div
              class="w-10 h-10 rounded-full bg-slate-900/80 flex items-center justify-center border border-white/10 hover:border-[#FF6F00] hover:scale-110 transition-all duration-300 group/icon"
            >
              <Icon
                name="logos:tensorflow"
                class="text-xl grayscale opacity-50 group-hover/icon:grayscale-0 group-hover/icon:opacity-100 transition-all"
              />
            </div>
            <div
              class="w-10 h-10 rounded-full bg-slate-900/80 flex items-center justify-center border border-white/10 hover:border-[#EE4C2C] hover:scale-110 transition-all duration-300 group/icon"
            >
              <Icon
                name="logos:pytorch-icon"
                class="text-xl grayscale opacity-50 group-hover/icon:grayscale-0 group-hover/icon:opacity-100 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="service-card-right opacity-0 hw-accel h-full">
        <div
          class="relative h-full bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col group hover:-translate-y-2 hover:border-neon-purple/50 hover:shadow-[0_15px_40px_rgba(192,132,252,0.15)] transition-all duration-500 overflow-hidden"
        >
          <div
            class="absolute -top-20 -right-20 w-48 h-48 bg-neon-purple/20 blur-[60px] rounded-full pointer-events-none group-hover:bg-neon-purple/30 transition-colors duration-500"
          ></div>

          <div
            class="w-14 h-14 rounded-xl bg-slate-800/80 flex items-center justify-center border border-neon-purple/30 mb-6 shadow-inner relative z-10"
          >
            <Icon
              name="uil:cube"
              class="text-3xl text-neon-purple drop-shadow-[0_0_10px_rgba(192,132,252,0.5)] group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          <h3
            class="text-2xl font-display font-bold mb-4 text-white tracking-wide relative z-10"
          >
            {{ $t("services.blockchain_title") }}
          </h3>
          <p
            class="text-slate-300 text-base leading-relaxed font-light mb-8 flex-1 relative z-10"
          >
            {{ $t("services.blockchain_desc") }}
          </p>

          <div
            class="flex gap-4 items-center pt-6 border-t border-white/10 relative z-10 mt-auto"
          >
            <div
              class="w-10 h-10 rounded-full bg-slate-900/80 flex items-center justify-center border border-white/10 hover:border-neon-purple hover:scale-110 transition-all duration-300 group/icon"
            >
              <Icon
                name="logos:solidity"
                class="text-xl grayscale opacity-50 group-hover/icon:grayscale-0 group-hover/icon:opacity-100 transition-all"
              />
            </div>
            <div
              class="w-10 h-10 rounded-full bg-slate-900/80 flex items-center justify-center border border-white/10 hover:border-neon-purple hover:scale-110 transition-all duration-300 group/icon"
            >
              <Icon
                name="logos:ethereum"
                class="text-xl grayscale opacity-50 group-hover/icon:grayscale-0 group-hover/icon:opacity-100 transition-all"
              />
            </div>
            <div
              class="w-10 h-10 rounded-full bg-slate-900/80 flex items-center justify-center border border-white/10 hover:border-neon-purple hover:scale-110 transition-all duration-300 group/icon"
            >
              <Icon
                name="logos:rust"
                class="text-xl bg-white rounded-full grayscale opacity-50 group-hover/icon:grayscale-0 group-hover/icon:opacity-100 transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, nextTick } from "vue";
import { useCustomAnimations } from "~/composables/useCustomAnimations";

const { animateSlide, cleanupAnimations } = useCustomAnimations();

onMounted(() => {
  if (import.meta.client) {
    nextTick(() => {
      requestAnimationFrame(() => {
        animateSlide(".service-header", 0, 100, 0, 0.2, "#services-wrapper");

        const isMobile = window.innerWidth < 1024;

        if (isMobile) {
          animateSlide(
            ".service-card-left",
            0,
            100,
            0.1,
            0,
            ".service-card-left",
          );
          animateSlide(
            ".service-card-center",
            0,
            100,
            0.1,
            0,
            ".service-card-center",
          );
          animateSlide(
            ".service-card-right",
            0,
            100,
            0.1,
            0,
            ".service-card-right",
          );
        } else {
          animateSlide(
            ".service-card-left",
            -100,
            0,
            0.3,
            0.4,
            "#services-wrapper",
          );
          animateSlide(
            ".service-card-center",
            0,
            100,
            0.4,
            0,
            "#services-wrapper",
          );
          animateSlide(
            ".service-card-right",
            100,
            0,
            0.5,
            0.4,
            "#services-wrapper",
          );
        }
      });
    });
  }
});

onUnmounted(() => {
  if (import.meta.client) {
    cleanupAnimations();
  }
});
</script>

<style scoped>
.hw-accel {
  will-change: transform, opacity;
  transform: translateZ(0);
}
</style>
