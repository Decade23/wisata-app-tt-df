/*
 * Author: Dedi Fardiyanto Copyright (c) 2024.
 *
 * Created At: 12/30/24, 12:42 AM
 * Filename: nuxt.config.ts
 * Last Modified: 12/30/24, 12:38 AM
 */

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    app: {
        pageTransition: {name: 'page', mode: 'out-in'}
    },
    // router: {
    //     middleware: ['redirect'],
    // },
    compatibilityDate: '2024-11-01',
    modules: ['@pinia/nuxt', '@vueuse/motion/nuxt'],
    css: ['~/assets/css/main.css'],
    devtools: {enabled: true},
    postcss: {plugins: {tailwindcss: {}, autoprefixer: {},},},
    typescript: {
        strict: true,
    },
    runtimeConfig: {
        public: {
            motion: {
                directives: {
                    'pop-bottom': {
                        initial: {
                            scale: 0,
                            opacity: 0,
                            y: 100,
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            y: 0,
                        }
                    }
                }
            }
        }
    }
    // pages: false,
    // plugins:
    //     ['~/plugins/my-plugin.ts'],
    // part server ini untuk docker
    // server: {
    //   host: '0.0.0.0', // Mendengarkan pada semua alamat
    //   port: 3000,      // Pastikan port ini sesuai dengan docker-compose.yml
    //   watch: {
    //     usePolling: true, // Untuk lingkungan di dalam Docker
    //   },
    // },
    // router: { path: '/', extensions: ['vue'], lazy: true, },
})
