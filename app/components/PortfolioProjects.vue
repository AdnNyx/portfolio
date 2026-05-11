<template>
  <div>
    <transition name="fade" mode="out-in">
      <div v-if="!selectedProject" key="grid">
        <transition-group
          name="list"
          tag="div"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          appear
        >
          <div
            v-for="(project, index) in visibleProjects"
            :key="project.titleKey"
            @click="openProject(project)"
            @mouseenter="
              startHoverSlideshow(
                project.titleKey,
                project.images ? project.images.length : 0,
              )
            "
            @mouseleave="stopHoverSlideshow"
            :style="{ '--stagger-delay': `${(index % 3) * 0.15}s` }"
            class="relative bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col group hover:-translate-y-2 hover:border-neon-cyan/50 hover:shadow-[0_10px_40px_rgba(34,211,238,0.15)] hover-transition overflow-hidden cursor-pointer hw-accel"
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
                        activeHoverKey === project.titleKey
                          ? activeHoverIndex
                          : 0
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
                      class="absolute inset-0 w-full h-full object-cover object-center"
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
                class="absolute inset-0 bg-neon-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay pointer-events-none"
              ></div>
            </div>

            <div>
              <h3
                class="text-xl font-display font-semibold mb-2 group-hover:text-neon-cyan transition-colors line-clamp-1"
              >
                {{ $t(project.titleKey) }}
              </h3>
              <p class="text-slate-400 text-sm line-clamp-2 mb-4">
                {{ $t(project.descKey) }}
              </p>
            </div>

            <div
              class="mt-auto flex justify-between items-center text-neon-cyan font-mono text-xs"
            >
              <span>View Details</span>
              <Icon
                name="uil:arrow-right"
                class="group-hover:translate-x-2 transition-transform"
              />
            </div>
          </div>
        </transition-group>

        <transition name="fade" appear>
          <div
            v-if="visibleCount < projects.length"
            class="flex justify-center mt-12"
            style="animation-delay: 0.6s"
          >
            <button
              @click="loadMore"
              class="px-8 py-3 rounded-full border border-neon-cyan/50 text-neon-cyan font-mono text-sm hover:bg-neon-cyan hover:text-space-900 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.1)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
            >
              Show More Projects
            </button>
          </div>
        </transition>
      </div>

      <div
        v-else
        key="detail"
        class="bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative"
      >
        <button
          @click="closeProject"
          class="css-stagger-1 flex items-center gap-2 text-slate-400 hover:text-neon-cyan transition-colors mb-8 font-mono text-sm w-max"
        >
          <Icon name="uil:arrow-left" class="text-lg" /> Back to Projects
        </button>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div
            class="css-stagger-2 w-full aspect-[2/1] lg:aspect-video bg-space-800 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] group cursor-crosshair hw-accel"
            @mousemove="handleMouseMove"
            @mouseenter="isHovering = true"
            @mouseleave="isHovering = false"
            ref="imageContainer"
          >
            <template
              v-if="selectedProject.images && selectedProject.images.length > 0"
            >
              <transition name="carousel-fade" mode="out-in">
                <img
                  :key="currentImageIndex"
                  :src="getImageUrl(selectedProject.images[currentImageIndex])"
                  :alt="$t(selectedProject.titleKey)"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                />
              </transition>

              <div
                class="absolute inset-0 bg-gradient-to-tr from-neon-cyan/10 to-neon-purple/10 pointer-events-none z-10"
              ></div>

              <div
                v-show="isHovering"
                class="absolute inset-0 pointer-events-none z-20"
                :style="{ clipPath: `circle(75px at ${mouseX}px ${mouseY}px)` }"
              >
                <img
                  :src="getImageUrl(selectedProject.images[currentImageIndex])"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  :style="{
                    transform: 'scale(1.8)',
                    transformOrigin: `${zoomX}% ${zoomY}%`,
                  }"
                />
              </div>

              <div
                v-show="isHovering"
                class="absolute pointer-events-none rounded-full border border-neon-cyan/70 shadow-[inset_0_0_15px_rgba(34,211,238,0.4),0_0_20px_rgba(34,211,238,0.5)] z-30 transition-opacity duration-300"
                :style="{
                  width: '150px',
                  height: '150px',
                  left: `${mouseX - 75}px`,
                  top: `${mouseY - 75}px`,
                  opacity: isHovering ? 1 : 0,
                }"
              >
                <div
                  class="absolute inset-0 flex items-center justify-center opacity-70"
                >
                  <div class="w-1.5 h-1.5 rounded-full bg-neon-cyan"></div>
                </div>
              </div>

              <template v-if="selectedProject.images.length > 1">
                <button
                  @click.stop="prevImage"
                  class="absolute left-4 w-10 h-10 rounded-full bg-space-900/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-neon-cyan hover:text-space-900 hover:border-neon-cyan transition-all opacity-0 group-hover:opacity-100 z-40"
                >
                  <Icon name="uil:angle-left" class="text-2xl" />
                </button>
                <button
                  @click.stop="nextImage"
                  class="absolute right-4 w-10 h-10 rounded-full bg-space-900/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-neon-cyan hover:text-space-900 hover:border-neon-cyan transition-all opacity-0 group-hover:opacity-100 z-40"
                >
                  <Icon name="uil:angle-right" class="text-2xl" />
                </button>

                <div class="absolute bottom-4 flex gap-2 z-40">
                  <button
                    v-for="(_, index) in selectedProject.images"
                    :key="index"
                    @click.stop="currentImageIndex = index"
                    class="h-2 rounded-full transition-all duration-300"
                    :class="
                      index === currentImageIndex
                        ? 'w-6 bg-neon-cyan'
                        : 'w-2 bg-white/40 hover:bg-white'
                    "
                  ></button>
                </div>
              </template>
            </template>
          </div>

          <div class="flex flex-col justify-center">
            <h3
              class="css-stagger-3 text-3xl md:text-4xl font-display font-bold text-white mb-4"
            >
              {{ $t(selectedProject.titleKey) }}
            </h3>

            <div class="css-stagger-4 flex flex-wrap gap-2 mb-6">
              <span
                v-for="tech in selectedProject.stack"
                :key="tech"
                class="px-3 py-1 bg-slate-800 border border-white/10 rounded-full text-xs font-mono text-neon-cyan uppercase"
              >
                {{ tech }}
              </span>
            </div>

            <p
              class="css-stagger-5 text-slate-300 text-lg leading-relaxed mb-10"
            >
              {{ $t(selectedProject.descKey) }}
            </p>

            <div class="css-stagger-6 flex flex-wrap gap-4 mt-auto">
              <a
                v-if="
                  selectedProject.liveLink &&
                  selectedProject.liveLink.startsWith('http')
                "
                :href="selectedProject.liveLink"
                target="_blank"
                class="flex items-center gap-2 px-6 py-3 bg-neon-cyan/10 border border-neon-cyan/50 text-neon-cyan rounded-xl hover:bg-neon-cyan hover:text-space-900 transition-all font-semibold font-display"
              >
                <Icon name="uil:external-link-alt" class="text-xl" /> Visit
                Website
              </a>

              <NuxtLink
                v-else-if="selectedProject.liveLink"
                :to="selectedProject.liveLink"
                class="flex items-center gap-2 px-6 py-3 bg-neon-purple/10 border border-neon-purple/50 text-neon-purple rounded-xl hover:bg-neon-purple hover:text-white transition-all font-semibold font-display"
              >
                <Icon name="uil:rocket" class="text-xl" /> Coming Soon
              </NuxtLink>

              <a
                v-if="selectedProject.repoLink"
                :href="selectedProject.repoLink"
                target="_blank"
                class="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/20 text-white rounded-xl hover:bg-white hover:text-space-900 transition-all font-semibold font-display"
              >
                <Icon name="uil:github" class="text-xl" /> Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface Project {
  titleKey: string;
  descKey: string;
  images: string[];
  stack: string[];
  liveLink: string;
  repoLink: string;
}

