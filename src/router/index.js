import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gioi-thieu',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/dang-tin',
    name: 'PostProperty',
    component: () => import('../views/PostProperty.vue')
  },
  {
    path: '/tim-kiem',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/bat-dong-san/:id',
    name: 'PropertyDetail',
    component: () => import('../views/PropertyDetail.vue')
  },
  {
    path: '/lien-he',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
