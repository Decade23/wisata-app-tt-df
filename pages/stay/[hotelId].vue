<!--
  - Author: Dedi Fardiyanto Copyright (c) 2024.
  -
  - Created At: 12/30/24, 12:42 AM
  - Filename: [hotelId].vue
  - Last Modified: 12/30/24, 12:42 AM
  -->

<script setup lang="ts">
import {useMotion} from '@vueuse/motion'
</script>

<template>
  <header class="w-full relative" v-motion-pop-bottom>
    <div class="w-full flex items-center justify-between">
      <div class="w-1/12 text-blue-500 flex items-center justify-center">
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true"
             style="font-size: 36px; height: 36px; width: 36px;">
          <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
        </svg>
      </div>
      <div class="w-full p-2">
        <label class="rounded flex items-center gap-2 px-2 py-3 bg-gray-200">
          <svg class="ml-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true"
               fill="currentColor"
               style="font-size:16px;height:16px;width:16px;">
            <path
                d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path>
          </svg>
          <input type="text" readonly class="grow bg-gray-200 text-center focus:outline-none focus:border-0"
                 placeholder="Fairmont Jakarta . 4-8 Mar 2025"/>
        </label>

      </div>
    </div>
  </header>
</template>

<style scoped>

</style>