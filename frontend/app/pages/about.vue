<template>
  <div
    class="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden py-16 lg:py-20"
  >
    <div
      class="absolute top-1/4 right-0 w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-[120px] pointer-events-none -z-10"
    ></div>
    <div
      class="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[150px] pointer-events-none -z-10"
    ></div>

    <div class="max-w-6xl mx-auto px-8 lg:px-12 w-full z-10">
      <div class="text-center lg:text-left mb-12">
        <h1 class="text-4xl md:text-5xl font-display font-bold text-white mb-4">
          About <span class="text-neon-cyan">Me</span>
        </h1>
        <div
          class="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto lg:mx-0 rounded-full"
        ></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 space-y-6">
          <div class="glass-card p-8 md:p-10">
            <h2
              class="text-2xl font-display font-semibold text-white mb-6 flex items-center gap-3"
            >
              <Icon name="uil:user" class="text-neon-cyan" />
              Perjalanan & Visi
            </h2>
            <div class="space-y-4 text-slate-300 leading-relaxed text-lg">
              <p>
                Halo! Saya adalah Mahfudin Adnan, seorang pengembang perangkat
                lunak yang berfokus pada penciptaan ekosistem digital yang
                modern, skalabel, dan memiliki antarmuka yang memukau.
                Ketertarikan saya terletak pada persimpangan antara desain
                visual yang tajam dan arsitektur kode yang tangguh.
              </p>
              <p>
                Saat ini, di tengah masa Praktik Kerja Lapangan (PKL), saya
                dipercaya untuk merancang dan mengembangkan
                <strong
                  >Frontend Sistem Informasi Pelaporan Pelanggaran Pemilu
                  Terpadu (Si-Walu)</strong
                >. Proyek ini mengajarkan saya betapa krusialnya performa,
                keamanan, dan kejelasan UI/UX dalam aplikasi skala institusi.
              </p>
              <p>
                Selain pengembangan <em>web</em> dan <em>mobile</em> menggunakan
                framework modern, saya memiliki minat mendalam pada integrasi
                <em>Generative AI</em>. Saya aktif mengeksplorasi pembuatan
                ekosistem <em>AI Chatbot</em> dan menyuntikkan kecerdasan buatan
                ke dalam produk perangkat lunak untuk memecahkan masalah yang
                kompleks.
              </p>
            </div>
          </div>
        </div>

        <div class="space-y-8">
          <div class="glass-card p-8">
            <h3
              class="text-xl font-display font-semibold text-white mb-4 border-b border-white/10 pb-2"
            >
              Current Focus
            </h3>
            <ul class="space-y-4 text-slate-300">
              <li class="flex items-start gap-3">
                <Icon
                  name="uil:check-circle"
                  class="text-neon-purple shrink-0 mt-1"
                />
                <span>Pengembangan Sistem Berbasis Vue & Nuxt.js</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  name="uil:check-circle"
                  class="text-neon-purple shrink-0 mt-1"
                />
                <span>Integrasi LLM & Ekosistem Chatbot (FastAPI)</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  name="uil:check-circle"
                  class="text-neon-purple shrink-0 mt-1"
                />
                <span>Eksplorasi Web 3D (Three.js & GSAP)</span>
              </li>
            </ul>
          </div>

          <div class="glass-card p-8">
            <h3
              class="text-xl font-display font-semibold text-white mb-4 border-b border-white/10 pb-2"
            >
              Tech Arsenal
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-neon-cyan"
                >Nuxt.js</span
              >
              <span
                class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-neon-cyan"
                >Vue.js</span
              >
              <span
                class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-neon-cyan"
                >Flutter</span
              >
              <span
                class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-slate-300"
                >TypeScript</span
              >
              <span
                class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-slate-300"
                >Tailwind CSS</span
              >
              <span
                class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-neon-purple"
                >Python</span
              >
              <span
                class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-neon-purple"
                >FastAPI</span
              >
              <span
                class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-slate-300"
                >PostgreSQL</span
              >
              <span
                class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-slate-300"
                >Pinia</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
