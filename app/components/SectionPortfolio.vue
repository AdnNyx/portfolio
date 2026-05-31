<template>
  <section
    id="portfolio-section"
    class="relative text-white w-full py-24 min-h-screen overflow-hidden"
  >
    <div
      class="absolute top-1/4 left-0 w-[500px] h-[500px] bg-neon-purple/10 blur-[120px] rounded-full pointer-events-none"
    ></div>
    <div
      class="absolute bottom-40 right-0 w-[600px] h-[600px] bg-neon-cyan/10 blur-[150px] rounded-full pointer-events-none"
    ></div>

    <div class="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
      <div class="flex flex-col items-center text-center mb-16">
        <h2
          class="port-anim opacity-0 text-4xl md:text-5xl font-display font-bold text-white mb-6 hw-accel"
        >
          {{ $t("portfolio.title_port_1") }}
          <span class="text-neon-cyan">{{ $t("portfolio.title_port_2") }}</span>
        </h2>

        <div
          class="port-anim opacity-0 w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full mb-10 hw-accel"
        ></div>

        <div
          class="port-anim opacity-0 flex p-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full w-max hw-accel"
        >
          <button
            @click="activeTab = 'projects'"
            class="px-8 py-2.5 rounded-full text-sm font-mono tracking-wider transition-all duration-300"
            :class="
              activeTab === 'projects'
                ? 'bg-neon-cyan/20 text-neon-cyan shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                : 'text-slate-400 hover:text-white'
            "
          >
            Projects
          </button>
          <button
            @click="activeTab = 'skills'"
            class="px-8 py-2.5 rounded-full text-sm font-mono tracking-wider transition-all duration-300"
            :class="
              activeTab === 'skills'
                ? 'bg-neon-purple/20 text-neon-purple shadow-[0_0_15px_rgba(192,132,252,0.2)]'
                : 'text-slate-400 hover:text-white'
            "
          >
            Tech Skills
          </button>
        </div>
      </div>

      <div
        class="port-anim opacity-0 w-full hw-accel relative grid grid-cols-1 items-start"
      >
        <div
          class="col-start-1 row-start-1 w-full transition-all duration-700 ease-in-out"
          :class="
            activeTab === 'projects'
              ? 'opacity-100 z-10 translate-y-0'
              : 'opacity-0 z-0 pointer-events-none -translate-y-8'
          "
        >
          <PortfolioProjects />
        </div>

        <div
          class="col-start-1 row-start-1 w-full transition-all duration-700 ease-in-out"
          :class="
            activeTab === 'skills'
              ? 'opacity-100 z-10 translate-y-0'
              : 'opacity-0 z-0 pointer-events-none translate-y-8'
          "
        >
          <PortfolioSkills />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import { useAnimations } from "~/composables/useAnimations";

const activeTab = ref<"projects" | "skills">("projects");
const { animateSlide, cleanupAnimations } = useAnimations();

onMounted(() => {
  if (import.meta.client) {
    nextTick(() => {
      requestAnimationFrame(() => {
        animateSlide(".port-anim", 0, 50, 0, 0.15, "#portfolio-section");
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
