<template>
  <div
    class="min-h-screen bg-[#0b1120] text-slate-300 overflow-x-hidden flex flex-col font-sans"
  >
    <WelcomeScreen />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
/* CSS Global untuk membunuh scrollbar horizontal dan ruang putih secara permanen */
html,
body {
  overflow-x: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #0b1120; /* Warna gelap agar kalaupun ada pantulan, tidak berwarna putih */
  -webkit-font-smoothing: antialiased;
}

/* Mempercantik Scrollbar Vertikal agar menyatu dengan tema dark mode */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #0b1120;
}
::-webkit-scrollbar-thumb {
  background: #334155;
  border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
  background: #22d3ee;
}
</style>
