import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    { path: '/', name: 'home', component: () => import('../pages/Home.vue') },
    { path: '/about', name: 'about', component: () => import('../pages/About.vue') }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router