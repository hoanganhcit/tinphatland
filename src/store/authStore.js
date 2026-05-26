import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref(null)
  const token = ref(localStorage.getItem('token') || null)
  const loading = ref(false)
  const error = ref(null)

  // Getters
  const isAuthenticated = computed(() => !!token.value)
  const isAdmin = computed(() => user.value?.role === 'admin')

  // Actions
  async function login(credentials) {
    loading.value = true
    error.value = null
    
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials)
      
      if (response.data.success) {
        token.value = response.data.token
        user.value = response.data.user
        
        // Lưu token vào localStorage
        localStorage.setItem('token', response.data.token)
        
        return response.data
      } else {
        throw new Error(response.data.message || 'Đăng nhập thất bại')
      }
    } catch (err) {
      error.value = err.response?.data?.message || err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  async function logout() {
    user.value = null
    token.value = null
    localStorage.removeItem('token')
  }

  async function checkAuth() {
    if (!token.value) {
      return false
    }

    try {
      const response = await axios.get(`${API_BASE_URL}/auth/me`, {
        headers: {
          Authorization: `Bearer ${token.value}`
        }
      })
      
      if (response.data.success) {
        user.value = response.data.user
        return true
      }
      
      return false
    } catch (err) {
      // Token không hợp lệ
      logout()
      return false
    }
  }

  return {
    // State
    user,
    token,
    loading,
    error,
    
    // Getters
    isAuthenticated,
    isAdmin,
    
    // Actions
    login,
    logout,
    checkAuth
  }
})
