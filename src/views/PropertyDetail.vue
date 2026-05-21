<template>
  <div class="property-detail">
    <!-- Loading State -->
    <div v-if="isLoading" class="loading-container">
      <div class="loading-spinner">⏳ Đang tải...</div>
    </div>

    <!-- Property Not Found -->
    <div v-else-if="!property" class="not-found">
      <h2>❌ Không tìm thấy căn hộ</h2>
      <p>Căn hộ bạn đang tìm không tồn tại hoặc đã bị xóa.</p>
      <router-link to="/" class="btn-back">← Về trang chủ</router-link>
    </div>

    <!-- Property Content -->
    <div v-else class="container">
      <!-- Image Gallery -->
      <div class="gallery-section">
        <div class="main-image" @click="openLightbox(currentImageIndex)">
          <img :src="images[currentImageIndex]" :alt="property.title">
          <div class="image-count">{{ currentImageIndex + 1 }} / {{ images.length }}</div>
        </div>
        <div class="thumbnail-grid">
          <div 
            v-for="(image, index) in images" 
            :key="index"
            class="thumbnail"
            :class="{ active: index === currentImageIndex }"
            @click="currentImageIndex = index"
          >
            <img :src="image" :alt="`${property.title} - ${index + 1}`">
          </div>
        </div>
      </div>

      <!-- Lightbox -->
      <div v-if="showLightbox" class="lightbox" @click="closeLightbox">
        <button class="close-btn" @click="closeLightbox">&times;</button>
        <button class="nav-btn prev" @click.stop="prevImage">‹</button>
        <img :src="images[lightboxIndex]" :alt="property.title" @click.stop>
        <button class="nav-btn next" @click.stop="nextImage">›</button>
        <div class="lightbox-counter">{{ lightboxIndex + 1 }} / {{ images.length }}</div>
      </div>
      
      <div class="property-info">
        <h1>{{ property.title }}</h1>
        <div class="price">{{ formatPrice(property.price) }}</div>
        
        <div class="details-grid">
          <div class="detail-item">
            <span class="label">📐 Diện tích:</span>
            <span class="value">{{ property.area }} m²</span>
          </div>
          <div class="detail-item">
            <span class="label">🏠 Loại:</span>
            <span class="value">{{ property.type }}</span>
          </div>
          <div class="detail-item">
            <span class="label">🛏️ Phòng ngủ:</span>
            <span class="value">{{ property.bedrooms }} phòng</span>
          </div>
          <div class="detail-item">
            <span class="label">🚿 Phòng tắm:</span>
            <span class="value">{{ property.bathrooms }} phòng</span>
          </div>
          <div class="detail-item">
            <span class="label">📍 Địa chỉ:</span>
            <span class="value">{{ property.location }}</span>
          </div>
        </div>
        
        <!-- Content Layout 70/30 -->
        <div class="content-layout">
          <!-- Left Side - Description (70%) -->
          <div class="description-section">
            <div class="description">
              <h3>Mô tả chi tiết</h3>
              <p>{{ property.description }}</p>
              <br>
              <h4>Tiện ích Vinhomes Grand Park:</h4>
              <ul>
                <li>🏞️ Công viên trung tâm 36ha</li>
                <li>🏊 Hồ bơi ngoài trời và trong nhà</li>
                <li>🏃 Khu thể thao đa năng</li>
                <li>🏫 Trường học liên cấp quốc tế</li>
                <li>🏪 Trung tâm thương mại Vincom Mega Mall</li>
                <li>🏥 Bệnh viện Vinmec</li>
                <li>🚇 Kết nối metro số 1 (đang xây dựng)</li>
                <li>🔒 An ninh 24/7 với hệ thống camera hiện đại</li>
              </ul>
            </div>
            
            <div class="contact-box">
              <h3>Thông tin liên hệ</h3>
              <p><strong>Người đăng:</strong> {{ property.contactName }}</p>
              <p><strong>Điện thoại:</strong> <a :href="'tel:' + property.contactPhone">{{ property.contactPhone }}</a></p>
              <button class="btn-contact">Liên hệ ngay</button>
            </div>
          </div>

          <!-- Right Side - Consultation Form (30%) -->
          <div class="consultation-form">
            <div class="form-card">
              <h3>Tư vấn mua nhà chuyên sâu</h3>
              
              <!-- Benefits List -->
              <div class="benefits-list">
                <div class="benefit-item">
                  <span class="check-icon">✓</span>
                  <span class="benefit-text">Phân tích quỹ căn, chính sách, tiện ích giúp Khách hàng lựa chọn căn tốt nhất.</span>
                </div>
                <div class="benefit-item">
                  <span class="check-icon">✓</span>
                  <span class="benefit-text">Giải đáp mọi thắc mắc của khách hàng.</span>
                </div>
                <div class="benefit-item">
                  <span class="check-icon">✓</span>
                  <span class="benefit-text">Tuyệt đối bảo mật thông tin cá nhân.</span>
                </div>
              </div>
              
              <form @submit.prevent="submitConsultation">
                <div class="form-group">
                  <input 
                    type="text" 
                    id="name"
                    v-model="consultationForm.name"
                    placeholder="Họ và tên *"
                    required
                  >
                </div>

                <div class="form-group">
                  <input 
                    type="tel" 
                    id="phone"
                    v-model="consultationForm.phone"
                    placeholder="Số điện thoại *"
                    pattern="[0-9]{10}"
                    required
                  >
                </div>

                <button type="submit" class="btn-submit" :disabled="isSubmitting">
                  {{ isSubmitting ? 'Đang gửi...' : 'Nhận tư vấn ngay' }}
                </button>
              </form>

              <div v-if="submitMessage" class="submit-message" :class="submitSuccess ? 'success' : 'error'">
                {{ submitMessage }}
              </div>

              <!-- Divider -->
              <div class="divider"></div>

              <!-- Contact Buttons -->
              <div class="contact-buttons">
                <a href="tel:0967777143" class="btn-call">
                  <span class="icon">📞</span>
                  <span class="btn-text">Gọi trực tiếp<br><strong>0967777143</strong></span>
                </a>
                <a href="https://zalo.me/0967777143" target="_blank" class="btn-zalo">
                  <span class="icon">💬</span>
                  <span class="btn-text">Chat qua<br><strong>Zalo</strong></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Similar Properties Section -->
      <div class="similar-properties">
        <h2 class="section-title">🏠 Bất động sản tương tự</h2>
        <div class="properties-grid">
          <PropertyCard 
            v-for="similarProperty in similarProperties" 
            :key="similarProperty.id"
            :property="similarProperty"
          />
        </div>
        <div v-if="similarProperties.length === 0" class="no-results">
          <p>Không có bất động sản tương tự</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { usePropertyStore } from '@/store/propertyStore'
