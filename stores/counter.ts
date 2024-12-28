/*
 * Author: Dedi Fardiyanto Copyright (c) 2024.
 *
 * Created At: 12/28/24, 12:16 PM
 * Filename: counter.ts
 * Last Modified: 12/26/24, 2:26 AM
 */

import {defineStore} from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
    }),
    actions: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
    },
});

