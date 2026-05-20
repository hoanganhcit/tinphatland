import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const usePropertyStore = defineStore('property', () => {
  // State
  const properties = ref([])
  const loading = ref(false)
  const error = ref(null)
  
  // Getters
  const totalProperties = computed(() => properties.value.length)
  const featuredProperties = computed(() => 
    properties.value.filter(p => p.featured)
  )
  
  // Actions
  async function fetchProperties() {
    loading.value = true
    try {
      // Dữ liệu mẫu các căn hộ Vinhome Grand Park
      properties.value = [
        {
          id: 1,
          title: 'Căn hộ 2PN Vinhomes Grand Park - The Rainbow',
          price: 2800000000,
          area: 68,
          location: 'Quận 9, TP.HCM',
          image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
          featured: true,
          type: 'Căn hộ',
          description: 'Căn hộ 2 phòng ngủ tại tòa The Rainbow, Vinhomes Grand Park. View đẹp, thoáng mát, đầy đủ nội thất cao cấp.',
          bedrooms: 2,
          bathrooms: 2,
          contactName: 'Anh Minh',
          contactPhone: '0901234567'
        },
        {
          id: 2,
          title: 'Căn hộ 3PN Vinhomes Grand Park - The Origami',
          price: 4200000000,
          area: 89,
          location: 'Quận 9, TP.HCM',
          image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
          featured: true,
          type: 'Căn hộ',
          description: 'Căn hộ 3 phòng ngủ rộng rãi tại The Origami, view công viên 36ha, nội thất sang trọng, giá tốt.',
          bedrooms: 3,
          bathrooms: 2,
          contactName: 'Chị Lan',
          contactPhone: '0912345678'
        },
        {
          id: 3,
          title: 'Căn Studio Vinhomes Grand Park - The Rainbow',
          price: 1600000000,
          area: 35,
          location: 'Quận 9, TP.HCM',
          image: 'https://images.unsplash.com/photo-1502672260066-6bc35f0a1d7f?w=800',
          featured: false,
          status: 'sold',
          type: 'Căn hộ',
          description: 'Căn Studio nhỏ gọn, phù hợp người độc thân hoặc đầu tư cho thuê. Giá hấp dẫn.',
          bedrooms: 1,
          bathrooms: 1,
          contactName: 'Anh Tuấn',
          contactPhone: '0923456789'
        },
        {
          id: 4,
          title: 'Căn hộ 2PN Vinhomes Grand Park - The Beverly',
          price: 3200000000,
          area: 72,
          location: 'Quận 9, TP.HCM',
          image: 'https://images.unsplash.com/photo-1565623006069-c3fe64b86c77?w=800',
          featured: true,
          type: 'Căn hộ',
          description: 'Căn hộ 2PN tại The Beverly, tầng cao view sông đẹp, ban công rộng, nội thất hiện đại.',
          bedrooms: 2,
          bathrooms: 2,
          contactName: 'Chị Hương',
          contactPhone: '0934567890'
        },
        {
          id: 5,
          title: 'Căn hộ 3PN Vinhomes Grand Park - The Rainbow',
          price: 3900000000,
          area: 85,
          location: 'Quận 9, TP.HCM',
          image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
          featured: false,
          status: 'deposited',
          type: 'Căn hộ',
          description: 'Căn góc 3 phòng ngủ, ánh sáng tự nhiên tuyệt đẹp, view công viên và hồ bơi.',
          bedrooms: 3,
          bathrooms: 2,
          contactName: 'Anh Đức',
          contactPhone: '0945678901'
        },
        {
          id: 6,
          title: 'Căn Penthouse Vinhomes Grand Park - The Origami',
          price: 8500000000,
          area: 150,
          location: 'Quận 9, TP.HCM',
          image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
          featured: true,
          type: 'Căn hộ',
          description: 'Penthouse cao cấp 4PN, sân vườn riêng trên cao, view 360 độ toàn khu đô thị.',
          bedrooms: 4,
          bathrooms: 3,
          contactName: 'Anh Khoa',
          contactPhone: '0956789012'
        },
        {
          id: 7,
          title: 'Căn hộ 2PN Vinhomes Grand Park - The Manhattan',
          price: 3500000000,
          area: 75,
          location: 'Quận 9, TP.HCM',
          image: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800',
          featured: false,
          status: 'deposited',
          type: 'Căn hộ',
          description: 'Căn hộ mới bàn giao, chưa qua sử dụng, view hồ bơi, tiện ích nội khu đầy đủ.',
          bedrooms: 2,
          bathrooms: 2,
          contactName: 'Chị Mai',
          contactPhone: '0967890123'
        },
        {
          id: 8,
          title: 'Căn hộ 1PN Vinhomes Grand Park - The Rainbow',
          price: 2100000000,
          area: 50,
          location: 'Quận 9, TP.HCM',
          image: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800',
          featured: false,
          status: 'sold',
          type: 'Căn hộ',
          description: 'Căn hộ 1 phòng ngủ nhỏ gọn, phù hợp gia đình trẻ, gần trường học và siêu thị.',
          bedrooms: 1,
          bathrooms: 1,
          contactName: 'Anh Hải',
          contactPhone: '0978901234'
        },
        {
          id: 9,
          title: 'Căn hộ 3PN Vinhomes Grand Park - The Beverly',
          price: 4800000000,
          area: 95,
          location: 'Quận 9, TP.HCM',
          image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
          featured: true,
          type: 'Căn hộ',
          description: 'Căn hộ 3PN rộng rãi, thiết kế thông minh, nội thất cao cấp nhập khẩu, view đẹp.',
          bedrooms: 3,
          bathrooms: 2,
          contactName: 'Chị Phương',
          contactPhone: '0989012345'
        },
        {
          id: 10,
          title: 'Căn Duplex Vinhomes Grand Park - The Origami',
          price: 6200000000,
          area: 120,
          location: 'Quận 9, TP.HCM',
          image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800',
          featured: true,
          type: 'Căn hộ',
          description: 'Căn Duplex 2 tầng độc đáo, 3PN, phòng khách rộng, trần cao tạo cảm giác thoáng đãng.',
          bedrooms: 3,
          bathrooms: 3,
          contactName: 'Anh Long',
          contactPhone: '0990123456'
        }
      ]
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }
  
  function addProperty(property) {
    properties.value.push(property)
  }
  
  return {
    properties,
    loading,
    error,
    totalProperties,
    featuredProperties,
    fetchProperties,
    addProperty
  }
})
