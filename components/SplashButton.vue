<!--
  - Author: Dedi Fardiyanto Copyright (c) 2024.
  -
  - Created At: 12/30/24, 12:42 AM
  - Filename: SplashButton.vue
  - Last Modified: 12/30/24, 12:08 AM
  -->

<script setup lang="ts">
import {ref} from 'vue';

interface Splash {
  x: string;
  y: string;
  size: string;
}

const label = ref('Click Me');
const splash = ref<Splash>({x: '0px', y: '0px', size: '0px'});

function handleClick(event: MouseEvent) {
  const button = event.currentTarget as HTMLElement;
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = `${event.clientX - rect.left - size / 2}px`;
  const y = `${event.clientY - rect.top - size / 2}px`;

  splash.value = {x, y, size: `${size}px`};

  setTimeout(() => {
    splash.value = {x: '0px', y: '0px', size: '0px'}; // Reset setelah animasi selesai
  }, 500); // Durasi animasi
}
</script>

<template>
  <button
      class="btn relative overflow-hidden bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 focus:outline-none rounded-lg px-4 py-2"
      @click="handleClick"
  >
    <span
        class="absolute inset-0 z-10 transition-transform duration-500 transform scale-0 bg-white opacity-20 rounded-full"
        :style="{ top: splash.y, left: splash.x, width: splash.size, height: splash.size }"></span>
    <span class="relative z-20">{{ label }}</span>
  </button>
</template>

<style scoped>
button {
  position: relative;
}
</style>