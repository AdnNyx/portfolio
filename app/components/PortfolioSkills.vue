<template>
  <div class="max-w-6xl mx-auto pt-4 pb-12">
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5"
    >
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="flex flex-col items-center justify-center gap-3 bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-2xl p-5 hover:-translate-y-2 hover:bg-slate-800/80 hover:border-neon-cyan/50 hover:shadow-[0_10px_25px_rgba(34,211,238,0.2)] transition-all duration-300 group cursor-default relative overflow-hidden"
      >
        <div
          class="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        ></div>

        <div
          class="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10"
        >
          <Icon
            :name="skill.icon"
            class="text-4xl drop-shadow-md grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
            :class="
              skill.icon.includes('nextjs') ? 'bg-white rounded-full' : ''
            "
          />
        </div>

        <span
          class="text-xs md:text-sm font-mono font-medium text-slate-400 group-hover:text-neon-cyan transition-colors text-center line-clamp-1 relative z-10"
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