import PropertyCard from '@/components/property/PropertyCard.vue'

const route = useRoute()
const propertyStore = usePropertyStore()

const property = ref(null)
const isLoading = ref(true)

// Gallery state
const images = computed(() => {
  if (!property.value?.image) return []
  // Generate multiple images from the main image (in real app, would come from property.images array)
  return [
    property.value.image,
    property.value.image.replace('?w=800', '?w=800&sat=-100'), // B&W variant
    property.value.image.replace('?w=800', '?w=800&brightness=10'),
    property.value.image.replace('?w=800', '?w=800&contrast=10'),
    property.value.image,
    property.value.image.replace('?w=800', '?w=800&sepia=50')
  ]
})

const currentImageIndex = ref(0)
const showLightbox = ref(false)
const lightboxIndex = ref(0)

// Consultation form state
const consultationForm = ref({
  name: '',
  phone: '',
  email: '',
  note: ''
})
const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const formatPrice = (price) => {
  if (price >= 1000000000) {
    return `${(price / 1000000000).toFixed(1)} tỷ`
  }
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price)
}

// Gallery functions
const openLightbox = (index) => {
  lightboxIndex.value = index
  showLightbox.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  showLightbox.value = false
  document.body.style.overflow = 'auto'
}

const nextImage = () => {
  lightboxIndex.value = (lightboxIndex.value + 1) % images.value.length
}

const prevImage = () => {
  lightboxIndex.value = (lightboxIndex.value - 1 + images.value.length) % images.value.length
}

// Form submission
const submitConsultation = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Here you would normally send the data to your backend
    console.log('Consultation form data:', {
      ...consultationForm.value,
      propertyId: route.params.id,
      propertyTitle: property.value.title
    })
    
    submitSuccess.value = true
    submitMessage.value = '✅ Đã gửi thông tin thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.'
    
    // Reset form
    consultationForm.value = {
      name: '',
      phone: '',
      email: '',
      note: ''
    }
    
    // Clear message after 5 seconds
    setTimeout(() => {
      submitMessage.value = ''
    }, 5000)
  } catch (error) {
    submitSuccess.value = false
    submitMessage.value = '❌ Có lỗi xảy ra. Vui lòng thử lại sau.'
  } finally {
    isSubmitting.value = false
  }
}

// Get similar properties
const similarProperties = computed(() => {
  if (!property.value) return []
  
  const currentId = property.value.id
  return propertyStore.properties
    .filter(p => {
      // Exclude current property
      if (p.id === currentId) return false
      
      // Filter by same type or similar location
      return p.type === property.value.type || 
             p.location.includes(property.value.location.split(',')[0])
    })
    .slice(0, 4) // Limit to 4 similar properties
})

// Function to load property
const loadProperty = async () => {
  isLoading.value = true
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' })
  
  await propertyStore.fetchProperties()
  const propertyId = parseInt(route.params.id)
  const foundProperty = propertyStore.properties.find(p => p.id === propertyId)
  
  if (foundProperty) {
    property.value = foundProperty
    currentImageIndex.value = 0 // Reset to first image
  } else {
    property.value = null
    console.error('Property not found:', propertyId)
  }
  isLoading.value = false
}

// Watch for route changes
watch(() => route.params.id, (newId) => {
  if (newId) {
    loadProperty()
  }
})

onMounted(() => {
  loadProperty()
})
</script>

