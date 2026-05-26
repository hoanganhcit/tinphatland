import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { propertyAPI } from "../services/api";

export const usePropertyStore = defineStore("property", () => {
  // State
  const properties = ref([]);
  const loading = ref(false);
  const error = ref(null);

  // Getters
  const totalProperties = computed(() => properties.value.length);
  const featuredProperties = computed(() => {
    const featured = properties.value.filter((p) => p.featured);
    // If no featured properties, return first 6 properties
    return featured.length > 0 ? featured : properties.value.slice(0, 6);
  });

  // Actions
  async function fetchProperties(params = {}) {
    loading.value = true;
    error.value = null;
    try {
      const response = await propertyAPI.getAll(params);
      
      console.log('API Response:', response);
      console.log('Properties count:', response?.data?.length || 0);
      
      // API trả về { success, data, pagination }
      if (response.success) {
        properties.value = response.data.map(property => ({
          ...property,
          // Map backend fields to frontend format
          id: property._id,
          featured: property.featured || false, // Ensure featured field is preserved
          image: property.images && property.images.length > 0 
            ? `http://localhost:3001${property.images[0]}` 
            : '/images/placeholder.jpg',
          location: `${property.zone}, Vinhomes Grand Park, TP. Thủ Đức, TP.HCM`,
          code: property._id.slice(-8).toUpperCase()
        }));
        
        console.log('Mapped properties:', properties.value);
        console.log('Featured properties:', properties.value.filter(p => p.featured));
      }
      
      return response;
    } catch (err) {
      console.error('Error fetching properties:', err);
      error.value = err.message;
      
      // Fallback to sample data if API fails
      properties.value = getSampleData();
    } finally {
      loading.value = false;
    }
  }

  async function getPropertyById(id) {
    loading.value = true;
    error.value = null;
    try {
      const response = await propertyAPI.getById(id);
      
      if (response.success) {
        const property = response.data;
        return {
          ...property,
          id: property._id,
          images: property.images.map(img => `http://localhost:3001${img}`),
          location: `${property.zone}, Vinhomes Grand Park, TP. Thủ Đức, TP.HCM`,
          code: property._id.slice(-8).toUpperCase()
        };
      }
      
      return null;
    } catch (err) {
      console.error('Error fetching property:', err);
      error.value = err.message;
      return null;
    } finally {
      loading.value = false;
    }
  }

  async function createProperty(formData) {
    loading.value = true;
    error.value = null;
    try {
      const response = await propertyAPI.create(formData);
      
      if (response.success) {
        // Refresh properties list
        await fetchProperties();
      }
      
      return response;
    } catch (err) {
      console.error('Error creating property:', err);
      error.value = err.message;
      throw err;
    } finally {
      loading.value = false;
    }
  }

  async function searchProperties(params) {
    loading.value = true;
    error.value = null;
    try {
      const response = await propertyAPI.search(params);
      
      if (response.success) {
        return response.data.map(property => ({
          ...property,
          id: property._id,
          image: property.images && property.images.length > 0 
            ? `http://localhost:3001${property.images[0]}` 
            : '/images/placeholder.jpg',
          location: `${property.zone}, Vinhomes Grand Park, TP. Thủ Đức, TP.HCM`,
          code: property._id.slice(-8).toUpperCase()
        }));
      }
      
      return [];
    } catch (err) {
      console.error('Error searching properties:', err);
      error.value = err.message;
      return [];
    } finally {
      loading.value = false;
    }
  }

  // Sample data for fallback
  function getSampleData() {
    return [
      {
        id: 1,
        title: "3 PN, Tòa GH6, phân khu Glory Heights",
        price: 5550000000,
        location: "Vinhomes Grand Park, TP. Thủ Đức, TP.HCM",
        image: "/images/GH63PN.jfif",
        featured: true,
        type: "Căn hộ",
        description: "Căn hộ 3 phòng ngủ tại tòa GH6 - Glory Heights, view hồ bơi thoáng mát, nhà trống nhận nhà ngay, hỗ trợ xem nhà 24/7.",
        bedrooms: 3,
        bathrooms: 2,
        floor: 18,
        grossArea: 90.5,
        netArea: 81.5,
        balconyDirection: "Tây Bắc",
        handoverStatus: "Đã bàn giao",
        furnitureStatus: "Nhà trống",
        usageStatus: "Nhà trống",
        zone: "Glory Heights",
        contactName: "Hoàng Anh",
        contactPhone: "0967777143",
      },
      // ... more sample data for offline mode
    ];
  }

  function addProperty(property) {
    properties.value.push(property);
  }

  return {
    // State
    properties,
    loading,
    error,
    
    // Getters
    totalProperties,
    featuredProperties,
    
    // Actions
    fetchProperties,
    getPropertyById,
    createProperty,
    searchProperties,
    addProperty,
  };
});
