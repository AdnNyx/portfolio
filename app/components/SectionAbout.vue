<template>
  <section
    id="about"
    class="relative min-h-screen flex items-center justify-center overflow-hidden py-24"
  >
    <div
      class="absolute top-1/4 right-0 w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[150px] pointer-events-none -z-10"
    ></div>
    <div
      class="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-neon-cyan/10 rounded-full blur-[120px] pointer-events-none -z-10"
    ></div>

    <div
      class="max-w-7xl mx-auto px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10"
    >
      <div
        class="about-photo opacity-0 relative flex justify-center items-center mt-10 lg:mt-0 w-full py-10 lg:py-0 hw-accel"
      >
        <div
          class="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full border-[2px] border-dashed border-slate-500/50 ring-spin-slow hw-accel"
        ></div>

        <div
          class="absolute w-[340px] h-[340px] md:w-[450px] md:h-[450px] rounded-full border-t-[3px] border-r-[3px] border-neon-cyan shadow-[0_0_20px_rgba(34,211,238,0.3)] ring-spin-reverse hw-accel"
        ></div>

        <div
          class="w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-[3px] border-space-800 z-10 relative bg-space-800 flex items-center justify-center group shadow-[0_0_30px_rgba(34,211,238,0.2)] hw-accel"
        >
          <div
            class="absolute inset-0 bg-gradient-to-t from-space-900/90 via-transparent to-transparent z-10 pointer-events-none"
          ></div>

          <NuxtImg
            src="/image/profile.webp"
            alt="Mahfudin Adnan"
            width="480"
            height="480"
            sizes="sm:250px md:400px lg:480px"
            preload
            fetchpriority="high"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 hw-accel"
          />
        </div>
      </div>

      <div class="space-y-6 text-center lg:text-left">
        <h2
          class="about-anim opacity-0 text-4xl md:text-5xl font-display font-bold text-white hw-accel"
        >
          {{ $t("about.title_1") }}
          <span class="text-neon-cyan">{{ $t("about.title_2") }}</span>
        </h2>

        <div
          class="about-anim opacity-0 w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto lg:mx-0 rounded-full mb-8 hw-accel"
        ></div>

        <div
          class="space-y-5 text-lg leading-relaxed text-left max-w-2xl mx-auto lg:mx-0"
        >
          <p id="about-text-container" class="about-anim opacity-0 m-0">
            <template
              v-for="(word, index) in $t('about.p1').split(' ')"
              :key="'p1-' + index"
            >
              <span class="about-word text-slate-700 inline-block hw-accel">{{
                word
              }}</span
              >{{ " " }}
            </template>
            <br /><br />
            <template
              v-for="(word, index) in $t('about.p2').split(' ')"
              :key="'p2-' + index"
            >
              <span class="about-word text-slate-700 inline-block hw-accel">{{
                word
              }}</span
              >{{ " " }}
            </template>
          </p>
        </div>

        <div class="about-anim opacity-0 pt-6 hw-accel">
          <a
            href="#services-wrapper"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-neon-cyan hover:text-space-900 hover:border-neon-cyan transition-all duration-300"
          >
            {{ $t("about.cta") }} <Icon name="uil:arrow-down" class="text-lg" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, nextTick } from "vue";
import { useCustomAnimations } from "~/composables/useCustomAnimations";

const { animateSlide, animateTextScrub, cleanupAnimations } =
  useCustomAnimations();

onMounted(() => {
  if (import.meta.client) {
    nextTick(() => {
      requestAnimationFrame(() => {
        animateSlide(".about-photo", -100, 0, 0, 0.2, "#about");
        animateSlide(".about-anim", 0, 100, 0.2, 0.3, "#about");
        animateTextScrub("#about-text-container", ".about-word", "#f8fafc");
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
  will-change: transform, opacity, color;
  transform: translateZ(0);
}

.ring-spin-slow {
  animation: spin-slow 15s linear infinite;
}

.ring-spin-reverse {
  animation: spin-reverse 10s linear infinite;
}

.about-photo,
.about-anim {
  will-change: transform, opacity;
  transform: translateZ(0);
}

.about-word {
  will-change: color;
}

@keyframes spin-slow {
  0% {
    transform: rotate(0deg) translateZ(0);
  }
  100% {
    transform: rotate(360deg) translateZ(0);
  }
}

@keyframes spin-reverse {
  0% {
    transform: rotate(360deg) translateZ(0);
  }
  100% {
    transform: rotate(0deg) translateZ(0);
  }
}
</style>
