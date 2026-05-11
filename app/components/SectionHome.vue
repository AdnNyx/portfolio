<template>
  <section
    id="home"
    class="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden"
  >
    <div
      class="absolute top-1/4 left-0 w-[500px] h-[500px] bg-neon-cyan/20 rounded-full blur-[120px] pointer-events-none -z-10"
    ></div>

    <div
      class="max-w-7xl mx-auto px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10"
    >
      <div
        class="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
      >
        <h1
          class="hero-title opacity-0 text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight tracking-wide"
        >
          {{ $t("home.greeting") }} <br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple drop-shadow-neon-cyan"
          >
            Mahfudin Adnan
          </span>
        </h1>

        <h2
          class="hero-role opacity-0 text-2xl md:text-3xl font-display font-semibold text-slate-300 h-10"
        >
          {{ $t("home.role_prefix") }}
          <span class="text-neon-cyan typewriter-effect">{{
            currentText
          }}</span>
        </h2>

        <p
          class="hero-desc opacity-0 text-slate-400 text-lg leading-relaxed max-w-lg"
        >
          {{ $t("home.description") }}
        </p>

        <div class="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 pt-6">
          <div
            class="hero-cta opacity-0 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#about"
              class="flex justify-center items-center px-8 py-3.5 rounded-full bg-neon-cyan text-space-900 font-bold tracking-wide hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.5)] whitespace-nowrap"
            >
              {{ $t("home.more_about") }}
            </a>

            <a
              href="/cv/cv-adnan.pdf"
              download="CV_Mahfudin_Adnan.pdf"
              class="group flex justify-center items-center gap-2 px-8 py-3.5 rounded-full border-2 border-neon-cyan text-neon-cyan font-bold tracking-wide hover:bg-neon-cyan hover:text-space-900 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.1)] whitespace-nowrap"
            >
              <span>{{ $t("home.download_cv") }}</span>
              <Icon
                name="uil:file-download-alt"
                class="text-xl group-hover:animate-bounce"
              />
            </a>
          </div>
        </div>
      </div>

      <div class="relative flex justify-center items-center mt-12 lg:mt-0">
        <div
          class="absolute inset-0 bg-gradient-to-tr from-neon-purple/20 to-neon-cyan/20 blur-3xl rounded-full scale-75 pointer-events-none -z-10"
        ></div>

        <div
          class="hero-visual opacity-0 relative w-full max-w-[400px] md:max-w-[500px] aspect-square flex items-center justify-center z-10 hover:scale-105 transition-transform duration-700 ease-out"
        >
          <svg
            viewBox="0 0 400 400"
            class="w-full h-full drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            <defs>
              <linearGradient
                id="neonGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stop-color="#22d3ee" />
                <stop offset="100%" stop-color="#c084fc" />
              </linearGradient>
            </defs>

            <g
              stroke="#ffffff15"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M 200 150 L 200 50 L 100 50" />
              <path d="M 250 200 L 350 200 L 350 100" />
              <path d="M 200 250 L 200 350 L 300 350" />
              <path d="M 150 200 L 50 200 L 50 300" />
              <path d="M 150 150 L 80 80" />
              <path d="M 250 150 L 320 80" />
              <path d="M 250 250 L 320 320" />
              <path d="M 150 250 L 80 320" />
            </g>

            <g
              stroke="url(#neonGradient)"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="animated-circuits"
            >
              <path d="M 200 150 L 200 50 L 100 50" />
              <path d="M 250 200 L 350 200 L 350 100" />
              <path d="M 200 250 L 200 350 L 300 350" />
              <path d="M 150 200 L 50 200 L 50 300" />
              <path d="M 150 150 L 80 80" />
              <path d="M 250 150 L 320 80" />
              <path d="M 250 250 L 320 320" />
              <path d="M 150 250 L 80 320" />
            </g>

            <g transform="translate(150, 150)">
              <rect
                width="100"
                height="100"
                rx="12"
                fill="#0f172a"
                stroke="url(#neonGradient)"
                stroke-width="2"
              />
              <path
                d="M 20 -5 L 20 0 M 40 -5 L 40 0 M 60 -5 L 60 0 M 80 -5 L 80 0"
                stroke="#22d3ee"
                stroke-width="2"
              />
              <path
                d="M 20 100 L 20 105 M 40 100 L 40 105 M 60 100 L 60 105 M 80 100 L 80 105"
                stroke="#c084fc"
                stroke-width="2"
              />
              <path
                d="M -5 20 L 0 20 M -5 40 L 0 40 M -5 60 L 0 60 M -5 80 L 0 80"
                stroke="#22d3ee"
                stroke-width="2"
              />
              <path
                d="M 100 20 L 105 20 M 100 40 L 105 40 M 100 60 L 105 60 M 100 80 L 105 80"
                stroke="#c084fc"
                stroke-width="2"
              />
              <rect
                x="20"
                y="20"
                width="60"
                height="60"
                rx="6"
                fill="#1e293b"
                stroke="#22d3ee"
                stroke-width="1"
                class="chip-core"
              />
              <text
                x="50"
                y="58"
                font-family="'Courier New', monospace"
                font-size="28"
                font-weight="bold"
                fill="#22d3ee"
                text-anchor="middle"
                class="text-glow"
              >
                AI
              </text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";

