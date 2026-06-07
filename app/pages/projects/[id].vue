<template>
  <main
    class="relative min-h-screen bg-space-950 text-white pt-8 lg:pt-12 pb-32 overflow-x-hidden"
  >
    <div class="fixed inset-0 pointer-events-none -z-10">
      <div
        class="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-neon-cyan/10 blur-[120px] rounded-full"
      ></div>
      <div
        class="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-neon-purple/10 blur-[120px] rounded-full"
      ></div>
    </div>

    <div v-if="project" class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      <div
        class="detail-anim opacity-0 flex flex-wrap items-center gap-3 text-slate-400 font-mono text-sm mb-8"
      >
        <NuxtLink
          to="/#portfolio-section"
          class="flex items-center gap-2 hover:text-white transition-colors px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10"
        >
          <Icon name="uil:arrow-left" class="text-lg" /> Back
        </NuxtLink>
        <span class="text-slate-600">Projects</span>
        <Icon name="uil:angle-right" class="text-slate-600" />
        <span class="text-white font-semibold">{{ $t(project.titleKey) }}</span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div class="flex flex-col h-full">
          <div class="detail-anim opacity-0 mb-8">
            <h1
              class="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-6"
            >
              {{ $t(project.titleKey) }}
            </h1>
            <div
              class="w-16 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
            ></div>
          </div>

          <p
            class="detail-anim opacity-0 text-slate-300 text-lg leading-relaxed font-light mb-12 lg:mb-20"
          >
            {{ $t(project.descKey) }}
          </p>

          <div class="detail-anim opacity-0 mt-auto w-full max-w-lg">
            <div class="flex flex-wrap sm:flex-nowrap gap-4">
              <a
                v-if="project.liveLink && project.liveLink.includes('.')"
                :href="
                  project.liveLink.startsWith('http')
                    ? project.liveLink
                    : `https://${project.liveLink}`
                "
                target="_blank"
                class="flex-1 flex justify-center items-center gap-2 px-5 py-4 bg-neon-cyan/10 border border-neon-cyan/50 text-neon-cyan rounded-2xl hover:bg-neon-cyan hover:text-space-900 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(34,211,238,0.25)] transition-all duration-300 font-display font-bold group"
              >
                <Icon
                  name="uil:external-link-alt"
                  class="text-xl group-hover:rotate-45 transition-transform duration-300"
                />
                <span>Live Demo</span>
              </a>
              <div
                v-else
                class="flex-1 flex justify-center items-center gap-2 px-5 py-4 bg-slate-800/40 border border-white/5 text-slate-500 rounded-2xl font-display font-bold cursor-not-allowed"
              >
                <Icon name="uil:external-link-alt" class="text-xl" />
                <span>Unavailable</span>
              </div>

              <a
                v-if="project.repoLink && project.repoLink.includes('github')"
                :href="project.repoLink"
                target="_blank"
                class="flex-1 flex justify-center items-center gap-2 px-5 py-4 bg-white/5 border border-white/20 text-white rounded-2xl hover:bg-white hover:text-space-900 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(255,255,255,0.15)] transition-all duration-300 font-display font-bold group"
              >
                <Icon
                  name="uil:github"
                  class="text-xl group-hover:rotate-12 transition-transform duration-300"
                />
                <span>Source Code</span>
              </a>
              <div
                v-else
                class="flex-1 flex justify-center items-center gap-2 px-5 py-4 bg-slate-800/40 border border-white/5 text-slate-500 rounded-2xl font-display font-bold cursor-not-allowed"
              >
                <Icon name="uil:github" class="text-xl" />
                <span>Private Repo</span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-8">
          <div
            class="detail-anim opacity-0 w-full aspect-video md:aspect-[4/3] lg:aspect-auto lg:h-[420px] rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl relative"
          >
            <img
              v-if="project.images.length > 0"
              :src="getImageUrl(project.images[0])"
              class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
            />
            <div
              v-else
              class="absolute inset-0 flex items-center justify-center text-slate-500 font-mono bg-space-900"
            >
              Preview Image Not Available
            </div>
          </div>

          <div
            class="detail-anim opacity-0 bg-slate-900/60 border border-white/10 rounded-3xl p-8 shadow-lg backdrop-blur-sm"
          >
            <h3
              class="text-xl font-display font-bold text-white mb-6 flex items-center gap-3"
            >
              <Icon name="uil:layer-group" class="text-neon-cyan text-2xl" />
              Tech Stack
            </h3>

            <div class="flex flex-wrap gap-3">
              <span
                v-for="(tech, idx) in project.stack"
                :key="idx"
                class="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-mono text-neon-cyan shadow-inner"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-else
      class="min-h-[60vh] flex flex-col items-center justify-center text-center px-6"
    >
      <Icon
        name="uil:sad-squint"
        class="text-7xl text-neon-purple mb-6 animate-pulse"
      />
      <h1 class="text-4xl font-display font-bold text-white mb-4">
        Project Not Found
      </h1>
      <p class="text-slate-400 mb-10 max-w-md">
        I'm sorry, the project details you are looking for doesn't exist or has
        been removed.
      </p>
      <NuxtLink
        to="/#portfolio-section"
        class="px-8 py-3 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white hover:text-space-950 transition-all"
      >
        Back to Portfolio
      </NuxtLink>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, nextTick } from "vue";
