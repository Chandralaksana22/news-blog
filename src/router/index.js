import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/entertainment',
      name: 'entertainment',
      component: () => import('../views/EntertainmentView.vue')
    },
    {
      path: '/headline',
      name: 'headline',
      component: () => import('../views/HeadlineView.vue')
    },
    {
      path: '/sports',
      name: 'sports',
      component: () => import('../views/SportsView.vue')
    }
  ]
})

export default router

