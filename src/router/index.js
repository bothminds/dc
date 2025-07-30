import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/TheDonuts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      },
    {
      path: '/menu',
      name: 'Menu',
      component: () => import('../views/MenuView.vue'),
    },
    {
      path: '/location',
      name: 'Location',
      component: () => import('../views/LocationView.vue'),
    },
    // {
    //   path: '/contact',
    //   name: 'Contact',
    // //   component: () => import('../views/ContactView.vue'),
    //   },
    
  ],
})

export default router
