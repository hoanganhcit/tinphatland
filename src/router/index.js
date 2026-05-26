import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { useAuthStore } from '@/store/authStore'

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
    component: () => import('../views/PostProperty.vue'),
    meta: { requiresAuth: true }
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
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    meta: { requiresAuth: true }
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

// Navigation guard để bảo vệ các route yêu cầu authentication
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  
  // Kiểm tra nếu route yêu cầu authentication
  if (to.meta.requiresAuth) {
    // Kiểm tra nếu user đã login
    if (!authStore.isAuthenticated) {
      // Chưa login, redirect về trang login
      next({ name: 'Login', query: { redirect: to.fullPath } })
    } else {
      // Đã login, cho phép truy cập
      next()
    }
  } else {
    // Route không yêu cầu auth, cho phép truy cập
    next()
  }
})

export default router
