import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import BasketView from '../views/BasketView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/test-basket',
    name: 'basket',
    component: BasketView
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/test-basket'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
