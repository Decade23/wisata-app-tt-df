/*
 * Author: Dedi Fardiyanto Copyright (c) 2024.
 *
 * Created At: 12/28/24, 12:16 PM
 * Filename: redirect.global.ts
 * Last Modified: 12/27/24, 10:30 PM
 */


export default defineNuxtRouteMiddleware((to, from) => {
    // console.log('Navigating to: ', to.path);  // Debug log

    if (to.path === '/') {
        console.log('Redirecting to /stay/fairmont-jakarta-9000248394');
        return navigateTo('/stay/fairmont-jakarta-9000248394')
    }
});

