<template>
  <div class="property-detail">
    <!-- Loading State -->
    <div v-if="isLoading" class="loading-container">
      <div class="loading-content">
        <i class="fal fa-spinner-third fa-spin"></i>
        <p>Đang tải thông tin căn hộ...</p>
      </div>
    </div>

    <!-- Property Not Found -->
    <div v-else-if="!property" class="not-found">
      <i class="fal fa-home-lg-alt"></i>
      <h2>Không tìm thấy căn hộ</h2>
      <p>Căn hộ bạn đang tìm không tồn tại hoặc đã bị xóa.</p>
      <router-link to="/" class="btn-back">
        <i class="fal fa-arrow-left"></i>
        Về trang chủ
      </router-link>
    </div>

    <!-- Property Content -->
    <div v-else class="container">
      <!-- Image Gallery -->
      <div class="gallery-section">
        <div class="main-image" @click="openLightbox(currentImageIndex)">
          <img :src="images[currentImageIndex]" :alt="property.title" />
          <div class="image-count">
            {{ currentImageIndex + 1 }} / {{ images.length }}
          </div>
        </div>
        <div class="thumbnail-grid">
          <div
            v-for="(image, index) in images"
            :key="index"
            class="thumbnail"
            :class="{ active: index === currentImageIndex }"
            @click="currentImageIndex = index"
          >
            <img :src="image" :alt="`${property.title} - ${index + 1}`" />
          </div>
        </div>
      </div>

      <!-- Lightbox -->
      <div v-if="showLightbox" class="lightbox" @click="closeLightbox">
        <button class="close-btn" @click="closeLightbox">&times;</button>
        <button class="nav-btn prev" @click.stop="prevImage">‹</button>
        <img :src="images[lightboxIndex]" :alt="property.title" @click.stop />
        <button class="nav-btn next" @click.stop="nextImage">›</button>
        <div class="lightbox-counter">
          {{ lightboxIndex + 1 }} / {{ images.length }}
        </div>
      </div>

      <div class="property-info">
        <!-- Content Layout -->
        <div class="content-layout">
          <!-- Left Side - Property Details -->
          <div class="left-content">
            <!-- Header -->
            <div class="property-header">
              <div class="status-badge">ĐANG BÁN</div>
              <h1 class="property-title">{{ property.title }}</h1>
              <p class="property-address">
                <i class="fal fa-map-marker-alt"></i>
                {{ property.location }}
              </p>
              <p class="property-code">
                Mã tin đăng:
                <strong>{{ property.code || `VGP${property.id}` }}</strong>
              </p>
            </div>

            <!-- Price & Area Summary -->
            <div class="price-area-summary">
              <div class="price-box">
                <div class="price-label">Giá</div>
                <div class="price-value">{{ formatPrice(property.price) }}</div>
                <div class="price-per-m2">
                  {{ formatPricePerM2(property.price, property.netArea) }}
                </div>
                <div class="handover-note">Đã bao gồm toàn bộ Thuế, Phí</div>
              </div>
              <div class="area-box">
                <div class="area-label">Diện tích</div>
                <div class="area-value">{{ property.netArea }} m²</div>
                <div class="area-sub">Diện tích thông thủy</div>
              </div>
            </div>

            <!-- Handover Standard -->
            <div class="handover-standard">
              Tiêu chuẩn bàn giao:
              <strong>{{ property.furnitureStatus }}</strong>
            </div>
            <!-- Chi tiết căn -->
            <div class="details-section">
              <h2 class="section-heading">Chi tiết căn</h2>
              <table class="details-table">
                <tbody>
                  <tr>
                    <td class="label">Vị trí tầng</td>
                    <td class="value">{{ property.floor }}</td>
                    <td class="label">Phòng ngủ</td>
                    <td class="value">{{ property.bedrooms }}</td>
                  </tr>
                  <tr>
                    <td class="label">Diện tích tim tường</td>
                    <td class="value">
                      {{ property.grossArea }} m²
                    </td>
                    <td class="label">Diện tích thông thủy</td>
                    <td class="value">
                      {{ property.netArea }} m²
                    </td>
                  </tr>
                  <tr>
                    <td class="label">Hướng ban công</td>
                    <td class="value">
                      {{ property.balconyDirection }}
                    </td>
                    <td class="label">Tình trạng bàn giao</td>
                    <td class="value">
                      {{ property.handoverStatus }}
                    </td>
                  </tr>
                  <tr>
                    <td class="label">Tình trạng nội thất</td>
                    <td class="value">
                      {{ property.furnitureStatus }}
                    </td>
                    <td class="label">Tình trạng sử dụng</td>
                    <td class="value">
                      {{ property.usageStatus }}
                    </td>
                  </tr>
                  <tr>
                    <td class="label">Khu</td>
                    <td class="value">{{ property.zone }}</td>
                    <td class="label">Dự án</td>
                    <td class="value">Vinhomes Grand Park</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Mô tả -->
            <div class="description-section">
              <h2 class="section-heading">Mô tả</h2>
              <div class="description-content">
                <p>{{ property.description }}</p>
              </div>
            </div>

            <!-- Tiện ích -->
            <div class="amenities-section">
              <h2 class="section-heading">Tiện ích Vinhomes Grand Park</h2>
              <ul class="amenities-list">
                <li><i class="fal fa-check"></i> Công viên trung tâm 36ha</li>
                <li>
                  <i class="fal fa-check"></i> Hồ bơi ngoài trời và trong nhà
                </li>
                <li><i class="fal fa-check"></i> Khu thể thao đa năng</li>
                <li>
                  <i class="fal fa-check"></i> Trường học liên cấp quốc tế
                </li>
                <li>
                  <i class="fal fa-check"></i> Trung tâm thương mại Vincom Mega
                  Mall
                </li>
                <li><i class="fal fa-check"></i> Bệnh viện Vinmec</li>
                <li>
                  <i class="fal fa-check"></i> Kết nối metro số 1 (đang xây
                  dựng)
                </li>
                <li>
                  <i class="fal fa-check"></i> An ninh 24/7 với hệ thống camera
                  hiện đại
                </li>
              </ul>
            </div>
          </div>

          <!-- Right Side - Booking & Contact -->
          <div class="right-sidebar">

            <!-- Booking Box -->
            <div class="booking-box">
              <h3 class="booking-title">
                Đặt lịch xem nhà ngay hôm nay để nhận ưu đãi tốt nhất
              </h3>

              <!-- Date Selection -->
              <div class="date-selection">
                <button
                  v-for="(date, index) in availableDates"
                  :key="index"
                  :class="['date-btn', { active: selectedDate === index }]"
                  @click="selectedDate = index"
                >
                  <div class="date-day">{{ date.day }}</div>
                  <div class="date-number">{{ date.number }}</div>
                </button>
                <button class="date-btn-next">
                  <i class="fal fa-chevron-right"></i>
                </button>
              </div>

              <button class="btn-book-visit">Đặt lịch ngay</button>

              <div class="divider-with-text">
                <span>hoặc</span>
              </div>

              <!-- Contact Actions -->
              <div class="contact-actions">
                <a href="tel:0967777143" class="action-link">
                  <i class="fal fa-phone-alt"></i>
                  <div class="action-text">
                    <span>Gọi trực tiếp</span>
                    <strong>0967 777 143</strong>
                  </div>
                </a>
                <a
                  href="#"
                  class="action-link"
                  @click.prevent="openConsultationForm"
                >
                  <i class="fal fa-comment-alt"></i>
                  <div class="action-text">
                    <span>Liên hệ Zalo</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Similar Properties Section -->
      <div class="similar-properties">
        <h2 class="section-title">🏠 Bất động sản tương tự</h2>
        <div class="properties-grid">
          <PropertyCard
            v-for="similarProperty in similarProperties"
            :key="similarProperty.id"
            :property="similarProperty"
          />
        </div>
        <div v-if="similarProperties.length === 0" class="no-results">
          <p>Không có bất động sản tương tự</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { usePropertyStore } from "@/store/propertyStore";
