<template>
  <section
    id="contact"
    class="py-24 relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden font-display z-10"
  >
    <div
      class="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[120px] pointer-events-none -z-10"
    ></div>

    <div class="max-w-7xl mx-auto px-8 lg:px-12 w-full z-10">
      <div
        class="flex flex-col items-center lg:items-start text-center lg:text-left mb-16"
      >
        <h2
          class="contact-anim opacity-0 text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wide"
        >
          {{ $t("contact.heading_1") }} <br class="hidden lg:block" />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple"
          >
            {{ $t("contact.heading_2") }}
          </span>
        </h2>
        <div
          class="contact-anim opacity-0 w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto lg:mx-0 rounded-full mb-4"
        ></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div class="contact-left opacity-0 w-full flex flex-col justify-center">
          <div
            class="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden group"
          >
            <div
              class="absolute -top-20 -right-20 w-40 h-40 bg-neon-cyan/10 rounded-full blur-3xl transition-all duration-700 group-hover:bg-neon-cyan/20"
            ></div>

            <form
              @submit.prevent="submitForm"
              class="flex flex-col gap-6 relative z-10"
            >
              <div class="grid grid-cols-1 gap-6">
                <div
                  class="relative bg-slate-950/50 rounded-xl border border-slate-700/50 overflow-hidden focus-within:border-neon-cyan focus-within:ring-1 focus-within:ring-neon-cyan transition-all duration-300"
                >
                  <input
                    type="text"
                    v-model="formData.name"
                    required
                    id="name"
                    class="peer w-full bg-transparent px-5 pt-7 pb-2 text-white placeholder-transparent focus:outline-none custom-input"
                    :placeholder="$t('contact.form.name_label')"
                  />
                  <label
                    for="name"
                    class="absolute left-5 top-4 text-[10px] font-mono text-slate-400 uppercase tracking-widest transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-neon-cyan pointer-events-none"
                  >
                    {{ $t("contact.form.name_label") }}
                  </label>
                </div>

                <div
                  class="relative bg-slate-950/50 rounded-xl border border-slate-700/50 overflow-hidden focus-within:border-neon-cyan focus-within:ring-1 focus-within:ring-neon-cyan transition-all duration-300"
                >
                  <input
                    type="email"
                    v-model="formData.email"
                    required
                    id="email"
                    class="peer w-full bg-transparent px-5 pt-7 pb-2 text-white placeholder-transparent focus:outline-none custom-input"
                    :placeholder="$t('contact.form.email_label')"
                  />
                  <label
                    for="email"
                    class="absolute left-5 top-4 text-[10px] font-mono text-slate-400 uppercase tracking-widest transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-neon-cyan pointer-events-none"
                  >
                    {{ $t("contact.form.email_label") }}
                  </label>
                </div>
              </div>

              <div
                class="relative bg-slate-950/50 rounded-xl border border-slate-700/50 overflow-hidden focus-within:border-neon-cyan focus-within:ring-1 focus-within:ring-neon-cyan transition-all duration-300"
              >
                <input
                  type="text"
                  v-model="formData.subject"
                  required
                  id="subject"
                  class="peer w-full bg-transparent px-5 pt-7 pb-2 text-white placeholder-transparent focus:outline-none custom-input"
                  :placeholder="$t('contact.form.subject_label')"
                />
                <label
                  for="subject"
                  class="absolute left-5 top-4 text-[10px] font-mono text-slate-400 uppercase tracking-widest transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-neon-cyan pointer-events-none"
                >
                  {{ $t("contact.form.subject_label") }}
                </label>
              </div>

              <div
                class="relative bg-slate-950/50 rounded-xl border border-slate-700/50 overflow-hidden focus-within:border-neon-cyan focus-within:ring-1 focus-within:ring-neon-cyan transition-all duration-300"
              >
                <textarea
                  v-model="formData.message"
                  rows="4"
                  required
                  id="message"
                  class="peer w-full bg-transparent px-5 pt-7 pb-3 text-white resize-none placeholder-transparent focus:outline-none custom-input"
                  :placeholder="$t('contact.form.message_label')"
                ></textarea>
                <label
                  for="message"
                  class="absolute left-5 top-4 text-[10px] font-mono text-slate-400 uppercase tracking-widest transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-neon-cyan pointer-events-none"
                >
                  {{ $t("contact.form.message_label") }}
                </label>
              </div>

              <transition name="fade">
                <div
                  v-if="statusMessage"
                  class="flex items-center gap-2 px-4 py-3 rounded-lg bg-slate-950/80 border"
                  :class="
                    isSuccess
                      ? 'border-green-500/50 text-green-400'
                      : 'border-red-500/50 text-red-400'
                  "
                >
                  <Icon
                    :name="
                      isSuccess ? 'uil:check-circle' : 'uil:exclamation-circle'
                    "
                    class="text-lg"
                  />
                  <p class="font-mono text-xs tracking-wide">
                    {{ statusMessage }}
                  </p>
                </div>
              </transition>

              <div class="pt-2">
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-neon-cyan text-space-900 font-bold tracking-widest uppercase hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  <span>{{
                    isSubmitting
                      ? $t("contact.form.submitting")
                      : $t("contact.form.submit")
                  }}</span>
                  <Icon
                    v-if="isSubmitting"
                    name="uil:spinner"
                    class="animate-spin text-xl"
                  />
                  <Icon
                    v-else
                    name="uil:message"
                    class="text-xl group-hover:scale-110 transition-transform"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div
          class="contact-right opacity-0 relative flex flex-col justify-center items-center lg:items-start mt-12 lg:mt-0 w-full"
        >
          <div
            ref="mapContainer"
            :class="[
              'w-full relative flex justify-center lg:justify-start mb-12',
              { 'map-is-visible': isMapVisible },
            ]"
          >
            <svg viewBox="0 0 840 400" class="w-full max-w-[650px] h-auto">
              <circle
                v-for="(dot, index) in mapDots"
                :key="index"
                :cx="dot.x * 12 + 6"
                :cy="dot.y * 12 + 6"
                r="4.5"
                :class="getDotClass(dot.type)"
                :style="
                  dot.type === '1' ? `animation-delay: ${dot.delay}s` : ''
                "
              />
            </svg>
          </div>

          <div class="text-center lg:text-left w-full">
            <h3
              class="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center justify-center lg:justify-start gap-3"
            >
              <Icon name="uil:map-marker-alt" class="text-neon-cyan" />
              {{ $t("contact.info.title") }}
            </h3>
            <p
              class="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mt-4"
            >
              {{ $t("contact.info.desc") }}
            </p>

            <div class="mt-10">
              <p
                class="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4"
              >
                {{ $t("contact.info.socials") }}
              </p>
              <div
                class="flex flex-wrap items-center justify-center lg:justify-start gap-4"
              >
                <a
                  href="https://github.com/AdnNyx/"
                  target="_blank"
                  aria-label="GitHub"
                  class="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)] transition-all duration-300"
                  ><Icon name="uil:github" class="text-2xl"
                /></a>
                <a
                  href="#"
                  target="_blank"
                  aria-label="LinkedIn"
                  class="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(10,102,194,0.2)] transition-all duration-300"
                  ><Icon name="uil:linkedin" class="text-2xl"
                /></a>
                <a
                  href="mailto:mahfudinadnan@gmail.com"
                  aria-label="Email"
                  class="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-neon-cyan hover:border-neon-cyan hover:text-space-900 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(34,211,238,0.2)] transition-all duration-300"
                  ><Icon name="uil:envelope" class="text-2xl"
                /></a>
                <a
                  href="#"
                  target="_blank"
                  aria-label="Instagram"
                  class="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:border-transparent hover:text-white hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(188,24,136,0.2)] transition-all duration-300"
                  ><Icon name="uil:instagram" class="text-2xl"
                /></a>
                <a
                  href="#"
                  target="_blank"
                  aria-label="TikTok"
                  class="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-black hover:border-neon-cyan hover:text-white hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(34,211,238,0.2)] transition-all duration-300"
                  ><Icon name="fa6-brands:tiktok" class="text-[20px]"
                /></a>
                <a
                  href="#"
                  target="_blank"
                  aria-label="YouTube"
                  class="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,0,0,0.2)] transition-all duration-300"
                  ><Icon name="uil:youtube" class="text-2xl"
                /></a>
                <a
                  href="#"
                  target="_blank"
                  aria-label="Facebook"
                  class="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(24,119,242,0.2)] transition-all duration-300"
                  ><Icon name="uil:facebook-f" class="text-2xl"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Language
