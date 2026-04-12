<template>
  <section
    id="about"
    class="relative min-h-screen flex items-center justify-center overflow-hidden py-24"
  >
    <div
      class="absolute top-1/4 right-0 w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[150px] pointer-events-none -z-10"
    ></div>
    <div
      class="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-neon-cyan/10 rounded-full blur-[120px] pointer-events-none -z-10"
    ></div>

    <div
      class="max-w-6xl mx-auto px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10"
    >
      <div
        class="relative flex justify-center items-center mt-10 lg:mt-0 w-full py-10 lg:py-0"
      >
        <div
          class="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full border border-white/5 bg-white/5 backdrop-blur-3xl animate-[spin_12s_linear_infinite]"
        ></div>

        <div
          class="absolute w-[340px] h-[340px] md:w-[450px] md:h-[450px] rounded-full border-t border-l border-neon-cyan/50 animate-[spin_8s_linear_infinite_reverse]"
        ></div>

        <div
          class="w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-4 border-space-800 z-10 relative bg-space-800 flex items-center justify-center group shadow-[0_0_30px_rgba(34,211,238,0.15)]"
        >
          <div
            class="absolute inset-0 bg-gradient-to-t from-space-900/80 via-transparent to-transparent z-10 pointer-events-none"
          ></div>

          <img
            src="assets/image/profile.jpg"
            alt="Mahfudin Adnan"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      <div class="space-y-6 text-center lg:text-left">
        <h2 class="text-4xl md:text-5xl font-display font-bold text-white">
          {{ $t("about.title_1") }}
          <span class="text-neon-cyan">{{ $t("about.title_2") }}</span>
        </h2>

        <div
          class="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto lg:mx-0 rounded-full mb-8"
        ></div>

        <div class="space-y-5 text-slate-300 text-lg leading-relaxed">
          <p>{{ $t("about.p1") }}</p>
          <p>{{ $t("about.p2") }}</p>
        </div>

        <div class="pt-6">
          <a
            href="#services"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-neon-cyan hover:text-space-900 hover:border-neon-cyan transition-all duration-300"
          >
            {{ $t("about.cta") }} <Icon name="uil:arrow-down" class="text-lg" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