const roles = [
  "Software Engineer",
  "AI Solutions Developer",
  "Full-Stack Architect",
];
const currentText = ref("");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
let timer: ReturnType<typeof setTimeout>;

const typeEffect = () => {
  const currentRole = roles[roleIndex] || "";
  if (isDeleting) {
    currentText.value = currentRole.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    currentText.value = currentRole.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }
  if (!isDeleting && charIndex === currentRole.length) {
    typingSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typingSpeed = 500;
  }
  timer = setTimeout(typeEffect, typingSpeed);
};

onMounted(() => {
  typeEffect();

  if (import.meta.client) {
    const tl = gsap.timeline({ delay: 0.1 });

    tl.fromTo(
      ".hero-title",
      { opacity: 0, scale: 1.1, filter: "blur(15px)" },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.8,
        ease: "power4.out",
      },
    );

    tl.fromTo(
      ".hero-role",
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" },
      "-=1.2",
    );

    tl.fromTo(
      ".hero-desc",
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" },
      "-=1.0",
    );

    tl.fromTo(
      [".hero-cta", ".hero-socials"],
      { opacity: 0 },
      { opacity: 1, duration: 1.0, stagger: 0.2, ease: "linear" },
      "-=0.8",
    );

    tl.fromTo(
      ".hero-visual",
      { opacity: 0, scale: 0.5, rotation: -45, y: 50 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        y: 0,
        duration: 2.0,
        ease: "power4.out",
      },
      "-=2.0",
    );
  }
});

onUnmounted(() => clearTimeout(timer));
</script>

<style scoped>
.hero-title {
  will-change: transform, opacity, filter;
}

.typewriter-effect {
  border-right: 2px solid #22d3ee;
  padding-right: 4px;
  animation: blink-cursor 0.8s step-end infinite;
}

@keyframes blink-cursor {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #22d3ee;
  }
}

.animated-circuits path {
  stroke-dasharray: 15 150;
  animation: dataFlow 3s linear infinite;
  will-change: stroke-dashoffset;
  transform: translateZ(0);
}

@keyframes dataFlow {
  from {
    stroke-dashoffset: 165;
  }
  to {
    stroke-dashoffset: 0;
  }
}

.chip-core {
  animation: pulse-core 2s ease-in-out infinite alternate;
  will-change: fill, box-shadow;
  transform: translateZ(0);
}

@keyframes pulse-core {
  0% {
    fill: #1e293b;
    box-shadow: 0 0 0 rgba(34, 211, 238, 0);
  }
  100% {
    fill: rgba(34, 211, 238, 0.2);
  }
}

.text-glow {
  text-shadow: 0 0 10px rgba(34, 211, 238, 0.6);
}
</style>