const { t } = useI18n();

// Observer
const mapContainer = ref<HTMLElement | null>(null);
const isMapVisible = ref(false);

onMounted(() => {
  if (import.meta.client) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isMapVisible.value = true;
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );

    if (mapContainer.value) {
      observer.observe(mapContainer.value);
    }
  }
});

// GSAP
onMounted(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        once: true,
      },
    });

    tl.fromTo(
      ".contact-anim",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out" },
    );

    tl.fromTo(
      ".contact-left",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
      "-=0.8",
    );

    tl.fromTo(
      ".contact-right",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
      "<0.2",
    );
  }
});

onUnmounted(() => {
  if (import.meta.client) {
    ScrollTrigger.getAll().forEach((t) => t.kill());
  }
});

// Map
const mapGrid = [
  "0000000000000000000000000000000000000000000000000011111100000000000000",
  "0000000000000000000000000000000000000000000000000111111110000000000000",
  "0000000000000000000000000000000000000000000000001111111111000000000000",
  "0000000000000000000000000000000000000000000000011111111111000000000000",
  "0000000000000000000000000000000000000000000000111111111111000000000000",
  "0000000000000000000000000000000000000000000001111111111111000000000000",
  "0000000000000000000000000000000000000000000001111111111110000000000000",
  "0000000000000000000000000000000000000000000011111111111110000000000000",
  "0000000001111100000000000000000000000000000111111111111111110000000000",
  "0000000111111111000000000000000000000000001111111111111111111000000000",
  "0000011111111111100000000000000000000000111111111111111111111100000000",
  "0000111113111111111100000000000000000111111111111111111111111110000000",
  "0001111132311111111111111100000001111111111111111111111111111110000000",
  "0011111113111111111111111111111111111111111111111111111111111111000000",
  "0111111111111111111111111111111111111111111111111111111111111111100000",
  "1111111111111111111111111111111111111111111111111111111111111111110000",
  "1111111111111111111111111111111111111111111111111111111111111111110000",
  "1111111111111111111111111111111111111111111111111111111111111111110000",
  "1111111111111111111111111111111111111111111111111111111111111111110000",
  "0111111111111111111111111111111111111111111111111111111111111111100000",
  "0111111111111111111111111111111111111111111111111111111111111111100000",
  "0011111111111111111111111111111111111111111111111111111111111111000000",
  "0011111111111111111111111111111111111111111111111111111111111111000000",
  "0001111111111111111111111111111111111111111111111111111111111110000000",
  "0000111111111111111111111111111111111111111111111111111111111100000000",
  "0000001111111111111111111111111111111111111111111111111111111000000000",
  "0000000111111111111111111111111111111111111111111111111111100000000000",
  "0000000001111111111111111111111111111111111111111111111111000000000000",
  "0000000000001111111111111111111111111111111111111111111100000000000000",
  "0000000000000001111111111111111111111111110000011111111000000000000000",
  "0000000000000000000000011111111111111111000000000111110000000000000000",
  "0000000000000000000000000001111111111000000000000011000000000000000000",
  "0000000000000000000000000000000000000000000000000000000000000000000000",
];

