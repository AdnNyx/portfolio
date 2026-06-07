<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8" id="projects-grid">
      <div
        v-for="(project, index) in visibleProjects"
        :key="project.titleKey"
        :id="`project-card-${index}`"
        class="opacity-0 hw-accel h-full"
      >
        <div
          @mouseenter="
            startHoverSlideshow(
              project.titleKey,
              project.images ? project.images.length : 0,
            )
          "
          @mouseleave="stopHoverSlideshow"
          class="relative h-full bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col group hover:-translate-y-2 hover:border-neon-cyan/50 hover:shadow-[0_10px_40px_rgba(34,211,238,0.15)] transition-[transform,border-color,box-shadow] duration-500 overflow-hidden hw-accel-card"
        >
          <div
            class="w-full aspect-[2/1] bg-space-800 rounded-2xl mb-6 border border-white/5 overflow-hidden relative group-hover:border-white/10 transition-colors"
          >
            <template v-if="project.images && project.images.length > 0">
              <div
                class="absolute inset-0 transition-transform duration-[2000ms] ease-out group-hover:scale-105"
              >
                <transition name="carousel-fade">
                  <img
                    :key="
                      activeHoverKey === project.titleKey ? activeHoverIndex : 0
                    "
                    :src="
                      getImageUrl(
                        project.images[
                          activeHoverKey === project.titleKey
                            ? activeHoverIndex
                            : 0
                        ],
                      )
                    "
                    :alt="$t(project.titleKey)"
                    loading="lazy"
                    decoding="async"
                    class="absolute inset-0 w-full h-full object-cover object-center hw-accel-img"
                  />
                </transition>
              </div>
            </template>

            <div
              v-else
              class="absolute inset-0 flex items-center justify-center text-slate-500 font-mono text-xs text-center px-4"
            >
              [ {{ $t(project.titleKey) }} Thumbnail ]
            </div>

            <div
              class="absolute inset-0 bg-gradient-to-t from-neon-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none hw-accel"
            ></div>
          </div>

          <div>
            <h3
              class="text-xl font-display font-semibold mb-2 group-hover:text-neon-cyan transition-colors line-clamp-1"
            >
              {{ $t(project.titleKey) }}
            </h3>
            <p class="text-slate-400 text-sm line-clamp-3 mb-6">
              {{ $t(project.descKey) }}
            </p>
          </div>

          <div
            class="mt-auto pt-5 border-t border-white/10 flex flex-wrap gap-4 relative z-10"
          >
            <NuxtLink
              :to="`/projects/${project.titleKey.split('.')[1] || index}`"
              class="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 text-white rounded-xl transition-all font-mono text-sm font-bold"
            >
              <Icon name="uil:info-circle" class="text-lg" /> Details
            </NuxtLink>

            <a
              v-if="
                project.liveLink &&
                project.liveLink !== '/notfound' &&
                project.liveLink !== ''
              "
              :href="
                project.liveLink.startsWith('http')
                  ? project.liveLink
                  : `https://${project.liveLink}`
              "
              target="_blank"
              class="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-neon-cyan/10 hover:bg-neon-cyan border border-neon-cyan/50 text-neon-cyan hover:text-space-900 rounded-xl transition-all font-mono text-sm font-bold"
            >
              <Icon name="uil:external-link-alt" class="text-lg" /> Demo
            </a>
          </div>
        </div>
      </div>
    </div>

    <transition name="fade" appear>
      <div
        v-if="visibleCount < projects.length || visibleCount > 4"
        class="flex justify-center gap-4 mt-12"
      >
        <button
          v-if="visibleCount > 4"
          @click="showLess"
          class="px-6 py-3 rounded-full border border-slate-600 text-slate-300 font-mono text-sm hover:bg-slate-800 hover:border-slate-400 hover:text-white transition-all duration-300"
        >
          Show Less
        </button>

        <button
          v-if="visibleCount < projects.length"
          @click="loadMore"
          class="px-8 py-3 rounded-full border border-neon-cyan/50 text-neon-cyan font-mono text-sm hover:bg-neon-cyan hover:text-space-900 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.1)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
        >
          Show More Projects
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick, onUnmounted } from "vue";
import { useCustomAnimations } from "~/composables/useCustomAnimations";

