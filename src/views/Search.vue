<template>
  <div class="search-page">
    <div class="container">
      <h1>Tìm kiếm bất động sản</h1>
      
      <div class="search-filters">
        <input v-model="filters.keyword" type="text" placeholder="Nhập từ khóa: Rainbow, Beverly, Origami...">
        <select v-model="filters.type">
          <option value="">Tất cả loại BĐS</option>
          <option value="Căn hộ">Căn hộ</option>
          <option value="Studio">Studio</option>
          <option value="Duplex">Duplex</option>
          <option value="Penthouse">Penthouse</option>
        </select>
        <select v-model="filters.city">
          <option value="">Tất cả khu vực</option>
          <option value="Quận 9">Quận 9</option>
          <option value="Quận 2">Quận 2</option>
          <option value="Thủ Đức">Thủ Đức</option>
        </select>
        <button @click="handleSearch" class="btn-search">Tìm kiếm</button>
      </div>
      
      <div class="results">
        <p class="result-count">Tìm thấy {{ results.length }} kết quả</p>
        <PropertyList :properties="results" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, computed } from 'vue'
import { usePropertyStore } from '@/store/propertyStore'
import PropertyList from '@/components/property/PropertyList.vue'

const propertyStore = usePropertyStore()

const filters = reactive({
  keyword: '',
  type: '',
  city: ''
})

const results = computed(() => {
  let filtered = propertyStore.properties
  
  if (filters.keyword) {
    const keyword = filters.keyword.toLowerCase()
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(keyword) || 
      p.description.toLowerCase().includes(keyword)
    )
  }
  
  if (filters.type) {
    filtered = filtered.filter(p => p.type === filters.type)
  }
  
  if (filters.city) {
    filtered = filtered.filter(p => p.location.includes(filters.city))
  }
  
  return filtered
})

const handleSearch = () => {
  // Tìm kiếm được thực hiện tự động qua computed property
  console.log('Searching with filters:', filters)
}

onMounted(() => {
  propertyStore.fetchProperties()
})
</script>
