<template>
  <div class="home">
    <!-- Hero Section with Background -->
    <section class="hero">
      <div class="hero-background">
        <div class="hero-overlay"></div>
        <img src="https://vinhomegrandpark.com/wp-content/uploads/2023/12/du-an-can-ho-opus-one-vinhomes-4.jpg" alt="Vinhomes Grand Park">
      </div>
      <div class="container">
        <div class="hero-content">
          <span class="hero-badge">🏆 Chuyên trang mua bán căn hộ Vinhomes Grand Park</span>
          <h1>Tìm kiếm & Mua bán căn hộ<br>Vinhomes Grand Park</h1>
          <p class="hero-subtitle">Hơn 500+ căn hộ cao cấp đang giao dịch</p>
        </div>
      </div>
    </section>

    <!-- Search Section -->
    <!-- <section class="search-section">
      <div class="container">
        <div class="hero-search">
          <div class="search-form">
            <div class="search-item">
              <input 
                v-model="searchQuery" 
                type="text" 
                placeholder="Nhập từ khóa: Rainbow, Beverly, Origami..."
              />
            </div>
            <div class="search-item">
              <select v-model="searchType">
                <option value="">Tất cả loại BĐS</option>
                <option value="Căn hộ">Căn hộ</option>
                <option value="Studio">Studio</option>
                <option value="Duplex">Duplex</option>
                <option value="Penthouse">Penthouse</option>
              </select>
            </div>
            <div class="search-item">
              <select v-model="searchCity">
                <option value="">Tất cả khu vực</option>
                <option value="Quận 9">Quận 9</option>
                <option value="Quận 2">Quận 2</option>
                <option value="Thủ Đức">Thủ Đức</option>
              </select>
            </div>
            <button class="btn-search" @click="handleSearch">Tìm kiếm</button>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Featured Properties -->
    <section class="featured" id="properties">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">⭐ Nổi bật</span>
          <h2>Căn hộ được quan tâm nhất</h2>
          <p>Các căn hộ đẹp, vị trí đẹp, giá tốt đang được nhiều khách hàng quan tâm</p>
        </div>
        <PropertyList :properties="featuredProperties" />
      </div>
    </section>

    <!-- Project Highlights -->
    <section class="highlights">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">✨ Điểm nổi bật</span>
          <h2>Tại sao chọn Vinhomes Grand Park?</h2>
        </div>
        
        <div class="highlights-grid">
          <div class="highlight-card">
            <div class="highlight-icon">🏞️</div>
            <h3>Công viên 36ha</h3>
            <p>Công viên trung tâm rộng 36ha, mang đến không gian xanh mát và thoáng đãng cho cư dân</p>
          </div>
          <div class="highlight-card">
            <div class="highlight-icon">🏊</div>
            <h3>Tiện ích 5 sao</h3>
            <p>Hồ bơi Olympic, gym, yoga, spa, khu vui chơi trẻ em và hơn 100+ tiện ích cao cấp</p>
          </div>
          <div class="highlight-card">
            <div class="highlight-icon">🏫</div>
            <h3>Giáo dục đẳng cấp</h3>
            <p>Trường học liên cấp quốc tế Vinschool, chương trình giáo dục chuẩn Mỹ</p>
          </div>
          <div class="highlight-card">
            <div class="highlight-icon">🚇</div>
            <h3>Kết nối metro</h3>
            <p>5 phút đến ga Metro số 1, di chuyển nhanh chóng đến trung tâm TP.HCM</p>
          </div>
          <div class="highlight-card">
            <div class="highlight-icon">🏥</div>
            <h3>Y tế chất lượng</h3>
            <p>Bệnh viện Vinmec chuẩn quốc tế, chăm sóc sức khỏe toàn diện cho gia đình</p>
          </div>
          <div class="highlight-card">
            <div class="highlight-icon">🛍️</div>
            <h3>Mua sắm giải trí</h3>
            <p>Vincom Mega Mall với hàng trăm thương hiệu nổi tiếng và khu vui chơi hiện đại</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Properties by Area -->
    <section class="by-area">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">🏘️ Phân khu</span>
          <h2>Khám phá theo phân khu</h2>
          <p>Mỗi phân khu mang một phong cách thiết kế và tiện ích riêng biệt</p>
        </div>
        
        <div class="area-tabs">
          <button 
            v-for="area in areas" 
            :key="area.id"
            class="area-tab"
            :class="{ active: selectedArea === area.id }"
            @click="selectedArea = area.id"
          >
            <div class="area-info">
              <h4>{{ area.name }}</h4>
              <p>{{ area.count }} căn hộ</p>
            </div>
          </button>
        </div>

        <div class="area-content">
          <PropertyList :properties="propertiesByArea" />
          <div v-if="propertiesByArea.length === 0" class="no-properties">
            <p>Không có căn hộ nào trong khu vực này</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">💬 Đánh giá</span>
          <h2>Khách hàng nói gì về chúng tôi</h2>
        </div>
        
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="stars">⭐⭐⭐⭐⭐</div>
            <p>"Tôi rất hài lòng với căn hộ tại The Rainbow. Không gian thoáng đãng, view đẹp và tiện ích đầy đủ. Đội ngũ tư vấn rất nhiệt tình và chuyên nghiệp."</p>
            <div class="author">
              <strong>Chị Ngọc Anh</strong>
              <span>Căn hộ 2PN - The Rainbow</span>
            </div>
          </div>
          <div class="testimonial-card">
            <div class="stars">⭐⭐⭐⭐⭐</div>
            <p>"Vinhomes Grand Park thực sự là nơi lý tưởng để an cư. Con tôi rất thích công viên và khu vui chơi. An ninh tốt, hàng xóm thân thiện."</p>
            <div class="author">
              <strong>Anh Minh Tuấn</strong>
              <span>Căn hộ 3PN - The Origami</span>
            </div>
          </div>
          <div class="testimonial-card">
            <div class="stars">⭐⭐⭐⭐⭐</div>
            <p>"Đầu tư vào Vinhomes Grand Park là quyết định đúng đắn. Giá trị tăng đều, cho thuê dễ dàng. Tôi đã mua thêm 2 căn nữa."</p>
            <div class="author">
              <strong>Anh Đức Hải</strong>
              <span>Nhà đầu tư</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="contact-cta" id="contact">
      <div class="container">
        <div class="cta-content">
          <div class="cta-left">
            <h2>Đăng ký nhận tư vấn miễn phí</h2>
            <p>Để lại thông tin, chuyên viên của chúng tôi sẽ liên hệ tư vấn chi tiết về căn hộ phù hợp với nhu cầu của bạn</p>
            <ul class="cta-benefits">
              <li>✓ Tư vấn miễn phí 24/7</li>
              <li>✓ Hỗ trợ vay ngân hàng lãi suất ưu đãi</li>
              <li>✓ Xem nhà thực tế trực tiếp</li>
              <li>✓ Chính sách chiết khấu tốt nhất</li>
            </ul>
          </div>
          <div class="cta-right">
            <form @submit.prevent="submitContact" class="contact-form">
              <div class="form-group">
                <input type="text" v-model="contactForm.name" placeholder="Họ và tên *" required>
              </div>
              <div class="form-group">
                <input type="tel" v-model="contactForm.phone" placeholder="Số điện thoại *" pattern="[0-9]{10}" required>
              </div>
              <div class="form-group">
                <input type="email" v-model="contactForm.email" placeholder="Email">
              </div>
              <div class="form-group">
                <textarea v-model="contactForm.note" placeholder="Nhu cầu của bạn..." rows="3"></textarea>
              </div>
              <button type="submit" class="btn-submit" :disabled="isSubmitting">
                {{ isSubmitting ? '⏳ Đang gửi...' : '📞 Đăng ký ngay' }}
              </button>
              <p class="form-note">Thông tin của bạn sẽ được bảo mật tuyệt đối</p>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Badges -->
    <section class="trust-badges">
      <div class="container">
        <div class="badges-grid">
          <div class="badge-item">
            <div class="badge-icon">🏆</div>
            <p>Top 10 Dự án<br>Bất động sản 2026</p>
          </div>
          <div class="badge-item">
            <div class="badge-icon">✅</div>
            <p>Pháp lý<br>Minh bạch</p>
          </div>
          <div class="badge-item">
            <div class="badge-icon">🛡️</div>
            <p>Bảo mật<br>Thông tin</p>
          </div>
          <div class="badge-item">
            <div class="badge-icon">⚡</div>
            <p>Giao dịch<br>Nhanh chóng</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { usePropertyStore } from '@/store/propertyStore'
