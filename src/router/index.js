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
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Nếu có savedPosition (từ nút back/forward), dùng vị trí đó
    if (savedPosition) {
      return savedPosition
    }
    // Nếu có hash (#section), scroll đến phần tử đó
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    // Mặc định: scroll về top khi chuyển trang
    return { 
      top: 0, 
      behavior: 'smooth' 
    }
  }
})

export default router
