import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import BasketView from '../views/BasketView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'basket',
    component: BasketView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
