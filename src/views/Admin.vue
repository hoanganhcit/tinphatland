<template>
  <div class="admin-page">

    <!-- Stats -->
    <div class="admin-stats">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon">
              <i class="fal fa-file-alt"></i>
            </div>
            <div class="stat-info">
              <h3>{{ totalProperties }}</h3>
              <p>Tổng tin đăng</p>
            </div>
          </div>
          <div class="stat-card pending">
            <div class="stat-icon pending-icon">
              <i class="fal fa-clock"></i>
            </div>
            <div class="stat-info">
              <h3>{{ pendingCount }}</h3>
              <p>Chờ duyệt</p>
            </div>
          </div>
          <div class="stat-card approved">
            <div class="stat-icon approved-icon">
              <i class="fal fa-check-circle"></i>
            </div>
            <div class="stat-info">
              <h3>{{ approvedCount }}</h3>
              <p>Đã duyệt</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Filters -->
    <div class="admin-filters">
      <div class="container">
        <div class="filter-tabs">
          <button 
            class="filter-tab" 
            :class="{ active: filterStatus === 'all' }"
            @click="filterStatus = 'all'"
          >
            <i class="fal fa-list"></i>
            <span>Tất cả</span>
            <span class="badge">{{ totalProperties }}</span>
          </button>
          <button 
            class="filter-tab filter-pending" 
            :class="{ active: filterStatus === 'pending' }"
            @click="filterStatus = 'pending'"
          >
            <i class="fal fa-clock"></i>
            <span>Chờ duyệt</span>
            <span class="badge">{{ pendingCount }}</span>
          </button>
          <button 
            class="filter-tab filter-approved" 
            :class="{ active: filterStatus === 'approved' }"
            @click="filterStatus = 'approved'"
          >
            <i class="fal fa-check-circle"></i>
            <span>Đã duyệt</span>
            <span class="badge">{{ approvedCount }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Properties List -->
    <div class="admin-content">
      <div class="container">
        <div v-if="loading" class="loading">
          <i class="fal fa-spinner-third fa-spin"></i>
          <p>Đang tải dữ liệu...</p>
        </div>

        <div v-else-if="filteredProperties.length === 0" class="no-data">
          <i class="fal fa-folder-open"></i>
          <p>Không có tin đăng nào</p>
        </div>

        <div v-else class="properties-table">
          <table>
            <thead>
              <tr>
                <th>Hình ảnh</th>
                <th>Tiêu đề</th>
                <th>Giá</th>
                <th>Phân khu</th>
                <th>Trạng thái</th>
                <th>Nổi bật</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="property in filteredProperties" :key="property._id">
                <td>
                  <img 
                    :src="getImageUrl(property.images[0])" 
                    :alt="property.title"
                    class="property-thumb"
                  />
                </td>
                <td>
                  <div class="property-title">{{ property.title }}</div>
                  <div class="property-meta">{{ property.bedrooms }}PN • {{ property.grossArea }}m²</div>
                </td>
                <td class="price">{{ formatPrice(property.price) }}</td>
                <td>{{ property.zone }}</td>
                <td>
                  <span class="status-badge" :class="property.status">
                    {{ property.status === 'approved' ? '✅ Đã duyệt' : '⏳ Chờ duyệt' }}
                  </span>
                </td>
                <td>
                  <label class="featured-toggle">
                    <input 
                      type="checkbox" 
                      :checked="property.featured"
                      @change="toggleFeatured(property._id, !property.featured)"
                    />
                    <span>{{ property.featured ? '⭐' : '☆' }}</span>
                  </label>
                </td>
                <td>
                  <div class="action-buttons">
                    <button 
                      v-if="property.status === 'pending'"
                      @click="approveProperty(property._id)" 
                      class="btn-approve"
                      title="Duyệt tin"
                    >
                      ✓
                    </button>
                    <button 
                      @click="editProperty(property._id)" 
                      class="btn-edit"
                      title="Chỉnh sửa"
                    >
                      <i class="fal fa-edit"></i>
                    </button>
                    <button 
                      @click="viewProperty(property._id)" 
                      class="btn-view"
                      title="Xem chi tiết"
                    >
                      <i class="fal fa-eye"></i>
                    </button>
                    <button 
                      @click="deleteProperty(property._id)" 
                      class="btn-delete"
                      title="Xóa"
                    >
                      <i class="fal fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/authStore'
import { usePropertyStore } from '@/store/propertyStore'
import axios from 'axios'

const router = useRouter()
const authStore = useAuthStore()
const propertyStore = usePropertyStore()

const filterStatus = ref('all')
const loading = ref(false)

// Computed
const totalProperties = computed(() => propertyStore.properties.length)
const pendingCount = computed(() => 
  propertyStore.properties.filter(p => p.status === 'pending').length
)
const approvedCount = computed(() => 
  propertyStore.properties.filter(p => p.status === 'approved').length
)

const filteredProperties = computed(() => {
  if (filterStatus.value === 'all') {
    return propertyStore.properties
  }
  return propertyStore.properties.filter(p => p.status === filterStatus.value)
})

// Methods
const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}

const getImageUrl = (imagePath) => {
  if (!imagePath) return '/images/placeholder.jpg'
  return `http://localhost:3001${imagePath}`
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price)
}

const approveProperty = async (id) => {
  try {
    const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'
    await axios.put(
      `${API_BASE_URL}/properties/${id}/status`,
      { status: 'approved' },
      {
        headers: {
          Authorization: `Bearer ${authStore.token}`
        }
      }
    )
    
    // Refresh danh sách
    await propertyStore.fetchProperties()
    alert('✅ Đã duyệt tin thành công!')
  } catch (error) {
    alert('❌ Có lỗi xảy ra: ' + error.message)
  }
}

const toggleFeatured = async (id, featured) => {
  try {
    const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'
    await axios.put(
      `${API_BASE_URL}/properties/${id}/featured`,
      { featured },
      {
        headers: {
          Authorization: `Bearer ${authStore.token}`
        }
      }
    )
    
    // Refresh danh sách
    await propertyStore.fetchProperties()
  } catch (error) {
    alert('❌ Có lỗi xảy ra: ' + error.message)
  }
}

const editProperty = (id) => {
  router.push(`/dang-tin?edit=${id}`)
}

const viewProperty = (id) => {
  window.open(`/bat-dong-san/${id}`, '_blank')
}

const deleteProperty = async (id) => {
  if (!confirm('Bạn có chắc muốn xóa tin đăng này?')) return
  
  try {
    const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'
    await axios.delete(`${API_BASE_URL}/properties/${id}`, {
      headers: {
        Authorization: `Bearer ${authStore.token}`
      }
    })
    
    // Refresh danh sách
    await propertyStore.fetchProperties()
    alert('✅ Đã xóa tin thành công!')
  } catch (error) {
    alert('❌ Có lỗi xảy ra: ' + error.message)
  }
}

onMounted(async () => {
  // Check authentication
  const isAuth = await authStore.checkAuth()
  if (!isAuth) {
    router.push('/login')
    return
  }

  // Fetch properties
  loading.value = true
  await propertyStore.fetchProperties()
  loading.value = false
})
</script>

