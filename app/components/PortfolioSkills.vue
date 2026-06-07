<template>
  <div class="max-w-6xl mx-auto pt-4 pb-12 space-y-16">
    <div v-for="(category, catIndex) in categorizedSkills" :key="catIndex">
      <div class="cat-anim opacity-0 hw-accel flex items-center gap-4 mb-6">
        <div
          class="w-10 h-10 rounded-xl bg-slate-800/50 border border-white/5 flex items-center justify-center shadow-inner"
        >
          <Icon :name="category.icon" class="text-neon-cyan text-xl" />
        </div>
        <h3
          class="text-xl md:text-2xl font-display font-bold text-white tracking-wide"
        >
          {{ category.title }}
        </h3>
        <div
          class="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-2"
        ></div>
      </div>

      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5"
      >
        <div
          v-for="(skill, index) in category.skills"
          :key="index"
          class="skill-anim opacity-0 hw-accel h-full"
        >
          <div
            class="h-full flex flex-col items-center justify-center gap-3 bg-slate-900/70 border border-white/5 rounded-2xl p-5 md:hover:-translate-y-2 md:hover:bg-slate-800/80 md:hover:border-neon-cyan/50 md:hover:shadow-[0_10px_25px_rgba(34,211,238,0.2)] transition-all duration-300 group cursor-default relative overflow-hidden"
          >
            <div
              class="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            ></div>

            <div
              class="w-12 h-12 flex items-center justify-center md:group-hover:scale-110 transition-transform duration-300 relative z-10"
            >
              <Icon
                :name="skill.icon"
                class="text-4xl text-white drop-shadow-md"
                :class="
                  skill.icon.includes('nextjs')
                    ? 'bg-white rounded-full p-0.5'
                    : ''
                "
              />
            </div>

            <span
              class="text-xs md:text-sm font-mono font-medium text-slate-300 md:group-hover:text-neon-cyan transition-colors text-center line-clamp-1 relative z-10"
            >
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, nextTick } from "vue";
import { useAnimations } from "~/composables/useAnimations";

const { animateSlide, cleanupAnimations } = useAnimations();

const categorizedSkills = [
  {
    title: "Programming Languages",
    icon: "uil:brackets-curly",
    skills: [
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Python", icon: "logos:python" },
      { name: "Golang", icon: "logos:go" },
    ],
  },
  {
    title: "Frontend Development",
    icon: "uil:window",
    skills: [
      { name: "HTML5", icon: "logos:html-5" },
      { name: "CSS3", icon: "logos:css-3" },
      { name: "Vue.js", icon: "logos:vue" },
      { name: "Nuxt", icon: "logos:nuxt-icon" },
      { name: "React.js", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "Bootstrap", icon: "logos:bootstrap" },
      { name: "React Native", icon: "logos:react" },
      { name: "Flutter", icon: "logos:flutter" },
    ],
  },
  {
    title: "Backend Development",
    icon: "uil:server-network",
    skills: [
      { name: "Flask", icon: "devicon:flask" },
      { name: "FastAPI", icon: "devicon:fastapi" },
      { name: "Laravel", icon: "logos:laravel" },
      { name: "n8n", icon: "simple-icons:n8n" },
    ],
  },
  {
    title: "Database",
    icon: "uil:database",
    skills: [{ name: "PostgreSQL", icon: "logos:postgresql" }],
  },
  {
    title: "AI & Machine Learning",
    icon: "uil:brain",
    skills: [{ name: "TensorFlow", icon: "logos:tensorflow" }],
  },
  {
    title: "Web3",
    icon: "uil:bitcoin-circle",
    skills: [{ name: "Web3.js", icon: "logos:ethereum" }],
  },
];

onMounted(() => {
  if (import.meta.client) {
    nextTick(() => {
      requestAnimationFrame(() => {
        animateSlide(".cat-anim", 0, 30, 0.1, 0.1);

        animateSlide(".skill-anim", 0, 40, 0.2, 0.03);
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
