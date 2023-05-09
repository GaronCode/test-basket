import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import BasketView from '../views/BasketView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/basket',
    name: 'basket',
    component: BasketView
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/basket'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
