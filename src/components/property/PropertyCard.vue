<template>
  <div class="property-card" @click="goToDetail">
    <div class="card-image">
      <img :src="property.image || 'https://via.placeholder.com/300x200'" :alt="property.title">
      <span v-if="property.featured" class="badge-featured">
        <i class="fas fa-star"></i> Nổi bật
      </span>
      <span v-if="property.salesStatus === 'Đã cọc'" class="badge-deposited">Đã cọc</span>
      <span v-if="property.salesStatus === 'Đã đặt chỗ'" class="badge-reserved">Đã đặt chỗ</span>
      <span v-if="property.salesStatus === 'Đã bán'" class="badge-sold">Đã bán</span>
    </div>
    
    <div class="card-content">
      <h3 class="title">{{ property.title }}</h3>
      
      <div class="price-section">
        <span class="price">{{ formatPrice(property.price) }}</span>
        <span class="price-per-sqm">{{ property.pricePerSqm }} triệu/m²</span>
      </div>
      
      <div class="property-specs">
        <span class="spec-item">
          <i class="fal fa-bed spec-icon"></i>
          <span class="spec-value">{{ property.bedrooms }}</span>
        </span>
        <span class="spec-divider">•</span>
        <span class="spec-item">
          <i class="fal fa-bath spec-icon"></i>
          <span class="spec-value">{{ property.bathrooms }}</span>
        </span>
        <span class="spec-divider">•</span>
        <span class="spec-item">
          <i class="fal fa-compass spec-icon"></i>
          <span class="spec-value">{{ property.balconyDirection }}</span>
        </span>
        <span class="spec-divider">•</span>
        <span class="spec-item">
          <span class="spec-value">{{ property.netArea }}m²</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  property: {
    type: Object,
    required: true
  }
})

const formatPrice = (price) => {
  if (price >= 1000000000) {
    return `${(price / 1000000000).toFixed(1)} tỷ`
  }
  return `${(price / 1000000).toFixed(0)} triệu`
}

const goToDetail = () => {
  router.push(`/bat-dong-san/${props.property.id}`)
}
</script>

