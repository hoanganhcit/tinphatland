<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="contact-hero">
      <div class="container">
        <div class="hero-content">
          <span class="hero-badge">✉️ Liên hệ</span>
          <h1>Chúng tôi luôn sẵn sàng hỗ trợ bạn</h1>
          <p>Để lại thông tin hoặc liên hệ trực tiếp với chúng tôi qua các kênh bên dưới</p>
        </div>
      </div>
    </section>

    <!-- Contact Methods -->
    <section class="contact-methods">
      <div class="container">
        <div class="methods-grid">
          <div class="method-card">
            <div class="method-icon">📞</div>
            <h3>Hotline</h3>
            <p class="method-value">1900 xxxx</p>
            <p class="method-desc">Hỗ trợ 24/7</p>
          </div>
          <div class="method-card">
            <div class="method-icon">✉️</div>
            <h3>Email</h3>
            <p class="method-value">info@tinphatland.vn</p>
            <p class="method-desc">Phản hồi trong 24h</p>
          </div>
          <div class="method-card">
            <div class="method-icon">📍</div>
            <h3>Địa chỉ</h3>
            <p class="method-value">Vinhomes Grand Park</p>
            <p class="method-desc">Quận 9, TP.HCM</p>
          </div>
          <div class="method-card">
            <div class="method-icon">🕒</div>
            <h3>Giờ làm việc</h3>
            <p class="method-value">8:00 - 18:00</p>
            <p class="method-desc">Thứ 2 - Thứ 7</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form & Info -->
    <section class="contact-main">
      <div class="container">
        <div class="contact-grid">
          <!-- Left: Contact Info -->
          <div class="contact-left">
            <div class="info-section">
              <h2>Thông tin liên hệ</h2>
              <p class="info-subtitle">Hãy liên hệ với chúng tôi qua bất kỳ kênh nào thuận tiện nhất cho bạn</p>
              
              <div class="info-list">
                <div class="info-item">
                  <div class="info-icon">📍</div>
                  <div class="info-content">
                    <h4>Văn phòng chính</h4>
                    <p>Vinhomes Grand Park, Quận 9<br>TP. Hồ Chí Minh, Việt Nam</p>
                  </div>
                </div>
                
                <div class="info-item">
                  <div class="info-icon">📞</div>
                  <div class="info-content">
                    <h4>Điện thoại</h4>
                    <p>Hotline: 1900 xxxx<br>Mobile: 0901 234 567</p>
                  </div>
                </div>
                
                <div class="info-item">
                  <div class="info-icon">✉️</div>
                  <div class="info-content">
                    <h4>Email</h4>
                    <p>info@tinphatland.vn<br>support@tinphatland.vn</p>
                  </div>
                </div>
                
                <div class="info-item">
                  <div class="info-icon">🕒</div>
                  <div class="info-content">
                    <h4>Thời gian làm việc</h4>
                    <p>Thứ 2 - Thứ 6: 8:00 - 18:00<br>Thứ 7: 8:00 - 12:00</p>
                  </div>
                </div>
              </div>

              <div class="social-links">
                <h4>Kết nối với chúng tôi</h4>
                <div class="social-icons">
                  <a href="#" class="social-icon">Facebook</a>
                  <a href="#" class="social-icon">Zalo</a>
                  <a href="#" class="social-icon">YouTube</a>
                  <a href="#" class="social-icon">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Contact Form -->
          <div class="contact-right">
            <div class="form-wrapper">
              <h2>Gửi tin nhắn cho chúng tôi</h2>
              <p class="form-subtitle">Điền thông tin bên dưới, chúng tôi sẽ phản hồi trong vòng 24 giờ</p>
              
              <form @submit.prevent="handleSubmit" class="contact-form">
                <div class="form-row">
                  <div class="form-group">
                    <label>Họ và tên *</label>
                    <input v-model="form.name" type="text" placeholder="Nguyễn Văn A" required>
                  </div>
                  <div class="form-group">
                    <label>Số điện thoại *</label>
                    <input v-model="form.phone" type="tel" placeholder="0901234567" pattern="[0-9]{10}" required>
                  </div>
                </div>
                
                <div class="form-group">
                  <label>Email *</label>
                  <input v-model="form.email" type="email" placeholder="email@example.com" required>
                </div>
                
                <div class="form-group">
                  <label>Loại yêu cầu</label>
                  <select v-model="form.type">
                    <option value="">Chọn loại yêu cầu</option>
                    <option value="consultation">Tư vấn mua bán</option>
                    <option value="viewing">Đặt lịch xem nhà</option>
                    <option value="pricing">Hỏi về giá</option>
                    <option value="other">Khác</option>
                  </select>
                </div>
                
                <div class="form-group">
                  <label>Nội dung *</label>
                  <textarea v-model="form.message" rows="5" placeholder="Nhập nội dung tin nhắn của bạn..." required></textarea>
                </div>
                
                <button type="submit" class="btn-submit" :disabled="isSubmitting">
                  {{ isSubmitting ? '⏳ Đang gửi...' : '📤 Gửi tin nhắn' }}
                </button>
                
                <p class="form-note">* Thông tin của bạn sẽ được bảo mật tuyệt đối</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
      <div class="container">
        <h2>Vị trí văn phòng</h2>
        <div class="map-wrapper">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4544374621905!2d106.8244124!3d10.8540446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8a415c2e703%3A0x550c3b1ad8c1bd0e!2sVinhomes%20Grand%20Park!5e0!3m2!1svi!2s!4v1234567890123!5m2!1svi!2s"
            width="100%" 
            height="450" 
            style="border:0; border-radius: 12px;" 
            allowfullscreen="" 
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  type: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Contact form:', form)
    alert('✅ Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.')
    
    // Reset form
    form.name = ''
    form.email = ''
    form.phone = ''
    form.type = ''
    form.message = ''
  } catch (error) {
    alert('❌ Có lỗi xảy ra. Vui lòng thử lại sau.')
  } finally {
    isSubmitting.value = false
  }
}
</script>