// import { useRoute } from "vue-router";
import { useAnimations } from "~/composables/useAnimations";

const { t } = useI18n();
const { animateSlide, cleanupAnimations } = useAnimations();
const route = useRoute();
const projectId = route.params.id as string;

const projects = [
  {
    titleKey: "portfolio.project1_title",
    descKey: "portfolio.project1_desc",
    images: ["company.webp"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Lenis"],
    liveLink: "/notfound",
    repoLink: "/notfound",
  },
  {
    titleKey: "portfolio.project2_title",
    descKey: "portfolio.project2_desc",
    images: [],
    stack: ["Next.js", "TypeScript", "Python", "FastAPI", "PostgreSQL"],
    liveLink: "/notfound",
    repoLink: "https://github.com/AdnNyx/NovelPlatform",
  },
  {
    titleKey: "portfolio.project3_title",
    descKey: "portfolio.project3_desc",
    images: ["school.webp"],
    stack: ["Vue.js", "PostgreSQL", "Golang"],
    liveLink: "https://mi-alhidayah-kemuning.vercel.app/",
    repoLink: "https://github.com/AdnNyx/SchoolWebsite",
  },
  {
    titleKey: "portfolio.project4_title",
    descKey: "portfolio.project4_desc",
    images: ["portfolio.webp"],
    stack: ["Nuxt", "Tailwind CSS", "Lenis", "GSAP"],
    liveLink: "https://nandev-kappa.vercel.app",
    repoLink: "https://github.com/AdnNyx/portfolio",
  },
  {
    titleKey: "portfolio.project5_title",
    descKey: "portfolio.project5_desc",
    images: ["qrcodegenerator.webp"],
    stack: ["React.js", "Tailwind CSS", "Flask"],
    liveLink: "https://qrcodegenerator-gilt.vercel.app",
    repoLink: "https://github.com/AdnNyx/QRCodeGenerator",
  },
  {
    titleKey: "portfolio.project6_title",
    descKey: "portfolio.project6_desc",
    images: ["downloader.webp"],
    stack: ["Python", "Flask"],
    liveLink: "https://universal-vid-down.vercel.app",
    repoLink: "https://github.com/AdnNyx/universal-vid-down",
  },
  {
    titleKey: "portfolio.project7_title",
    descKey: "portfolio.project7_desc",
    images: [],
    stack: ["Vue.js", "Nuxt", "REST API"],
    liveLink: "",
    repoLink: "",
  },
  {
    titleKey: "portfolio.project8_title",
    descKey: "portfolio.project8_desc",
    images: [],
    stack: ["Python", "TensorFlow", "React"],
    liveLink: "",
    repoLink: "",
  },
];

const project = computed(() => {
  return projects.find((p) => p.titleKey.includes(projectId));
});

const imagesAssets = import.meta.glob("~/assets/image/*", {
  eager: true,
  import: "default",
});

const getImageUrl = (name: string | undefined) => {
  if (!name) return "";
  const path = `/assets/image/${name}`;
  for (const key in imagesAssets) {
    if (key.endsWith(path)) return imagesAssets[key] as string;
  }
  return "";
};

// SEO
if (project.value) {
  const projectImageUrl =
    project.value.images.length > 0
      ? getImageUrl(project.value.images[0])
      : "https://nandev.my.id/preview.webp";

  useSeoMeta({
    title: t(project.value.titleKey),
    description: t(project.value.descKey),

    ogTitle: `${t(project.value.titleKey)} | Mahfudin Adnan`,
    ogDescription: t(project.value.descKey),
    ogImage: projectImageUrl,
    ogUrl: `https://nandev.my.id/projects/${projectId}`,

    twitterTitle: `${t(project.value.titleKey)} | Mahfudin Adnan`,
    twitterDescription: t(project.value.descKey),
    twitterImage: projectImageUrl,
  });
}

onMounted(() => {
  if (import.meta.client && project.value) {
    nextTick(() => {
      requestAnimationFrame(() => {
        animateSlide(".detail-anim", 0, 50, 0.1, 0.15);
      });
    });
  }
});

onUnmounted(() => {
  if (import.meta.client) cleanupAnimations();
});
</script>

<style scoped>
.hw-accel {
  will-change: transform, opacity;
  transform: translateZ(0);
}
</style>
