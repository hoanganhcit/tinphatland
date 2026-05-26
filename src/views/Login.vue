<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-card">
        <div class="login-header">
          <div class="login-icon">
            <i class="fal fa-shield-check"></i>
          </div>
          <h1>Đăng nhập Admin</h1>
          <p>Quản lý tin đăng bất động sản</p>
        </div>

        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <label for="username">Tên đăng nhập</label>
            <input
              type="text"
              id="username"
              v-model="credentials.username"
              placeholder="Nhập tên đăng nhập"
              required
            />
          </div>

          <div class="form-group">
            <label for="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              v-model="credentials.password"
              placeholder="Nhập mật khẩu"
              required
            />
          </div>

          <div v-if="error" class="error-message">
            <i class="fal fa-exclamation-circle"></i>
            <span>{{ error }}</span>
          </div>

          <button type="submit" class="btn-login" :disabled="loading">
            {{ loading ? 'Đang đăng nhập...' : 'Đăng nhập' }}
          </button>
        </form>

        <div class="login-info">
          <p><strong>Demo:</strong> <code>admin</code> / <code>admin123</code></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/authStore'

const router = useRouter()
const authStore = useAuthStore()

const credentials = ref({
  username: '',
  password: ''
})

const loading = ref(false)
const error = ref('')

const handleLogin = async () => {
  loading.value = true
  error.value = ''

  try {
    await authStore.login(credentials.value)
    router.push('/admin')
  } catch (err) {
    error.value = err.message || 'Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.'
  } finally {
    loading.value = false
  }
}
</script>
