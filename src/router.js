import { createWebHistory, createRouter } from 'vue-router'

import Home from "./pages/Home.vue"
import Helldivers from "./pages/Helldivers.vue"

const routes = [
  { path: '/', component: Home },
  { path: '/helldivers', component: Helldivers },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router