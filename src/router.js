import { createWebHashHistory, createRouter } from 'vue-router'

import Home from "./pages/Home.vue"
import Helldivers from "./pages/Helldivers.vue"

const routes = [
  { path: '/', component: Home },
  { path: '/helldivers', component: Helldivers },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router