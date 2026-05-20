<template>
  <div class="property-list">
    <PropertyCard 
      v-for="property in properties" 
      :key="property.id"
      :property="property"
    />
  </div>
</template>

<script setup>
import PropertyCard from './PropertyCard.vue'

defineProps({
  properties: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.property-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .property-list {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
}
</style>
