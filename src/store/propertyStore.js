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
          title: '2 PN, Tòa S1.05, khu The Rainbow',
          price: 2800000000,
          area: 68,
          direction: 'Đông Nam',
          pricePerSqm: 41.18,
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
          title: '3 PN, Tòa Origami 1, khu The Origami',
          price: 4200000000,
          area: 89,
          direction: 'Nam',
          pricePerSqm: 47.19,
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
          title: 'Studio, Tòa S3.02, khu The Rainbow',
          price: 1600000000,
          area: 35,
          direction: 'Bắc',
          pricePerSqm: 45.71,
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
          title: '2 PN, Tòa BS16, khu The Beverly Solari',
          price: 3200000000,
          area: 72,
          direction: 'Đông',
          pricePerSqm: 44.44,
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
          title: '3 PN, Tòa S2.08, khu The Rainbow',
          price: 3900000000,
          area: 85,
          direction: 'Tây Nam',
          pricePerSqm: 45.88,
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
          title: 'Penthouse 4 PN, Tòa Origami 3, khu The Origami',
          price: 8500000000,
          area: 150,
          direction: 'Đông - Tây',
          pricePerSqm: 56.67,
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
          title: '2 PN, Tòa M2, khu The Manhattan',
          price: 3500000000,
          area: 75,
          direction: 'Nam - Tây',
          pricePerSqm: 46.67,
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
          title: '1 PN, Tòa S1.03, khu The Rainbow',
          price: 2100000000,
          area: 50,
          direction: 'Tây',
          pricePerSqm: 42.0,
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
          title: '3 PN, Tòa BS20, khu The Beverly Solari',
          price: 4800000000,
          area: 95,
          direction: 'Đông Nam',
          pricePerSqm: 50.53,
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
          title: 'Duplex 3 PN, Tòa Origami 2, khu The Origami',
          price: 6200000000,
          area: 120,
          direction: 'Bắc - Nam',
          pricePerSqm: 51.67,
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
