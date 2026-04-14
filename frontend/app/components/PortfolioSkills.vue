<template>
  <div class="max-w-5xl mx-auto pt-4">
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
    >
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="flex flex-col items-center justify-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 hover:-translate-y-1 hover:border-neon-cyan/50 hover:shadow-[0_5px_20px_rgba(34,211,238,0.15)] transition-all duration-300 group cursor-default"
      >
        <div
          class="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
        >
          <Icon :name="skill.icon" class="text-4xl drop-shadow-md" />
        </div>

        <span
          class="text-xs font-mono text-slate-400 group-hover:text-neon-cyan transition-colors text-center line-clamp-1"
        >
          {{ skill.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const skills = [
  { name: "HTML5", icon: "logos:html-5" },
  { name: "CSS3", icon: "logos:css-3" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "Bootstrap", icon: "logos:bootstrap" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "Python", icon: "logos:python" },
  { name: "Flask", icon: "devicon:flask" },
  { name: "React.js", icon: "logos:react" },
  { name: "React Native", icon: "logos:react" },
  { name: "n8n", icon: "simple-icons:n8n" },
  { name: "Web3.js", icon: "logos:ethereum" },
  { name: "TensorFlow", icon: "logos:tensorflow" },
  { name: "Vue.js", icon: "logos:vue" },
  { name: "Nuxt", icon: "logos:nuxt-icon" },
  { name: "Next.js", icon: "logos:nextjs-icon" },
  { name: "Flutter", icon: "logos:flutter" },
  { name: "Golang", icon: "logos:go" },
];
</script>
