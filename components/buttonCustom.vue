<!--
  - Author: Dedi Fardiyanto Copyright (c) 2024.
  -
  - Created At: 12/28/24, 12:16 PM
  - Filename: buttonCustom.vue
  - Last Modified: 12/27/24, 10:40 PM
  -->

<script setup lang="ts">
import {useCounterStore} from '@/stores/counter';

const counter = useCounterStore();
</script>

<template>
  <button @click="counter.increment" class="border bg-primary text-red-500 p-3 rounded cursor-pointer">
    Count: {{ counter.count }}
  </button>
</template>