import PropertyCard from "@/components/property/PropertyCard.vue";

const route = useRoute();
const propertyStore = usePropertyStore();

const property = ref(null);
const isLoading = ref(true);

// Gallery state
const images = computed(() => {
  // Check if property has multiple images array first
  if (property.value?.images && Array.isArray(property.value.images) && property.value.images.length > 0) {
    return property.value.images;
  }
  // Fallback to single image
  if (property.value?.image) {
    return [property.value.image];
  }
  return [];
});

const currentImageIndex = ref(0);
const showLightbox = ref(false);
const lightboxIndex = ref(0);

// Booking state
const selectedDate = ref(0);
const availableDates = computed(() => {
  const today = new Date();
  const dates = [];
  const dayNames = [
    "Chủ nhật",
    "Thứ hai",
    "Thứ ba",
    "Thứ tư",
    "Thứ năm",
    "Thứ sáu",
    "Thứ bảy",
  ];

  for (let i = 0; i < 3; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push({
      day: i === 0 ? "Hôm nay" : dayNames[date.getDay()],
      number: `${date.getDate()}/${date.getMonth() + 1}`,
      fullDate: date,
    });
  }
  return dates;
});

// Consultation form state
const consultationForm = ref({
  name: "",
  phone: "",
  email: "",
  note: "",
});
const isSubmitting = ref(false);
const submitMessage = ref("");
const submitSuccess = ref(false);

