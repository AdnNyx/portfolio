<template>
  <div class="relative min-h-screen flex flex-col bg-space-900">
    <Navbar />

    <main class="flex-1 pt-16 lg:pt-20">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts"></script>
