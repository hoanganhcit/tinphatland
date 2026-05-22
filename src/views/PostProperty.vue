<template>
  <div class="post-property-page">
    <div class="container">
      <div class="post-header">
        <h1>Đăng Tin Bất Động Sản</h1>
        <p>Vinhomes Grand Park - Đô thị đáng sống bậc nhất</p>
      </div>
      
      <form @submit.prevent="handleSubmit" class="property-form-modern">
        <!-- Thông tin cơ bản -->
        <div class="form-section">
          <h2 class="section-title">
            <i class="fal fa-info-circle"></i>
            Thông tin cơ bản
          </h2>
          
          <div class="form-group">
            <label>Tiêu đề tin đăng <span class="required">*</span></label>
            <input 
              v-model="form.title" 
              type="text" 
              required 
              placeholder="VD: Căn hộ 2PN+ The Rainbow view công viên thoáng mát"
              class="form-input"
            >
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Dự án <span class="required">*</span></label>
              <input 
                v-model="form.project" 
                type="text" 
                readonly
                class="form-input readonly"
              >
            </div>

            <div class="form-group">
              <label>Khu/Phân khu <span class="required">*</span></label>
              <select v-model="form.zone" required class="form-select">
                <option value="">Chọn phân khu</option>
                <option value="The Manhattan">The Manhattan</option>
                <option value="The Origami">The Origami</option>
                <option value="The Rainbow">The Rainbow</option>
                <option value="The Beverly Solari">The Beverly Solari</option>
                <option value="The Beverly">The Beverly</option>
                <option value="Glory Heights">Glory Heights</option>
                <option value="The Manhattan Glory">The Manhattan Glory</option>
                <option value="The Opus One">The Opus One</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Loại căn hộ <span class="required">*</span></label>
              <select v-model="form.type" required class="form-select">
                <option value="">Chọn loại</option>
                <option value="Studio">Studio</option>
                <option value="1PN">1PN</option>
                <option value="1PN+">1PN+</option>
                <option value="2PN">2PN</option>
                <option value="2PN+">2PN+</option>
                <option value="3PN">3PN</option>
                <option value="3PN+">3PN+</option>
              </select>
            </div>

            <div class="form-group">
              <label>Giá bán <span class="required">*</span></label>
              <input 
                v-model="form.price" 
                type="number" 
                required 
                placeholder="VD: 3500000000"
                class="form-input"
                step="100000000"
              >
              <small class="helper-text">{{ formatPrice(form.price) }}</small>
            </div>
          </div>
        </div>

        <!-- Thông tin chi tiết -->
        <div class="form-section">
          <h2 class="section-title">
            <i class="fal fa-home-lg-alt"></i>
            Thông tin chi tiết
          </h2>

          <div class="form-row">
            <div class="form-group">
              <label>Vị trí tầng <span class="required">*</span></label>
              <input 
                v-model="form.floor" 
                type="text" 
                required 
                placeholder="VD: Tầng 15"
                class="form-input"
              >
            </div>

            <div class="form-group">
              <label>Phòng ngủ <span class="required">*</span></label>
              <select v-model="form.bedrooms" required class="form-select">
                <option value="">Chọn số phòng</option>
                <option value="0">Studio (0 PN)</option>
                <option value="1">1 phòng ngủ</option>
                <option value="2">2 phòng ngủ</option>
                <option value="3">3 phòng ngủ</option>
                <option value="4">4 phòng ngủ</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Diện tích tim tường <span class="required">*</span></label>
              <div class="input-with-unit">
                <input 
                  v-model="form.grossArea" 
                  type="number" 
                  required 
                  placeholder="VD: 75"
                  class="form-input"
                  step="0.01"
                >
                <span class="unit">m²</span>
              </div>
            </div>

            <div class="form-group">
              <label>Diện tích thông thủy <span class="required">*</span></label>
              <div class="input-with-unit">
                <input 
                  v-model="form.netArea" 
                  type="number" 
                  required 
                  placeholder="VD: 65"
                  class="form-input"
                  step="0.01"
                >
                <span class="unit">m²</span>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Hướng ban công <span class="required">*</span></label>
              <select v-model="form.balconyDirection" required class="form-select">
                <option value="">Chọn hướng</option>
                <option value="Đông">Đông</option>
                <option value="Tây">Tây</option>
                <option value="Nam">Nam</option>
                <option value="Bắc">Bắc</option>
                <option value="Đông Bắc">Đông Bắc</option>
                <option value="Đông Nam">Đông Nam</option>
                <option value="Tây Bắc">Tây Bắc</option>
                <option value="Tây Nam">Tây Nam</option>
              </select>
            </div>

            <div class="form-group">
              <label>Tình trạng bàn giao <span class="required">*</span></label>
              <select v-model="form.handoverStatus" required class="form-select">
                <option value="">Chọn tình trạng</option>
                <option value="Bàn giao thô">Bàn giao thô</option>
                <option value="Bàn giao hoàn thiện cơ bản">Bàn giao hoàn thiện cơ bản</option>
                <option value="Bàn giao hoàn thiện cao cấp">Bàn giao hoàn thiện cao cấp</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Tình trạng nội thất <span class="required">*</span></label>
              <select v-model="form.furnitureStatus" required class="form-select">
                <option value="">Chọn tình trạng</option>
                <option value="Không nội thất">Không nội thất</option>
                <option value="Nội thất cơ bản">Nội thất cơ bản</option>
                <option value="Nội thất đầy đủ">Nội thất đầy đủ</option>
                <option value="Nội thất cao cấp">Nội thất cao cấp</option>
              </select>
            </div>

            <div class="form-group">
              <label>Tình trạng sử dụng <span class="required">*</span></label>
              <select v-model="form.usageStatus" required class="form-select">
                <option value="">Chọn tình trạng</option>
                <option value="Chưa bàn giao">Chưa bàn giao</option>
                <option value="Đã bàn giao chưa ở">Đã bàn giao chưa ở</option>
                <option value="Đang ở">Đang ở</option>
                <option value="Đang cho thuê">Đang cho thuê</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Hình ảnh -->
        <div class="form-section">
          <h2 class="section-title">
            <i class="fal fa-images"></i>
            Hình ảnh căn hộ
          </h2>

          <div class="form-group">
            <label>Tải lên hình ảnh <span class="required">*</span></label>
            <div class="image-upload-area">
              <input 
                ref="fileInput"
                type="file" 
                multiple 
                accept="image/*" 
                @change="handleFileUpload"
                class="file-input"
                id="imageUpload"
              >
              <label for="imageUpload" class="upload-label">
                <i class="fal fa-cloud-upload"></i>
                <span>Chọn hoặc kéo thả hình ảnh vào đây</span>
                <small>Tối đa 10 ảnh, mỗi ảnh không quá 5MB (PNG, JPG, JPEG)</small>
              </label>
            </div>

            <div v-if="previewImages.length > 0" class="image-preview-grid">
              <div v-for="(img, index) in previewImages" :key="index" class="preview-item">
                <img :src="img" :alt="`Preview ${index + 1}`">
                <button type="button" @click="removeImage(index)" class="remove-btn">
                  <i class="fal fa-times"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Mô tả -->
        <div class="form-section">
          <h2 class="section-title">
            <i class="fal fa-file-alt"></i>
            Mô tả chi tiết
          </h2>

          <div class="form-group">
            <label>Mô tả</label>
            <textarea 
              v-model="form.description" 
              rows="6" 
              placeholder="Nhập mô tả chi tiết về căn hộ, vị trí, tiện ích xung quanh..."
              class="form-textarea"
            ></textarea>
            <small class="helper-text">{{ form.description.length }} ký tự</small>
          </div>
        </div>

        <!-- Thông tin liên hệ -->
        <div class="form-section">
          <h2 class="section-title">
            <i class="fal fa-user-circle"></i>
            Thông tin liên hệ
          </h2>

          <div class="form-row">
            <div class="form-group">
              <label>Tên người liên hệ <span class="required">*</span></label>
              <input 
                v-model="form.contactName" 
                type="text" 
                required 
                placeholder="Họ và tên"
                class="form-input"
              >
            </div>

            <div class="form-group">
              <label>Số điện thoại <span class="required">*</span></label>
              <input 
                v-model="form.contactPhone" 
                type="tel" 
                required 
                placeholder="VD: 0967777143"
                class="form-input"
                pattern="[0-9]{10}"
              >
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="form-actions">
          <button type="submit" class="btn-submit-modern" :disabled="isSubmitting">
            <i class="fal fa-paper-plane"></i>
            <span v-if="isSubmitting">Đang đăng tin...</span>
            <span v-else>Đăng tin ngay</span>
          </button>
          <button type="button" class="btn-cancel-modern" @click="handleCancel">
            <i class="fal fa-times"></i>
            Hủy bỏ
          </button>
        </div>

        <p v-if="submitMessage" :class="['submit-status', { success: submitSuccess }]">
          {{ submitMessage }}
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const fileInput = ref(null)
const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)
const previewImages = ref([])

