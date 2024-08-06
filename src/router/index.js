import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PriceInvited from '../views/PriceInvited.vue'
import PriceWebland from '../views/PriceWebland.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/price-invitation',
      name: 'price-invitation',
      component: PriceInvited
    },
    {
      path: '/price-webland',
      name: 'price-webland',
      component: PriceWebland
    }
    // {
    //   path: '/price-webland',
    //   name: 'WebLanding',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('../views/PriceWebland.vue')
    // }
  ]
})

export default router