interface MapDot {
  x: number;
  y: number;
  type: string;
  delay: number;
}

const mapDots = computed(() => {
  const dots: MapDot[] = [];
  const tegalX = 9;
  const tegalY = 12;
  const maxDist = 65;

  for (let y = 0; y < mapGrid.length; y++) {
    const row = mapGrid[y];
    if (!row) continue;
    for (let x = 0; x < row.length; x++) {
      const type = row[x];
      if (type && type !== "0") {
        const distanceToTegal = Math.sqrt(
          Math.pow(x - tegalX, 2) + Math.pow(y - tegalY, 2),
        );
        let invertedDist = maxDist - distanceToTegal;
        if (invertedDist < 0) invertedDist = 0;
        const delay = 0.5 + invertedDist * 0.06;
        dots.push({ x, y, type, delay });
      }
    }
  }
  return dots;
});

const getDotClass = (type: string) => {
  if (type === "1") return "dot-land";
  if (type === "2") return "dot-cross-center";
  if (type === "3") return "dot-cross-halo";
  return "";
};

// Form
const WEB3FORMS_ACCESS_KEY = "YOUR_KEY_HERE";
const formData = reactive({ name: "", email: "", subject: "", message: "" });
const isSubmitting = ref(false);
const statusMessage = ref("");
const isSuccess = ref(false);

const submitForm = async () => {
  isSubmitting.value = true;
  statusMessage.value = "";
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        ...formData,
        from_name: "Portfolio Uplink",
      }),
    });
    if (response.ok) {
      isSuccess.value = true;
      statusMessage.value = t("contact.form.success");
      Object.assign(formData, {
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      throw new Error();
    }
  } catch (e) {
    isSuccess.value = false;
    statusMessage.value = t("contact.form.error");
  } finally {
    isSubmitting.value = false;
    setTimeout(() => {
      statusMessage.value = "";
    }, 5000);
  }
};
</script>

<style scoped>
.dot-land {
  fill: #22d3ee;
}
.map-is-visible .dot-land {
  animation: fadeToGray 1.2s forwards ease-in-out;
}
.dot-cross-center {
  fill: #c084fc;
}
.dot-cross-halo {
  fill: #818cf8;
}

@keyframes fadeToGray {
  0% {
    fill: #22d3ee;
  }
  100% {
    fill: #334155;
  }
}

.custom-input {
  outline: none !important;
  box-shadow: none !important;
  appearance: none;
  -webkit-appearance: none;
}
.custom-input:focus {
  border-bottom-color: transparent !important;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus {
  -webkit-text-fill-color: white;
  -webkit-box-shadow: 0 0 0px 1000px transparent inset;
  transition: background-color 5000s ease-in-out 0s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
