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

      <div class="port-anim opacity-0 w-full hw-accel relative min-h-[400px]">
        <transition name="fade" mode="out-in">
          <PortfolioProjects v-if="activeTab === 'projects'" key="projects" />
          <PortfolioSkills v-else-if="activeTab === 'skills'" key="skills" />
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const activeTab = ref<"projects" | "skills">("projects");

onMounted(() => {
  if (import.meta.server) return;

  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#portfolio-section",
      start: "top 75%",
    },
  });

  tl.fromTo(
    ".port-anim",
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    },
  );
});

onUnmounted(() => {
  if (import.meta.client) {
    ScrollTrigger.getAll().forEach((t) => t.kill());
  }
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.4s ease,
    transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}

.hw-accel {
  will-change: transform, opacity;
  transform: translateZ(0);
}
</style>
