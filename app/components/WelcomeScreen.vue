<template>
  <transition name="curtain-up">
    <div
      v-if="isLoading"
      class="fixed inset-0 z-[9999] bg-[#0b1120] overflow-hidden flex items-center justify-start pointer-events-auto"
    >
      <div
        class="absolute inset-0 opacity-30 bg-[radial-gradient(#334155_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"
      ></div>

      <div
        class="absolute top-0 bottom-0 w-32 md:w-56 bg-[#0f172a]/50 backdrop-blur-xl border-r border-white/10 flex flex-col items-center justify-center shadow-[20px_0_40px_rgba(0,0,0,0.8)] z-10 will-change-transform"
        :style="{
          transform: `translate3d(calc(${visualProgress}vw - ${visualProgress}%), 0, 0)`,
        }"
      >
        <div
          class="flex flex-col items-center justify-center -rotate-90 whitespace-nowrap"
        >
          <span
            class="font-display font-black text-6xl md:text-8xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-300 to-slate-600"
          >
            {{ displayProgress
            }}<span class="text-4xl md:text-6xl text-neon-cyan/40">%</span>
          </span>

          <span
            v-if="displayProgress === 100"
            class="text-neon-cyan/80 font-mono text-xs md:text-sm font-bold uppercase tracking-[0.3em] mt-2 animate-pulse drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]"
          >
            System Ready
          </span>
          <span
            v-else
            class="text-neon-purple/50 font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest mt-2"
          >
            Establishing Uplink...
          </span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const displayProgress = ref(0);
const visualProgress = ref(0);
const isLoading = ref(true);

onMounted(() => {
  document.body.style.overflow = "hidden";

  const duration = 2500;
  const startTime = performance.now();

  const updateProgress = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    let p = Math.min((elapsed / duration) * 100, 100);

    const easeOutCubic = 1 - Math.pow(1 - p / 100, 3);

    visualProgress.value = easeOutCubic * 100;
    displayProgress.value = Math.floor(easeOutCubic * 100);

    if (elapsed < duration) {
      requestAnimationFrame(updateProgress);
    } else {
      visualProgress.value = 100;
      displayProgress.value = 100;

      setTimeout(() => {
        isLoading.value = false;

        setTimeout(() => {
          document.body.style.overflow = "";
        }, 1000);
      }, 600);
    }
  };

  requestAnimationFrame(updateProgress);
});
</script>

<style scoped>
/* Transisi elegan untuk mengangkat layar */
.curtain-up-leave-active {
  transition: transform 1.2s cubic-bezier(0.76, 0, 0.24, 1);
}

.curtain-up-leave-to {
  transform: translateY(-100%);
}
</style>