const formatPrice = (price) => {
  if (price >= 1000000000) {
    return `${(price / 1000000000).toFixed(2)} tỷ`;
  }
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
};

const formatPricePerM2 = (price, area) => {
  if (!price || !area) return "";
  const pricePerM2 = price / area;
  return `${Math.round(pricePerM2 / 1000000).toFixed(1)} triệu/m²`;
};

const openConsultationForm = () => {
  // Scroll to consultation form or open modal
  alert("Tính năng đang phát triển. Vui lòng gọi: 0967 777 143");
};

// Gallery functions
const openLightbox = (index) => {
  lightboxIndex.value = index;
  showLightbox.value = true;
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  showLightbox.value = false;
  document.body.style.overflow = "auto";
};

const nextImage = () => {
  lightboxIndex.value = (lightboxIndex.value + 1) % images.value.length;
};

const prevImage = () => {
  lightboxIndex.value =
    (lightboxIndex.value - 1 + images.value.length) % images.value.length;
};

// Form submission
const submitConsultation = async () => {
  isSubmitting.value = true;
  submitMessage.value = "";

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Here you would normally send the data to your backend
    console.log("Consultation form data:", {
      ...consultationForm.value,
      propertyId: route.params.id,
      propertyTitle: property.value.title,
    });

    submitSuccess.value = true;
    submitMessage.value =
      "✅ Đã gửi thông tin thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.";

    // Reset form
    consultationForm.value = {
      name: "",
      phone: "",
      email: "",
      note: "",
    };

    // Clear message after 5 seconds
    setTimeout(() => {
      submitMessage.value = "";
    }, 5000);
  } catch (error) {
    submitSuccess.value = false;
    submitMessage.value = "❌ Có lỗi xảy ra. Vui lòng thử lại sau.";
  } finally {
    isSubmitting.value = false;
  }
};

// Get similar properties
const similarProperties = computed(() => {
  if (!property.value) return [];

  const currentId = property.value.id;
  return propertyStore.properties
    .filter((p) => {
      // Exclude current property
      if (p.id === currentId) return false;

      // Filter by same type or similar location
      return (
        p.type === property.value.type ||
        p.location.includes(property.value.location.split(",")[0])
      );
    })
    .slice(0, 4); // Limit to 4 similar properties
});

// Function to load property
const loadProperty = async () => {
  isLoading.value = true;

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Get property ID from route (MongoDB ObjectId string)
  const propertyId = route.params.id;
  
  // Load property from API
  const foundProperty = await propertyStore.getPropertyById(propertyId);

  if (foundProperty) {
    property.value = foundProperty;
    currentImageIndex.value = 0; // Reset to first image
  } else {
    property.value = null;
    console.error("Property not found:", propertyId);
  }
  
  isLoading.value = false;
};

// Watch for route changes
watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      loadProperty();
    }
  },
);

onMounted(() => {
  loadProperty();
});
</script>
