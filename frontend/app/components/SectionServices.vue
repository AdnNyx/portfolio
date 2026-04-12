<template>
  <section
    id="services"
    class="relative min-h-screen flex items-center justify-center overflow-hidden py-24"
  >
    <div
      class="absolute inset-0 pointer-events-none -z-20 flex items-center justify-center opacity-30"
    >
      <div
        class="w-[600px] h-[600px] bg-neon-cyan/10 rounded-full blur-[150px]"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-8 lg:px-12 w-full z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-4">
          {{ $t("services.title_1") }}
          <span class="text-neon-cyan">{{ $t("services.title_2") }}</span>
        </h2>
        <div
          class="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full"
        ></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          class="glass-card p-8 group hover:-translate-y-4 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] transition-all duration-500 border border-white/5 hover:border-neon-cyan/50 relative overflow-hidden"
        >
          <div
            class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>

          <div
            class="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-neon-cyan mb-6 group-hover:scale-110 transition-transform duration-500"
          >
            <Icon name="uil:browser" class="text-3xl" />
          </div>
          <h3 class="text-2xl font-display font-semibold text-white mb-4">
            {{ $t("services.frontend_title") }}
          </h3>
          <p class="text-slate-400 leading-relaxed">
            {{ $t("services.frontend_desc") }}
          </p>
        </div>

        <div
          class="glass-card p-8 group hover:-translate-y-4 hover:shadow-[0_0_40px_rgba(192,132,252,0.2)] transition-all duration-500 border border-white/5 hover:border-neon-purple/50 relative overflow-hidden"
        >
          <div
            class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>

          <div
            class="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-neon-purple mb-6 group-hover:scale-110 transition-transform duration-500"
          >
            <Icon name="uil:server-network" class="text-3xl" />
          </div>
          <h3 class="text-2xl font-display font-semibold text-white mb-4">
            {{ $t("services.backend_title") }}
          </h3>
          <p class="text-slate-400 leading-relaxed">
            {{ $t("services.backend_desc") }}
          </p>
        </div>

        <div
          class="glass-card p-8 group hover:-translate-y-4 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] transition-all duration-500 border border-white/5 hover:border-neon-cyan/50 relative overflow-hidden"
        >
          <div
            class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>

          <div
            class="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-neon-cyan mb-6 group-hover:scale-110 transition-transform duration-500"
          >
            <Icon name="uil:robot" class="text-3xl" />
          </div>
          <h3 class="text-2xl font-display font-semibold text-white mb-4">
            {{ $t("services.ai_title") }}
          </h3>
          <p class="text-slate-400 leading-relaxed">
            {{ $t("services.ai_desc") }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
