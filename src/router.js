import { createRouter, createWebHistory } from 'vue-router'
import CitySelector from "@/components/CitySelector.vue";
import CityWeather from "@/components/CityWeather.vue";
const routes = [
    {
        path: "/",
        name: "CitySelector",
        component: CitySelector,
    },
    {
        path:'/CityWeather',
        name:'CityWeather',
        component: CityWeather,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router