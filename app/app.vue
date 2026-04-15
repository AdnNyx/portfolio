<template>
  <div
    class="min-h-screen bg-[#0b1120] text-slate-300 overflow-x-hidden flex flex-col font-sans"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
html {
  scroll-padding-top: 80px;
  scroll-behavior: smooth;
}
body {
  overflow-x: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #0b1120;
  -webkit-font-smoothing: antialiased;
}
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