const selectedProject = ref<Project | null>(null);
const currentImageIndex = ref(0);
const visibleCount = ref(3);
const imageContainer = ref<HTMLElement | null>(null);
const isHovering = ref(false);
const zoomX = ref(50);
const zoomY = ref(50);
const mouseX = ref(0);
const mouseY = ref(0);
const activeHoverKey = ref<string | null>(null);
const activeHoverIndex = ref(0);
let hoverInterval: ReturnType<typeof setInterval> | null = null;

// Data Projects
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
    liveLink: "-alhidayah-kemuning.vercel.app",
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

const handleMouseMove = (e: MouseEvent) => {
  if (!imageContainer.value) return;
  const rect = imageContainer.value.getBoundingClientRect();
  mouseX.value = e.clientX - rect.left;
  mouseY.value = e.clientY - rect.top;
  zoomX.value = (mouseX.value / rect.width) * 100;
  zoomY.value = (mouseY.value / rect.height) * 100;
};

const loadMore = () => {
  visibleCount.value += 3;
};

const openProject = (project: Project) => {
  stopHoverSlideshow();
  selectedProject.value = project;
  currentImageIndex.value = 0;
  isHovering.value = false;
};

const closeProject = () => {
  selectedProject.value = null;
};

const nextImage = () => {
  if (selectedProject.value && selectedProject.value.images.length > 0) {
    currentImageIndex.value =
      (currentImageIndex.value + 1) % selectedProject.value.images.length;
  }
};

const prevImage = () => {
  if (selectedProject.value && selectedProject.value.images.length > 0) {
    currentImageIndex.value =
      (currentImageIndex.value - 1 + selectedProject.value.images.length) %
      selectedProject.value.images.length;
  }
};

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
/* Vue Fade */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(15px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}

/* Vue List Transition */
.list-move {
  transition: transform 0.8s ease;
}

.list-enter-active {
  transition: opacity 1s ease-in-out;
  transition-delay: var(--stagger-delay, 0s);
}

.list-leave-active {
  transition: opacity 0.4s ease-in-out;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}

.carousel-fade-enter-active,
.carousel-fade-leave-active {
  transition: opacity 0.5s ease;
}
.carousel-fade-enter-from,
.carousel-fade-leave-to {
  opacity: 0;
}

.hover-transition {
  transition-property: transform, border-color, box-shadow;
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom CSS Stagger Animations */
.css-stagger-1,
.css-stagger-2,
.css-stagger-3,
.css-stagger-4,
.css-stagger-5,
.css-stagger-6 {
  opacity: 0;
  animation: smoothReveal 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.css-stagger-1 {
  animation-delay: 0.1s;
}
.css-stagger-2 {
  animation-delay: 0.2s;
}
.css-stagger-3 {
  animation-delay: 0.3s;
}
.css-stagger-4 {
  animation-delay: 0.4s;
}
.css-stagger-5 {
  animation-delay: 0.5s;
}
.css-stagger-6 {
  animation-delay: 0.6s;
}

@keyframes smoothReveal {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Optimasi Akselerasi Hardware */
.hw-accel {
  will-change: transform, opacity;
  transform: translateZ(0);
}
</style>
