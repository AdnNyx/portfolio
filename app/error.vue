<template>
  <div
    class="relative bg-space-900 text-white w-full min-h-screen flex flex-col items-center justify-center overflow-hidden font-sans"
  >
    <div
      class="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-neon-purple/20 blur-[120px] rounded-full pointer-events-none"
    ></div>
    <div
      class="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-neon-cyan/20 blur-[150px] rounded-full pointer-events-none"
    ></div>

    <div class="relative z-10 w-full px-6 flex flex-col items-center">
      <div
        class="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mb-8 drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]"
      >
        <svg
          class="absolute inset-0 w-full h-full ring-spin-slow origin-center"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="95"
            fill="none"
            stroke="#A855F7"
            stroke-width="1"
            stroke-dasharray="4 8"
            opacity="0.4"
          />
          <circle
            cx="100"
            cy="100"
            r="85"
            fill="none"
            stroke="#22D3EE"
            stroke-width="2"
            stroke-dasharray="40 20 10 20"
            opacity="0.6"
          />
        </svg>

        <svg
          class="absolute inset-0 w-full h-full ring-spin-reverse origin-center"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="#A855F7"
            stroke-width="3"
            stroke-dasharray="50 30"
            opacity="0.8"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="#ffffff"
            stroke-width="1"
            stroke-dasharray="2 6"
            opacity="0.3"
          />
        </svg>

        <svg
          class="absolute inset-0 w-full h-full ring-pulse origin-center"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="45"
            fill="none"
            stroke="#22D3EE"
            stroke-width="1"
            stroke-dasharray="10 10"
            opacity="0.5"
          />
        </svg>

        <h1
          class="relative z-10 text-6xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-neon-cyan to-neon-purple drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
        >
          404
        </h1>
      </div>

      <div
        class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl px-8 py-8 md:py-10 mb-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-lg mx-auto relative group floating-card"
      >
        <div
          class="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-70"
        ></div>

        <h2
          class="text-2xl md:text-3xl font-display font-semibold mb-4 text-white flex items-center justify-center gap-3"
        >
          <div
            class="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"
          ></div>
          Target Tidak <span class="text-neon-cyan">Ditemukan</span>
        </h2>

        <p class="text-slate-400 font-mono text-sm leading-relaxed text-center">
          [ STATUS KODE:
          <span class="text-neon-purple">{{ error?.statusCode || "404" }}</span>
          ] <br /><br />
          Sektor URL yang Anda masuki belum dipetakan atau sedang dalam
          konstruksi. Menginisiasi protokol penarikan otomatis ke sektor aman.
        </p>
      </div>

      <button
        @click="goBack"
        class="relative overflow-hidden flex items-center gap-3 px-8 py-4 rounded-full bg-neon-cyan/10 border border-neon-cyan/50 text-neon-cyan font-mono font-semibold hover:bg-neon-cyan hover:text-space-900 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:-translate-y-1 group"
      >
        <span class="relative z-10 flex items-center gap-2">
          <Icon
            name="uil:rocket"
            class="text-xl group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300"
          />
          Evakuasi Manual ({{ countdown }}s)
        </span>

        <div
          class="absolute left-0 bottom-0 top-0 bg-neon-cyan/20 transition-all ease-linear"
          :style="{
            width: `${(countdown / 10) * 100}%`,
            transitionDuration: '1s',
          }"
        ></div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "#app";

const props = defineProps({
  error: Object,
});

const router = useRouter();
const countdown = ref(10);
let timer: ReturnType<typeof setInterval> | null = null;

const goBack = async () => {
  if (timer) clearInterval(timer);
  await clearError();

  if (window.history.state && window.history.state.back) {
    router.back();
  } else {
    router.push("/");
  }
};

onMounted(() => {
  timer = setInterval(() => {
    countdown.value--;
    if (countdown.value <= 0) {
      goBack();
    }
  }, 1000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<style scoped>
/* 1. Animasi Putaran Lingkaran SVG (HUD Effect) */
.ring-spin-slow {
  animation: spin 20s linear infinite;
}
.ring-spin-reverse {
  animation: spin-reverse 15s linear infinite;
}
.ring-pulse {
  animation: spin-pulse 8s ease-in-out infinite alternate;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes spin-reverse {
  100% {
    transform: rotate(-360deg);
  }
}
@keyframes spin-pulse {
  0% {
    transform: rotate(0deg) scale(0.95);
  }
  100% {
    transform: rotate(180deg) scale(1.05);
  }
}

/* 2. Animasi Mengambang Halus pada Kotak Teks */
.floating-card {
  animation: floatCard 6s ease-in-out infinite;
}

@keyframes floatCard {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
