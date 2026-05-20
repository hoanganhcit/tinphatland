<template>
  <div class="property-card" @click="goToDetail">
    <div class="card-image">
      <img :src="property.image || 'https://via.placeholder.com/300x200'" :alt="property.title">
      <span v-if="property.featured" class="badge-featured">Nổi bật</span>
      <span v-if="property.status === 'sold'" class="badge-sold">Đã bán</span>
      <span v-if="property.status === 'deposited'" class="badge-deposited">Đã cọc</span>
    </div>
    
    <div class="card-content">
      <h3 class="title">{{ property.title }}</h3>
      <p class="price">{{ formatPrice(property.price) }}</p>
      
      <div class="details">
        <span class="detail-item">
          📐 {{ property.area }} m²
        </span>
        <span class="detail-item">
          📍 {{ property.location }}
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

