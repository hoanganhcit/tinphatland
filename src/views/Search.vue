<template>
  <div class="search-page">
    <div class="container">
      <h1>Tìm kiếm bất động sản</h1>
      
      <div class="search-filters">
        <input v-model="filters.keyword" type="text" placeholder="Nhập từ khóa: Rainbow, Beverly, Origami...">
        <select v-model="filters.type">
          <option value="">Tất cả loại BĐS</option>
          <option value="Studio">Studio</option>
          <option value="1PN">1PN</option>
          <option value="1PN+">1PN+</option>
          <option value="2PN">2PN</option>
          <option value="2PN+">2PN+</option>
          <option value="3PN">3PN</option>
          <option value="3PN+">3PN+</option>
        </select>
        <select v-model="filters.city">
          <option value="">Tất cả phân khu</option>
          <option value="The Manhattan">The Manhattan</option>
          <option value="The Origami">The Origami</option>
          <option value="The Rainbow">The Rainbow</option>
          <option value="The Beverly Solari">The Beverly Solari</option>
          <option value="The Beverly">The Beverly</option>
          <option value="Glory Heights">Glory Heights</option>
          <option value="The Manhattan Glory">The Manhattan Glory</option>
          <option value="The Opus One">The Opus One</option>
        </select>
        <select v-model="filters.priceRange">
          <option value="">Mức giá</option>
          <option value="0-3">Dưới 3 tỷ</option>
          <option value="3-5">3 - 5 tỷ</option>
          <option value="5-7">5 - 7 tỷ</option>
          <option value="7">Trên 7 tỷ</option>
        </select>
        <button @click="handleSearch" class="btn-search">Tìm kiếm</button>
      </div>
      
      <div class="results">
        <p class="result-count">Tìm thấy {{ results.length }} kết quả - Trang {{ currentPage }}/{{ totalPages }}</p>
        <PropertyList :properties="paginatedResults" />
        
        <!-- Pagination -->
        <div v-if="totalPages > 1" class="pagination">
          <button 
            @click="goToPage(currentPage - 1)" 
            :disabled="currentPage === 1"
            class="pagination-btn"
          >
            <i class="fal fa-chevron-left"></i> Trước
          </button>
          
          <button
            v-for="(page, index) in visiblePages"
            :key="index"
            @click="typeof page === 'number' ? goToPage(page) : null"
            :class="['pagination-btn', { active: page === currentPage, ellipsis: typeof page === 'string' }]"
            :disabled="typeof page === 'string'"
          >
            {{ page }}
          </button>
          
          <button 
            @click="goToPage(currentPage + 1)" 
            :disabled="currentPage === totalPages"
            class="pagination-btn"
          >
            Tiếp <i class="fal fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, computed, watch } from 'vue'
import { usePropertyStore } from '@/store/propertyStore'
import PropertyList from '@/components/property/PropertyList.vue'

const propertyStore = usePropertyStore()

// Pagination
const currentPage = ref(1)
const itemsPerPage = 6

const filters = reactive({
  keyword: '',
  type: '',
  city: '',
  priceRange: ''
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
  
  if (filters.priceRange) {
    filtered = filtered.filter(p => {
      const price = p.price / 1000000000 // Convert to tỷ
      if (filters.priceRange === '0-3') {
        return price < 3
      } else if (filters.priceRange === '3-5') {
        return price >= 3 && price < 5
      } else if (filters.priceRange === '5-7') {
        return price >= 5 && price < 7
      } else if (filters.priceRange === '7-10') {
        return price >= 7 && price < 10
      } else if (filters.priceRange === '10-15') {
        return price >= 10 && price < 15
      } else if (filters.priceRange === '15') {
        return price >= 15
      }
      return true
    })
  }
  
  return filtered
})

// Pagination computed properties
const totalPages = computed(() => {
  return Math.ceil(results.value.length / itemsPerPage)
})

const paginatedResults = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return results.value.slice(start, end)
})

const visiblePages = computed(() => {
  const pages = []
  const total = totalPages.value
  const current = currentPage.value
  
  if (total <= 7) {
    for (let i = 1; i <= total; i++) {
      pages.push(i)
    }
  } else {
    if (current <= 4) {
      for (let i = 1; i <= 5; i++) pages.push(i)
      pages.push('...')
      pages.push(total)
    } else if (current >= total - 3) {
      pages.push(1)
      pages.push('...')
      for (let i = total - 4; i <= total; i++) pages.push(i)
    } else {
      pages.push(1)
      pages.push('...')
      for (let i = current - 1; i <= current + 1; i++) pages.push(i)
      pages.push('...')
      pages.push(total)
    }
  }
  
  return pages
})

// Pagination methods
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// Reset to page 1 when filters change
watch(filters, () => {
  currentPage.value = 1
}, { deep: true })

const handleSearch = () => {
  currentPage.value = 1
  console.log('Searching with filters:', filters)
}

onMounted(() => {
  propertyStore.fetchProperties()
})
</script>
