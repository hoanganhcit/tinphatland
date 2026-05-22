import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const usePropertyStore = defineStore("property", () => {
  // State
  const properties = ref([]);
  const loading = ref(false);
  const error = ref(null);

  // Getters
  const totalProperties = computed(() => properties.value.length);
  const featuredProperties = computed(() =>
    properties.value.filter((p) => p.featured),
  );

  // Actions
  async function fetchProperties() {
    loading.value = true;
    try {
      // Dữ liệu mẫu các căn hộ Vinhome Grand Park
      properties.value = [
        {
          id: 1,
          title: "3 PN, Tòa GH6, phân khu Glory Heights",
          price: 5550000000,
          location: "Vinhomes Grand Park, TP. Thủ Đức, TP.HCM",
          image:
            "/images/GH63PN.jfif",
          featured: true,
          type: "Căn hộ",
          description:
            "Căn hộ 3 phòng ngủ tại tòa GH6 - Glory Heights, view hồ bơi thoáng mát, nhà trống nhận nhà ngay, hỗ trợ xem nhà 24/7.",
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
        {
          id: 2,
          title: "3 PN, Tòa GH3, phân khu Glory Heights",
          price: 4450000000,
          location: "Vinhomes Grand Park, TP. Thủ Đức, TP.HCM",
          image:
            "/images/GH33PN.jfif",
          featured: true,
          type: "Căn hộ",
          description:
            "Căn hộ 3 phòng ngủ tại Glory Heights, view Vườn Nhật và ngoại khu cực thoáng. Nội thất chủ đầu tư, nhà đẹp dễ decor, pháp lý HĐMB, hỗ trợ xem nhà ngay.",
          bedrooms: 3,
          bathrooms: 2,
          floor: 15,
          grossArea: 91.2,
          netArea: 82.3,
          balconyDirection: "Tây Bắc",
          handoverStatus: "Đã bàn giao",
          furnitureStatus: "Hoàn thiện cơ bản",
          usageStatus: "Nhà trống",
          zone: "Glory Heights",
          contactName: "Hoàng Anh",
          contactPhone: "0967777143",
        },
        {
          id: 3,
          title: "1 PN+, Tòa S6.06, phân khu The Origami",
          price: 2550000000,
          location: "Vinhomes Grand Park, TP. Thủ Đức, TP.HCM",
          image:
            "/images/S6061PN.jpg",
          featured: true,
          type: "Căn hộ",
          description:
            "Căn hộ 1PN+ tại phân khu The Origami, full nội thất cơ bản, ban công Tây Bắc thoáng mát. Đã có sổ hồng, chủ không vay, hỗ trợ xem nhà hẹn trước.",
          bedrooms: 1,
          bathrooms: 1,
          floor: 12,
          grossArea: 52.3,
          netArea: 47,
          balconyDirection: "Tây Bắc",
          handoverStatus: "Đã bàn giao",
          furnitureStatus: "Đầy đủ nội thất",
          usageStatus: "Chủ đang ở",
          zone: "The Origami",
          contactName: "Hoàng Anh",
          contactPhone: "0967777143",
        },
        {
          id: 4,
          title: "2 PN, Tòa GH6, phân khu Glory Heights",
          price: 4300000000,
          location: "Vinhomes Grand Park, TP. Thủ Đức, TP.HCM",
          image:
            "/images/GH6092PN.jfif",
          featured: true,
          type: "Căn hộ",
          description:
            "Căn hộ 2 phòng ngủ tại tòa GH6 - Glory Heights, view Vincom và quảng trường cực đẹp, ban công Đông Nam thoáng mát. Nhà trống dễ decor, dự kiến nhận nhà tháng 6/2026.",
          bedrooms: 2,
          bathrooms: 2,
          floor: 9,
          grossArea: 65.4,
          netArea: 59,
          balconyDirection: "Đông Nam",
          handoverStatus: "Chưa bàn giao",
          furnitureStatus: "Nhà trống",
          usageStatus: "Nhà trống",
          zone: "Glory Heights",
          contactName: "Hoàng Anh",
          contactPhone: "0967777143",
        },
        {
          id: 5,
          title: "2 PN, Tòa GH3, phân khu Glory Heights",
          price: 4400000000,
          location: "Vinhomes Grand Park, TP. Thủ Đức, TP.HCM",
          image:
            "/images/GH3102PN.jfif",
          featured: true,
          type: "Căn hộ",
          description:
            "Căn hộ tại tòa GH3 - Glory Heights, nhà mới 100%, thiết kế hiện đại, hỗ trợ xem nhà ngay với pass thẻ sẵn có.",
          bedrooms: 2,
          bathrooms: 2,
          floor: 10,
          grossArea: 65.4,
          netArea: 59,
          balconyDirection: "Đông Nam",
          handoverStatus: "Đã bàn giao",
          furnitureStatus: "Hoàn thiện cơ bản",
          usageStatus: "Nhà trống",
          zone: "Glory Heights",
          contactName: "Hoàng Anh",
          contactPhone: "0967777143",
        },
        {
          id: 6,
          title: "2 PN, Tòa GH3, phân khu Glory Heights",
          price: 3850000000,
          location: "Vinhomes Grand Park, TP. Thủ Đức, TP.HCM",
          image:
            "/images/GH3082PN.jfif",
          featured: true,
          type: "Căn hộ",
          description:
            "Căn hộ tại tòa GH3 - Glory Heights, full nội thất, vào ở ngay. Chủ đang ở, hỗ trợ xem nhà hẹn trước.",
          bedrooms: 2,
          bathrooms: 2,
          floor: 8,
          grossArea: 65.4,
          netArea: 59,
          balconyDirection: "Đông Nam",
          handoverStatus: "Đã bàn giao",
          furnitureStatus: "Đầy đủ nội thất",
          usageStatus: "Chủ đang ở",
          zone: "Glory Heights",
          contactName: "Hoàng Anh",
          contactPhone: "0967777143",
        },
        {
          id: 7,
          title: "2 PN, Tòa S8.03, phân khu The Origami",
          price: 3150000000,
          location: "Vinhomes Grand Park, TP. Thủ Đức, TP.HCM",
          image:
            "/images/S8032PN.jpg",
          featured: true,
          type: "Căn hộ",
          description:
            "Căn hộ tại tòa S8.03 - The Origami, view hồ bơi thoáng đẹp, đã có sổ, đang cho thuê. Hỗ trợ xem nhà hẹn trước, có hỗ trợ xử lý khoản vay.",
          bedrooms: 2,
          bathrooms: 2,
          floor: 14,
          grossArea: 65.4,
          netArea: 59,
          balconyDirection: "Tây Nam",
          handoverStatus: "Đã bàn giao",
          furnitureStatus: "Hoàn thiện cơ bản",
          usageStatus: "Đang cho thuê",
          zone: "The Origami",
          contactName: "Hoàng Anh",
          contactPhone: "0967777143",
        },
        {
          id: 8,
          title: "1 PN+, Tòa BS8, phân khu Beverly Tropical",
          price: 2680000000,
          location: "Vinhomes Grand Park, TP. Thủ Đức, TP.HCM",
          image:
            "/images/BS81PN.jpg",
          featured: true,
          type: "Căn hộ",
          description:
            "Căn hộ 1PN+ tại Beverly Tropical, view hồ bơi và sông cực thoáng, nội thất như hình. HĐMB, chủ có vay ngân hàng, hỗ trợ tất toán, xem nhà hẹn trước.",
          bedrooms: 1,
          bathrooms: 1,
          floor: 11,
          grossArea: 52.3,
          netArea: 47,
          balconyDirection: "Đông Nam",
          handoverStatus: "Đã bàn giao",
          furnitureStatus: "Đầy đủ nội thất",
          usageStatus: "Đang cho thuê",
          zone: "Beverly Tropical",
          contactName: "Hoàng Anh",
          contactPhone: "0967777143",
        },
        {
          id: 9,
          title: "1 PN+, Tòa BS8, phân khu Beverly Tropical",
          price: 2700000000,
          location: "Vinhomes Grand Park, TP. Thủ Đức, TP.HCM",
          image:
            "/images/BS82PN.jfif",
          featured: true,
          type: "Căn hộ",
          description:
            "Căn hộ 1PN+ tại Beverly Tropical, HĐMB, đang vay VietinBank 2.1 tỷ, chủ nhờ hỗ trợ tất toán. Giá bao thuế phí, hỗ trợ xem nhà có sẵn pass.",
          bedrooms: 1,
          bathrooms: 1,
          floor: 7,
          grossArea: 58.8,
          netArea: 53,
          balconyDirection: "Đông Bắc",
          handoverStatus: "Đã bàn giao",
          furnitureStatus: "Đầy đủ nội thất",
          usageStatus: "Đang cho thuê",
          zone: "Beverly Tropical",
          contactName: "Hoàng Anh",
          contactPhone: "0967777143",
        },
      ];
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  }

  function addProperty(property) {
    properties.value.push(property);
  }

  return {
    properties,
    loading,
    error,
    totalProperties,
    featuredProperties,
    fetchProperties,
    addProperty,
  };
});
