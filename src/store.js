import { createPinia } from 'pinia'
import { defineStore } from 'pinia'
export const store = createPinia()
export const myStore = defineStore('myStore', {
    state: () => ({
        weatherSaved: [],
    }),
})