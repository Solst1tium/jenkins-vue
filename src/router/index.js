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
      path: '/about',
      name: 'about',     
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pokemones',
      name: 'pokemones',     
      component: () => import('../views/PokemonesView.vue')
    },

    {
      path: '/pokemones/:name',
      name: 'pokemon',     
      component: () => import('../views/PokemonView.vue')
    },
    {
      path: '/cart',
      name: 'cart',     
      component: () => import('../views/CartView.vue')
    },
    {
      path:  '/:pathMatch(.*)*',
      name: 'NotFound',     
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
