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
        <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          {{ $t("portfolio.title_port_1") }}
          <span class="text-neon-cyan">{{ $t("portfolio.title_port_2") }}</span>
        </h2>

        <div
          class="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full mb-10"
        ></div>

        <div
          class="flex p-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full w-max"
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

      <transition name="fade" mode="out-in">
        <PortfolioProjects v-if="activeTab === 'projects'" key="projects" />
        <PortfolioSkills v-else-if="activeTab === 'skills'" key="skills" />
      </transition>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";

const activeTab = ref<"projects" | "skills">("projects");
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
