<template>
  <section
    id="home"
    class="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden"
  >
    <div
      class="absolute top-1/4 left-0 w-[500px] h-[500px] bg-neon-cyan/20 rounded-full blur-[120px] pointer-events-none -z-10"
    ></div>

    <div
      class="max-w-6xl mx-auto px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10"
    >
      <div
        class="flex flex-col items-center lg:items-start text-center lg:text-left space-y-5"
      >
        <h1
          class="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight tracking-wide"
        >
          {{ $t("home.greeting") }} <br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple drop-shadow-neon-cyan"
          >
            Mahfudin Adnan
          </span>
        </h1>
        <h2
          class="text-2xl md:text-3xl font-display font-semibold text-slate-300 h-10"
        >
          {{ $t("home.role_prefix") }}
          <span class="text-neon-cyan typewriter-effect">{{
            currentText
          }}</span>
        </h2>
        <p class="text-slate-400 text-lg leading-relaxed max-w-lg">
          {{ $t("home.description") }}
        </p>

        <div class="flex items-center space-x-4 pt-4">
          <a
            href="https://github.com/AdnNyx/"
            target="_blank"
            class="w-12 h-12 rounded-full border-2 border-neon-cyan/50 flex items-center justify-center text-neon-cyan hover:bg-neon-cyan hover:text-space-900 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
          >
            <Icon name="uil:github" class="text-2xl" />
          </a>
          <a
            href="#"
            class="w-12 h-12 rounded-full border-2 border-neon-cyan/50 flex items-center justify-center text-neon-cyan hover:bg-neon-cyan hover:text-space-900 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
          >
            <Icon name="uil:linkedin" class="text-2xl" />
          </a>
        </div>

        <div class="pt-6">
          <a
            href="#about"
            class="inline-block px-8 py-3.5 rounded-full bg-neon-cyan text-space-900 font-bold tracking-wide hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
          >
            {{ $t("home.more_about") }}
          </a>
        </div>
      </div>

      <div class="relative flex justify-center items-center mt-12 lg:mt-0">
        <div
          class="absolute inset-0 bg-gradient-to-tr from-neon-purple/20 to-neon-cyan/20 blur-3xl rounded-full scale-75 pointer-events-none -z-10"
        ></div>

        <div
          class="relative w-full max-w-[400px] md:max-w-[500px] aspect-square flex items-center justify-center z-10 hover:scale-105 transition-transform duration-700 ease-out"
        >
          <svg
            viewBox="0 0 400 400"
            class="w-full h-full drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]"
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

              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
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

            <circle cx="100" cy="50" r="4" fill="#c084fc" class="node-pulse" />
            <circle
              cx="350"
              cy="100"
              r="4"
              fill="#22d3ee"
              class="node-pulse"
              style="animation-delay: 0.5s"
            />
            <circle
              cx="300"
              cy="350"
              r="4"
              fill="#c084fc"
              class="node-pulse"
              style="animation-delay: 1s"
            />
            <circle
              cx="50"
              cy="300"
              r="4"
              fill="#22d3ee"
              class="node-pulse"
              style="animation-delay: 1.5s"
            />
            <circle
              cx="80"
              cy="80"
              r="4"
              fill="#22d3ee"
              class="node-pulse"
              style="animation-delay: 0.2s"
            />
            <circle
              cx="320"
              cy="80"
              r="4"
              fill="#c084fc"
              class="node-pulse"
              style="animation-delay: 0.7s"
            />
            <circle
              cx="320"
              cy="320"
              r="4"
              fill="#22d3ee"
              class="node-pulse"
              style="animation-delay: 1.2s"
            />
            <circle
              cx="80"
              cy="320"
              r="4"
              fill="#c084fc"
              class="node-pulse"
              style="animation-delay: 1.7s"
            />

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
                filter="url(#glow)"
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

onMounted(() => typeEffect());
onUnmounted(() => clearTimeout(timer));
</script>

<style scoped>
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

/* Animasi Sirkuit (Jalur Data) */
.animated-circuits path {
  /* Membuat garis putus-putus pendek yang mengalir */
  stroke-dasharray: 15 150;
  animation: dataFlow 3s linear infinite;
}

@keyframes dataFlow {
  from {
    stroke-dashoffset: 165;
  }
  to {
    stroke-dashoffset: 0;
  }
}

/* Animasi Inti Chip */
.chip-core {
  animation: pulse-core 2s ease-in-out infinite alternate;
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

/* Animasi Kedipan Titik Node */
.node-pulse {
  animation: node-blink 2s ease-in-out infinite alternate;
}

@keyframes node-blink {
  0% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1.2);
  }
}
</style>
