<template>
  <div class="post-property">
    <div class="container">
      <h1>Đăng tin bất động sản</h1>
      
      <form @submit.prevent="handleSubmit" class="property-form">
        <div class="form-group">
          <label>Tiêu đề tin đăng *</label>
          <input v-model="form.title" type="text" required placeholder="Ví dụ: Bán nhà phố 2 lầu, khu dân cư cao cấp">
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label>Loại BĐS *</label>
            <select v-model="form.type" required>
              <option value="">Chọn loại</option>
              <option value="nha-pho">Nhà phố</option>
              <option value="chung-cu">Chung cư</option>
              <option value="dat-nen">Đất nền</option>
              <option value="biet-thu">Biệt thự</option>
            </select>
          </div>
          
          <div class="form-group">
            <label>Hình thức *</label>
            <select v-model="form.saleType" required>
              <option value="">Chọn hình thức</option>
              <option value="ban">Cần bán</option>
              <option value="cho-thue">Cho thuê</option>
            </select>
          </div>
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label>Giá (VNĐ) *</label>
            <input v-model="form.price" type="number" required placeholder="0">
          </div>
          
          <div class="form-group">
            <label>Diện tích (m²) *</label>
            <input v-model="form.area" type="number" required placeholder="0">
          </div>
        </div>
        
        <div class="form-group">
          <label>Địa chỉ *</label>
          <input v-model="form.address" type="text" required placeholder="Số nhà, tên đường">
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label>Quận/Huyện *</label>
            <input v-model="form.district" type="text" required>
          </div>
          
          <div class="form-group">
            <label>Tỉnh/Thành phố *</label>
            <select v-model="form.city" required>
              <option value="">Chọn tỉnh/thành</option>
              <option value="tp-hcm">TP. Hồ Chí Minh</option>
              <option value="ha-noi">Hà Nội</option>
              <option value="da-nang">Đà Nẵng</option>
            </select>
          </div>
        </div>
        
        <div class="form-group">
          <label>Mô tả chi tiết *</label>
          <textarea v-model="form.description" rows="6" required placeholder="Nhập mô tả chi tiết về bất động sản..."></textarea>
        </div>
        
        <div class="form-group">
          <label>Hình ảnh</label>
          <input type="file" multiple accept="image/*" @change="handleFileUpload">
          <small>Tối đa 10 ảnh, mỗi ảnh không quá 5MB</small>
        </div>
        
        <div class="form-group">
          <label>Thông tin liên hệ *</label>
          <input v-model="form.contactName" type="text" required placeholder="Tên người liên hệ">
          <input v-model="form.contactPhone" type="tel" required placeholder="Số điện thoại">
        </div>
        
        <div class="form-actions">
          <button type="submit" class="btn-submit">Đăng tin</button>
          <button type="button" class="btn-cancel" @click="handleCancel">Hủy</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  title: '',
  type: '',
  saleType: '',
  price: '',
  area: '',
  address: '',
  district: '',
  city: '',
  description: '',
  contactName: '',
  contactPhone: '',
  images: []
})

const handleFileUpload = (event) => {
  form.images = Array.from(event.target.files)
}

const handleSubmit = () => {
  // TODO: Implement API call
  alert('Đăng tin thành công!')
  router.push('/')
}

const handleCancel = () => {
  router.push('/')
}
</script>
