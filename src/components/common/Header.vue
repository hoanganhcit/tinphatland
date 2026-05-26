<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <h1>Tín Phát Land</h1>
        </router-link>
      </div>
      
      <button class="hamburger" :class="{ active: mobileMenuOpen }" @click="toggleMobileMenu" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <!-- Mobile menu backdrop -->
      <div class="nav-backdrop" :class="{ active: mobileMenuOpen }" @click="closeMobileMenu"></div>
      
      <nav class="nav" :class="{ 'nav-open': mobileMenuOpen }">
        <router-link to="/" class="nav-link" @click="closeMobileMenu">Trang chủ</router-link>
        <router-link to="/tim-kiem" class="nav-link" @click="closeMobileMenu">Tìm kiếm</router-link>
        <router-link to="/gioi-thieu" class="nav-link" @click="closeMobileMenu">Giới thiệu</router-link>
        <router-link v-if="authStore.isAuthenticated" to="/dang-tin" class="nav-link" @click="closeMobileMenu">Đăng tin</router-link>
        <router-link v-if="authStore.isAuthenticated" to="/admin" class="nav-link" @click="closeMobileMenu">Quản lý</router-link>
        <router-link to="/lien-he" class="nav-link" @click="closeMobileMenu">Liên hệ</router-link>
        
        <div class="auth-mobile">
          <router-link v-if="!authStore.isAuthenticated" to="/login" class="btn-login" @click="closeMobileMenu">
            <i class="fal fa-sign-in-alt"></i>
            <span>Đăng nhập</span>
          </router-link>
          <div v-else class="user-menu-mobile">
            <div class="user-info-mobile">
              <i class="fal fa-user-circle"></i>
              <span>{{ authStore.user?.username }}</span>
            </div>
            <button @click="handleLogout" class="btn-logout-mobile">
              <i class="fal fa-sign-out-alt"></i>
              <span>Đăng xuất</span>
            </button>
          </div>
        </div>
      </nav>
      
      <div class="auth auth-desktop">
        <router-link v-if="!authStore.isAuthenticated" to="/login" class="btn-login">
          <i class="fal fa-sign-in-alt"></i>
          <span>Đăng nhập</span>
        </router-link>
        <template v-else>
          <div class="user-info">
            <i class="fal fa-user-circle"></i>
            <span>{{ authStore.user?.username }}</span>
          </div>
          <button @click="handleLogout" class="btn-logout">
            <i class="fal fa-sign-out-alt"></i>
            <span>Đăng xuất</span>
          </button>
        </template>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/authStore'

const router = useRouter()
const authStore = useAuthStore()

const mobileMenuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  // Prevent body scroll when menu is open
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const handleLogout = () => {
  authStore.logout()
  closeMobileMenu()
  router.push('/')
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Check initial scroll position
  // Check authentication on mount
  authStore.checkAuth()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = '' // Clean up on unmount
})
</script>
