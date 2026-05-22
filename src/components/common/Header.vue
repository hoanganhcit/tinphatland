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
        <router-link to="/dang-tin" class="nav-link" @click="closeMobileMenu">Đăng tin</router-link>
        <router-link to="/lien-he" class="nav-link" @click="closeMobileMenu">Liên hệ</router-link>
        
        <div class="auth-mobile">
          <button class="btn-login">Đăng nhập</button>
        </div>
      </nav>
      
      <div class="auth auth-desktop">
        <button class="btn-login">Đăng nhập</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

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

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Check initial scroll position
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = '' // Clean up on unmount
})
</script>