const { animateSlide, cleanupAnimations } = useCustomAnimations();

interface Project {
  titleKey: string;
  descKey: string;
  images: string[];
  stack: string[];
  liveLink: string;
  repoLink: string;
}

const visibleCount = ref(4);
const activeHoverKey = ref<string | null>(null);
const activeHoverIndex = ref(0);
let hoverInterval: ReturnType<typeof setInterval> | null = null;

const projects: Project[] = [
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

const visibleProjects = computed(() => {
  return projects.slice(0, visibleCount.value);
});

onMounted(() => {
  if (import.meta.client) {
    nextTick(() => {
      requestAnimationFrame(() => {
        const isMobile = window.innerWidth < 1024;

        for (let i = 0; i < visibleCount.value; i++) {
          const target = `#project-card-${i}`;

          if (isMobile) {
            animateSlide(target, 0, 100, 0, 0, target);
          } else {
            const xOffset = i % 2 === 0 ? -100 : 100;
            const delay = Math.floor(i / 2) * 0.2;
            animateSlide(target, xOffset, 0, delay, 0, "#projects-grid");
          }
        }
      });
    });
  }
});

const loadMore = () => {
  const oldLength = visibleCount.value;
  visibleCount.value += 4;

  nextTick(() => {
    requestAnimationFrame(() => {
      const isMobile = window.innerWidth < 1024;

      for (
        let i = oldLength;
        i < visibleCount.value && i < projects.length;
        i++
      ) {
        const target = `#project-card-${i}`;

        if (isMobile) {
          animateSlide(target, 0, 100, 0.1, 0, target);
        } else {
          const xOffset = i % 2 === 0 ? -100 : 100;
          const delay = Math.floor((i - oldLength) / 2) * 0.2;
          animateSlide(target, xOffset, 0, delay, 0, target);
        }
      }
    });
  });
};

const showLess = () => {
  visibleCount.value = 4;

  nextTick(() => {
    const gridEl = document.getElementById("projects-grid");
    if (gridEl) {
      const y = gridEl.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  });
};

const startHoverSlideshow = (projectKey: string, totalImages: number) => {
  if (totalImages <= 1) return;
  activeHoverKey.value = projectKey;
  activeHoverIndex.value = 0;
  hoverInterval = setInterval(() => {
    activeHoverIndex.value = (activeHoverIndex.value + 1) % totalImages;
  }, 2000);
};

const stopHoverSlideshow = () => {
  activeHoverKey.value = null;
  activeHoverIndex.value = 0;
  if (hoverInterval) {
    clearInterval(hoverInterval);
    hoverInterval = null;
  }
};

onUnmounted(() => {
  stopHoverSlideshow();
  if (import.meta.client) cleanupAnimations();
});

const imagesAssets = import.meta.glob("~/assets/image/*", {
  eager: true,
  import: "default",
});

const getImageUrl = (imageName: string | undefined) => {
  if (!imageName) return "";
  const path = `/assets/image/${imageName}`;
  for (const key in imagesAssets) {
    if (key.endsWith(path)) return imagesAssets[key] as string;
  }
  return "";
};
</script>

<style scoped>
.carousel-fade-enter-active,
.carousel-fade-leave-active {
  transition: opacity 0.5s ease;
}
.carousel-fade-enter-from,
.carousel-fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Optimasi Hardware Acceleration untuk GPU */
.hw-accel {
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
}

.hw-accel-card {
  will-change: transform, border-color, box-shadow;
  transform: translateZ(0);
  backface-visibility: hidden;
}

.hw-accel-img {
  will-change: transform;
  transform: translateZ(0);
}
</style>
