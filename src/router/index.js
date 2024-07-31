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
      path: '/gallery',
      name: 'Gallery',
      component: () => import('../views/Gallery/GalleryView.vue'),
    }
  ]
})

export default router
