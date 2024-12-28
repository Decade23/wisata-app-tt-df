/*
 * Author: Dedi Fardiyanto Copyright (c) 2024.
 *
 * Created At: 12/28/24, 12:16 PM
 * Filename: tailwind.config.js
 * Last Modified: 12/27/24, 10:53 PM
 */

/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui"

export default {
  content: [
    './components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './app.vue', './error.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [
      daisyui,
  ],
}

