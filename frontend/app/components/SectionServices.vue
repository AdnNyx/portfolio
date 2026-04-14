<template>
  <section
    id="services-pinned-container"
    class="relative text-white w-full h-screen overflow-hidden flex"
  >
    <div
      class="absolute left-0 top-0 w-full md:w-1/2 h-full flex items-center justify-center z-10"
    >
      <div
        class="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div
          class="w-[400px] h-[400px] rounded-full blur-[120px] transition-all duration-1000 ease-in-out"
          :class="{
            'bg-neon-cyan/20 scale-100': activeIndex === 0,
            'bg-white/10 scale-110': activeIndex === 1,
            'bg-neon-purple/20 scale-90': activeIndex === 2,
          }"
        ></div>
      </div>

      <div class="w-full h-full relative">
        <ClientOnly>
          <Service3DScene :active-index="activeIndex" />
        </ClientOnly>
      </div>
    </div>

    <div
      class="relative w-full md:w-1/2 h-full flex items-center justify-center z-20 px-8 lg:px-16 ml-auto perspective-1000"
    >
      <div
        id="card-0"
        class="absolute w-[85%] md:w-3/4 max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-2xl overflow-hidden"
      >
        <div
          class="absolute -top-20 -right-20 w-48 h-48 bg-neon-cyan/20 blur-3xl rounded-full pointer-events-none"
        ></div>

        <span
          class="text-neon-cyan font-mono text-xs tracking-[0.2em] uppercase mb-4 block opacity-80"
        >
          01 // Expertise
        </span>
        <Icon
          name="uil:laptop"
          class="text-6xl text-neon-cyan mb-6 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"
        />
        <h3
          class="text-3xl font-display font-semibold mb-4 text-white tracking-wide"
        >
          {{ $t("services.dev_title") }}
        </h3>
        <p class="text-slate-400 text-lg leading-relaxed font-light">
          {{ $t("services.dev_desc") }}
        </p>
      </div>

      <div
        id="card-1"
        class="absolute w-[85%] md:w-3/4 max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-2xl overflow-hidden invisible"
      >
        <div
          class="absolute -bottom-20 -right-20 w-48 h-48 bg-white/10 blur-3xl rounded-full pointer-events-none"
        ></div>

        <span
          class="text-white font-mono text-xs tracking-[0.2em] uppercase mb-4 block opacity-60"
        >
          02 // Innovation
        </span>
        <Icon
          name="uil:robot"
          class="text-6xl text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
        />
        <h3
          class="text-3xl font-display font-semibold mb-4 text-white tracking-wide"
        >
          {{ $t("services.ai_title") }}
        </h3>
        <p class="text-slate-400 text-lg leading-relaxed font-light">
          {{ $t("services.ai_desc") }}
        </p>
      </div>

      <div
        id="card-2"
        class="absolute w-[85%] md:w-3/4 max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-2xl overflow-hidden invisible"
      >
        <div
          class="absolute -top-20 -left-20 w-48 h-48 bg-neon-purple/20 blur-3xl rounded-full pointer-events-none"
        ></div>

        <span
          class="text-neon-purple font-mono text-xs tracking-[0.2em] uppercase mb-4 block opacity-80"
        >
          03 // Future
        </span>
        <Icon
          name="uil:cube"
          class="text-6xl text-neon-purple mb-6 drop-shadow-[0_0_15px_rgba(192,132,252,0.5)]"
        />
        <h3
          class="text-3xl font-display font-semibold mb-4 text-white tracking-wide"
        >
          {{ $t("services.blockchain_title") }}
        </h3>
        <p class="text-slate-400 text-lg leading-relaxed font-light">
          {{ $t("services.blockchain_desc") }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const activeIndex = ref(0);

onMounted(() => {
  if (import.meta.server) return;

  gsap.registerPlugin(ScrollTrigger);

  gsap.set("#card-1", { autoAlpha: 0, y: 80, scale: 0.95 });
  gsap.set("#card-2", { autoAlpha: 0, y: 80, scale: 0.95 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#services-pinned-container",
      start: "top top",
      end: "+=300%",
      pin: true,
      scrub: 1.5,
      onUpdate: (self) => {
        const progress = self.progress;
        if (progress < 0.3) activeIndex.value = 0;
        else if (progress >= 0.3 && progress < 0.6) activeIndex.value = 1;
        else activeIndex.value = 2;
      },
    },
  });

  tl.to("#card-0", {
    autoAlpha: 0,
    y: -80,
    scale: 0.95,
    duration: 1,
    ease: "power2.inOut",
  })
    .to(
      "#card-1",
      { autoAlpha: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" },
      "<0.4",
    )
    .to({}, { duration: 0.5 })
    .to("#card-1", {
      autoAlpha: 0,
      y: -80,
      scale: 0.95,
      duration: 1,
      ease: "power2.inOut",
    })
    .to(
      "#card-2",
      { autoAlpha: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" },
      "<0.4",
    );
});

onUnmounted(() => {
  if (import.meta.client) {
    ScrollTrigger.getAll().forEach((t) => t.kill());
  }
});
</script>
