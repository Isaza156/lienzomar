import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About/AboutView.vue'),
    }
  ]
})

export default router
