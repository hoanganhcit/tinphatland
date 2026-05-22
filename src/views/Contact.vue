<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="contact-hero-luxury">
      <div class="contact-hero-background">
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop" alt="Contact Us">
        <div class="contact-hero-overlay"></div>
      </div>
      <div class="container">
        <div class="hero-content-luxury">
          <h1>Liên Hệ Với Chúng Tôi</h1>
          <p>Chúng tôi luôn sẵn sàng tư vấn và hỗ trợ bạn</p>
        </div>
      </div>
    </section>

    <!-- Main Contact Section -->
    <section class="contact-main-luxury">
      <div class="container">
        <div class="contact-grid-luxury">
          <!-- Contact Info -->
          <div class="contact-info-luxury">
            <div class="info-card-luxury">
              <div class="info-item-luxury">
                <div class="info-icon-luxury">
                  <i class="fal fa-phone-alt"></i>
                </div>
                <div class="info-text-luxury">
                  <h4>Hotline</h4>
                  <a href="tel:0967777143">0967 777 143</a>
                </div>
              </div>

              <div class="info-item-luxury">
                <div class="info-icon-luxury">
                  <i class="fal fa-envelope"></i>
                </div>
                <div class="info-text-luxury">
                  <h4>Email</h4>
                  <a href="mailto:hoanganh94lksvn@gmail.com">hoanganh94lksvn@gmail.com</a>
                </div>
              </div>

              <div class="info-item-luxury">
                <div class="info-icon-luxury">
                  <i class="fal fa-map-marker-alt"></i>
                </div>
                <div class="info-text-luxury">
                  <h4>Địa chỉ</h4>
                  <p>Vinhomes Grand Park<br>Quận 9, TP. Hồ Chí Minh</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form-luxury">
            <div class="form-card-luxury">
              <h2>Gửi Tin Nhắn</h2>
              <form @submit.prevent="handleSubmit">
                <div class="form-group-luxury">
                  <input v-model="form.name" type="text" placeholder="Họ và tên *" required>
                </div>
                
                <div class="form-group-luxury">
                  <input v-model="form.phone" type="tel" placeholder="Số điện thoại *" required>
                </div>
                
                <div class="form-group-luxury">
                  <textarea v-model="form.message" rows="4" placeholder="Nội dung tin nhắn *" required></textarea>
                </div>
                
                <button type="submit" class="btn-submit-luxury" :disabled="isSubmitting">
                  <span v-if="isSubmitting">Đang gửi...</span>
                  <span v-else>Gửi tin nhắn</span>
                </button>

                <p v-if="submitMessage" class="submit-message-luxury" :class="{ success: submitSuccess }">
                  {{ submitMessage }}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  phone: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Contact form:', form)
    
    submitSuccess.value = true
    submitMessage.value = '✅ Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.'
    
    // Reset form
    form.name = ''
    form.phone = ''
    form.message = ''
    
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
</script>