const form = reactive({
  title: '',
  project: 'Vinhomes Grand Park',
  zone: '',
  type: '',
  price: '',
  floor: '',
  bedrooms: '',
  grossArea: '',
  netArea: '',
  balconyDirection: '',
  handoverStatus: '',
  furnitureStatus: '',
  usageStatus: '',
  description: '',
  contactName: '',
  contactPhone: '',
  images: []
})

const formatPrice = (price) => {
  if (!price) return ''
  const billion = price / 1000000000
  return billion >= 1 
    ? `≈ ${billion.toFixed(2)} tỷ VNĐ` 
    : `≈ ${(price / 1000000).toFixed(0)} triệu VNĐ`
}

const handleFileUpload = (event) => {
  const files = Array.from(event.target.files)
  
  if (files.length + form.images.length > 10) {
    alert('Tối đa 10 ảnh!')
    return
  }

  files.forEach(file => {
    if (file.size > 5 * 1024 * 1024) {
      alert(`File ${file.name} quá lớn (>5MB)`)
      return
    }

    form.images.push(file)
    
    const reader = new FileReader()
    reader.onload = (e) => {
      previewImages.value.push(e.target.result)
    }
    reader.readAsDataURL(file)
  })
}

const removeImage = (index) => {
  form.images.splice(index, 1)
  previewImages.value.splice(index, 1)
}

const handleSubmit = async () => {
  if (form.images.length === 0) {
    alert('Vui lòng tải lên ít nhất 1 hình ảnh!')
    return
  }

  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Property form data:', form)
    
    submitSuccess.value = true
    submitMessage.value = '✅ Đăng tin thành công! Tin của bạn đang chờ phê duyệt.'
    
    // Redirect after 2 seconds
    setTimeout(() => {
      router.push('/')
    }, 2000)
  } catch (error) {
    submitSuccess.value = false
    submitMessage.value = '❌ Có lỗi xảy ra. Vui lòng thử lại sau.'
  } finally {
    isSubmitting.value = false
  }
}

const handleCancel = () => {
  if (confirm('Bạn có chắc muốn hủy? Dữ liệu sẽ không được lưu.')) {
    router.push('/')
  }
}
</script>