import PropertyList from '@/components/property/PropertyList.vue'

const router = useRouter()
const propertyStore = usePropertyStore()
const featuredProperties = computed(() => propertyStore.featuredProperties)

// Search state
const searchQuery = ref('')
const searchType = ref('')
const searchCity = ref('')

// Area selection
const selectedArea = ref('all')

// Contact form
const contactForm = ref({
  name: '',
  phone: '',
  email: '',
  note: ''
})
const isSubmitting = ref(false)

// Define areas with icons
const areas = computed(() => {
  const areaMap = {
    all: { id: 'all', name: 'Tất cả', count: 0 },
    rainbow: { id: 'rainbow', name: 'The Rainbow', count: 0 },
    origami: { id: 'origami', name: 'The Origami', count: 0 },
    beverly: { id: 'beverly', name: 'The Beverly', count: 0 },
    manhattan: { id: 'manhattan', name: 'The Manhattan', count: 0 }
  }
  
  // Count properties for each area
  propertyStore.properties.forEach(property => {
    const title = property.title.toLowerCase()
    if (title.includes('rainbow')) areaMap.rainbow.count++
    else if (title.includes('origami')) areaMap.origami.count++
    else if (title.includes('beverly')) areaMap.beverly.count++
    else if (title.includes('manhattan')) areaMap.manhattan.count++
  })
  
  areaMap.all.count = propertyStore.properties.length
  
  return Object.values(areaMap)
})

// Get properties by selected area
const propertiesByArea = computed(() => {
  if (selectedArea.value === 'all') {
    return propertyStore.properties
  }
  
  return propertyStore.properties.filter(property => {
    const title = property.title.toLowerCase()
    return title.includes(selectedArea.value)
  })
})

// Methods
const handleSearch = () => {
  router.push({
    path: '/tim-kiem',
    query: {
      q: searchQuery.value,
      type: searchType.value,
      city: searchCity.value
    }
  })
}

const scrollToProperties = () => {
  const element = document.getElementById('properties')
  element?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToContact = () => {
  const element = document.getElementById('contact')
  element?.scrollIntoView({ behavior: 'smooth' })
}

const submitContact = async () => {
  isSubmitting.value = true
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Contact form:', contactForm.value)
    alert('✅ Đã gửi thông tin thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.')
    
    // Reset form
    contactForm.value = {
      name: '',
      phone: '',
      email: '',
      note: ''
    }
  } catch (error) {
    alert('❌ Có lỗi xảy ra. Vui lòng thử lại sau.')
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  propertyStore.fetchProperties()
})
</script>
