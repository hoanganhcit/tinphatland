<template>
  <div class="post-property-page">
    <div class="container">
      <div class="post-header">
        <h1>{{ isEditMode ? 'Chỉnh Sửa Tin Đăng' : 'Đăng Tin Bất Động Sản' }}</h1>
        <p>Vinhomes Grand Park - Đô thị đáng sống bậc nhất</p>
      </div>
      
      <!-- Loading indicator -->
      <div v-if="isLoading" class="loading-container">
        <div class="loading-content">
          <i class="fal fa-spinner-third fa-spin"></i>
          <p>Đang tải thông tin tin đăng...</p>
        </div>
      </div>
      
      <form v-else @submit.prevent="handleSubmit" class="property-form-modern">
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

          <div class="form-row">
            <div class="form-group">
              <label>Trạng thái bán hàng <span class="required">*</span></label>
              <select v-model="form.salesStatus" required class="form-select">
                <option value="">Chọn trạng thái</option>
                <option value="Đang bán">Đang bán</option>
                <option value="Đã cọc">Đã cọc</option>
                <option value="Đã đặt chỗ">Đã đặt chỗ</option>
                <option value="Đã bán">Đã bán</option>
              </select>
            </div>

            <div class="form-group checkbox-wrapper">
              <label>Nổi bật</label>
              <label class="checkbox-label">
                <input 
                  v-model="form.featured" 
                  type="checkbox" 
                  class="form-checkbox"
                >
                <span class="checkbox-text">
                  Đánh dấu tin nổi bật
                </span>
              </label>
              <small class="helper-text">Tin nổi bật sẽ hiển thị ở trang chủ</small>
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
                accept="image/jpeg,image/jpg,image/png,image/gif,image/webp,.jfif" 
                @change="handleFileUpload"
                class="file-input"
                id="imageUpload"
              >
              <label for="imageUpload" class="upload-label">
                <i class="fal fa-cloud-upload"></i>
                <span>Chọn hoặc kéo thả hình ảnh vào đây</span>
                <small>Tối đa 10 ảnh, mỗi ảnh không quá 5MB</small>
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
            <small class="helper-text">{{ form.description?.length || 0 }} ký tự</small>
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
import { reactive, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { propertyAPI } from '../services/api'

const router = useRouter()
const route = useRoute()
const fileInput = ref(null)
const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)
const previewImages = ref([])
const isEditMode = ref(false)
const editPropertyId = ref(null)
const isLoading = ref(false)
const existingImages = ref([])

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
  salesStatus: 'Đang bán',
  featured: false,
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
  
  const totalImages = existingImages.value.length + form.images.length + files.length
  if (totalImages > 10) {
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
  // Nếu index nhỏ hưn số ảnh cũ, xóa từ existingImages
  const existingCount = existingImages.value.length
  if (index < existingCount) {
    existingImages.value.splice(index, 1)
  } else {
    // Ngược lại xóa từ form.images mới
    const newImageIndex = index - existingCount
    form.images.splice(newImageIndex, 1)
  }
  previewImages.value.splice(index, 1)
}

const handleSubmit = async () => {
  if (form.images.length === 0 && existingImages.value.length === 0) {
    alert('Vui lòng tải lên ít nhất 1 hình ảnh!')
    return
  }

  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    // Tạo FormData để gửi kèm file
    const formData = new FormData()
    
    // Thêm tất cả các field vào FormData
    formData.append('title', form.title)
    formData.append('project', form.project)
    formData.append('zone', form.zone)
    formData.append('type', form.type)
    formData.append('price', form.price)
    formData.append('floor', form.floor)
    formData.append('bedrooms', form.bedrooms)
    formData.append('grossArea', form.grossArea)
    formData.append('netArea', form.netArea)
    formData.append('balconyDirection', form.balconyDirection)
    formData.append('handoverStatus', form.handoverStatus)
    formData.append('furnitureStatus', form.furnitureStatus)
    formData.append('usageStatus', form.usageStatus)
    formData.append('salesStatus', form.salesStatus)
    formData.append('featured', form.featured)
    formData.append('description', form.description)
    formData.append('contactName', form.contactName)
    formData.append('contactPhone', form.contactPhone)
    
    // Nếu đang edit, gửi danh sách ảnh cũ cần giữ lại
    if (isEditMode.value && existingImages.value.length > 0) {
      formData.append('existingImages', JSON.stringify(existingImages.value))
    }
    
    // Thêm tất cả các file ảnh mới
    form.images.forEach((image) => {
      formData.append('images', image)
    })
    
    // Gọi API để tạo hoặc update property
    let response
    if (isEditMode.value) {
      response = await propertyAPI.update(editPropertyId.value, formData)
    } else {
      response = await propertyAPI.create(formData)
    }
    
    console.log('Property saved:', response)
    
    submitSuccess.value = true
    submitMessage.value = isEditMode.value 
      ? '✅ Cập nhật tin thành công!' 
      : '✅ Đăng tin thành công! Tin của bạn đang chờ phê duyệt.'
    
    // Redirect sau 2 giây
    setTimeout(() => {
      router.push('/admin')
    }, 2000)
  } catch (error) {
    console.error('Error submitting property:', error)
    submitSuccess.value = false
    
    // Hiển thị lỗi chi tiết từ backend
    if (error.response?.data?.message) {
      submitMessage.value = `❌ ${error.response.data.message}`
    } else {
      submitMessage.value = '❌ Có lỗi xảy ra. Vui lòng thử lại sau.'
    }
  } finally {
    isSubmitting.value = false
  }
}

const handleCancel = () => {
  if (confirm('Bạn có chắc muốn hủy? Dữ liệu sẽ không được lưu.')) {
    router.push(isEditMode.value ? '/admin' : '/')
  }
}

const loadPropertyData = async (id) => {
  isLoading.value = true
  try {
    const response = await propertyAPI.getById(id)
    const property = response.data
    
    // Fill form với data từ property
    form.title = property.title
    form.project = property.project
    form.zone = property.zone
    form.type = property.type
    form.price = property.price
    form.floor = property.floor
    form.bedrooms = property.bedrooms
    form.grossArea = property.grossArea
    form.netArea = property.netArea
    form.balconyDirection = property.balconyDirection
    form.handoverStatus = property.handoverStatus
    form.furnitureStatus = property.furnitureStatus
    form.usageStatus = property.usageStatus
    form.salesStatus = property.salesStatus
    form.featured = property.featured
    form.description = property.description
    form.contactName = property.contactName
    form.contactPhone = property.contactPhone
    
    // Lưu ảnh hiện có
    existingImages.value = property.images || []
    
    // Hiển thị preview ảnh hiện có
    existingImages.value.forEach(imagePath => {
      const imageUrl = `http://localhost:3001${imagePath}`
      previewImages.value.push(imageUrl)
    })
  } catch (error) {
    console.error('Error loading property:', error)
    alert('❌ Không thể tải thông tin tin đăng')
    router.push('/admin')
  } finally {
    isLoading.value = false
  }
}

onMounted(async () => {
  // Check nếu có query param edit
  const editId = route.query.edit
  if (editId) {
    isEditMode.value = true
    editPropertyId.value = editId
    await loadPropertyData(editId)
  }
})
</script>
