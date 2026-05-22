<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="about-hero-background">
        <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop" alt="Vinhomes Grand Park">
        <div class="about-hero-overlay"></div>
      </div>
      <div class="container">
        <div class="about-hero-content">
          <span class="hero-badge">Đại đô thị thông minh đẳng cấp quốc tế</span>
          <h1>Vinhomes Grand Park</h1>
          <p class="hero-subtitle">Đô thị trải nghiệm đáng sống bậc nhất TP. Hồ Chí Minh</p>
        </div>
      </div>
    </section>
 
    <!-- Project Overview Section -->
    <section class="project-overview-section">
      <div class="overview-container">
        <div class="overview-main">
          <h2 class="overview-title">Tổng quan dự án Vinhomes Grand Park</h2>
          
          <!-- Thông tin chi tiết -->
          <div class="info-details-box">
            <h3 class="info-details-title">Thông tin chi tiết</h3>
            <table class="info-table">
              <tr>
                <td class="info-label">Tên dự án</td>
                <td class="info-value">Vinhomes Grand Park</td>
                <td class="info-label">Chủ đầu tư</td>
                <td class="info-value">Vinhomes</td>
              </tr>
              <tr>
                <td class="info-label">Hình thức sở hữu</td>
                <td class="info-value">Sở hữu lâu dài</td>
                <td class="info-label">Tổng diện tích</td>
                <td class="info-value">271 ha</td>
              </tr>
              <tr>
                <td class="info-label">Mật độ xây dựng</td>
                <td class="info-value">23%</td>
                <td class="info-label">Quy mô phát triển</td>
                <td class="info-value">71 tòa căn hộ</td>
              </tr>
              <tr>
                <td class="info-label">Thời điểm khởi công</td>
                <td class="info-value">Năm 2018</td>
                <td class="info-label">Tiến độ</td>
                <td class="info-value">Đang xây dựng</td>
              </tr>
            </table>
          </div>

          <!-- Điểm nổi bật -->
          <div class="highlights-box">
            <h3 class="highlights-title">Điểm nổi bật Vinhomes Grand Park</h3>
            <div class="highlights-wrapper" :class="{ collapsed: isHighlightsCollapsed }">
              <ul class="highlights-list">
                <li>
                  <i class="fal fa-bolt highlight-icon"></i>
                  <span>Vị trí trung tâm tăng trưởng mới của TP.HCM: Nằm tại TP. Thủ Đức (cũ), dự án Vinhomes Grand Park hưởng lợi trực tiếp từ định hướng phát triển khu Đông trở thành trung tâm kinh tế tri thức, công nghệ và tài chính của thành phố. Khi dòng vốn đầu tư công và tư nhân cùng đổ về khu vực, bất động sản luôn là nhóm tài sản hưởng lợi sớm nhất.</span>
                </li>
                <li>
                  <i class="fal fa-bolt highlight-icon"></i>
                  <span>Dự địa tăng giá lớn: dự án hưởng lợi mạnh mẽ nhờ tuyến Vành đai 3 TP.HCM đi qua, kết nối nhanh chóng đến cao tốc TP.HCM - Long Thành - Dầu Giây và sân bay Long Thành. Khi các hạ tầng này vận hành đồng bộ từ cuối 2026, chắc chắn sẽ thành đòn bẩy mạnh mẽ cho giá trị bất động sản tại dự án.</span>
                </li>
                <li>
                  <i class="fal fa-bolt highlight-icon"></i>
                  <span>Đại đô thị đông sống nhất khu Đông TP.HCM: Vinhomes Grand Park không chỉ là nơi ở mà là một thành phố thu nhỏ với đầy đủ trường học, bệnh viện, trung tâm thương mại và chuỗi tiện ích "all-in-one", kiến tạo nên một đô thị đáng sống nhất khu vực.</span>
                </li>
                <li>
                  <i class="fal fa-bolt highlight-icon"></i>
                  <span>Vinhomes Grand Park hiện đã có cộng đồng cư dân lớn, sôi động và giàu sức sống, kéo theo nhu cầu nhà phố, shophouse, dịch vụ, mua sắm và cho thuê rất mạnh. Điều này củng cố tính thanh khoản và khả năng khai thác thương mại bền vững.</span>
                </li>
                <li>
                  <i class="fal fa-bolt highlight-icon"></i>
                  <span>Với quy hoạch đại công viên 36ha, các công viên nội khu, đồng thời lại được bao bọc bởi sông Tắc và sông Đồng Nai giúp dự án Vinhomes Grand Park sở hữu môi trường sống xanh, trong lành, thoáng đãng, và địa thế "phong thủy thịnh vượng" khác hẳn các khu dân cư xung quanh.</span>
                </li>
              </ul>
              <div class="fade-overlay-about" v-if="isHighlightsCollapsed"></div>
            </div>
            <button class="collapse-btn" @click="toggleHighlights">
              <span v-if="isHighlightsCollapsed">Xem thêm <i class="fal fa-chevron-down"></i></span>
              <span v-else>Thu gọn <i class="fal fa-chevron-up"></i></span>
            </button>
          </div>
        </div>

        <!-- Sidebar Form -->
        <div class="consultation-form">
          <div class="form-card">
            <h3>Tư vấn mua nhà chuyên sâu</h3>
            
            <!-- Benefits List -->
            <div class="benefits-list">
              <div class="benefit-item">
                <span class="check-icon">✓</span>
                <span class="benefit-text">Phân tích quỹ căn, chính sách, tiện ích giúp Khách hàng lựa chọn căn tốt nhất.</span>
              </div>
              <div class="benefit-item">
                <span class="check-icon">✓</span>
                <span class="benefit-text">Giải đáp mọi thắc mắc của khách hàng.</span>
              </div>
              <div class="benefit-item">
                <span class="check-icon">✓</span>
                <span class="benefit-text">Tuyệt đối bảo mật thông tin cá nhân.</span>
              </div>
            </div>
            
            <form @submit.prevent="submitConsultation">
              <div class="form-group">
                <input 
                  type="text" 
                  id="name"
                  v-model="consultationForm.name"
                  placeholder="Họ và tên *"
                  required
                >
              </div>

              <div class="form-group">
                <input 
                  type="tel" 
                  id="phone"
                  v-model="consultationForm.phone"
                  placeholder="Số điện thoại *"
                  pattern="[0-9]{10}"
                  required
                >
              </div>

              <button type="submit" class="btn-submit" :disabled="isSubmitting">
                {{ isSubmitting ? 'Đang gửi...' : 'Nhận tư vấn ngay' }}
              </button>
            </form>

            <div v-if="submitMessage" class="submit-message" :class="submitSuccess ? 'success' : 'error'">
              {{ submitMessage }}
            </div>

            <!-- Divider -->
            <div class="divider"></div>

            <!-- Contact Buttons -->
            <div class="contact-buttons">
              <a href="tel:0967777143" class="btn-call">
                <span class="icon fal fa-phone-alt"></span>
                <span class="btn-text">Gọi trực tiếp<br><strong>0967777143</strong></span>
              </a>
              <a href="https://zalo.me/0967777143" target="_blank" class="btn-zalo">
                <span class="icon fal fa-comment"></span>
                <span class="btn-text">Chat qua<br><strong>Zalo</strong></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Overview Stats -->
    <section class="overview-stats-section">
      <div class="container">
        <div class="stats-wrapper">
          <div class="stat-card">
            <div class="stat-number">271ha</div>
            <div class="stat-label">Tổng diện tích</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">71</div>
            <div class="stat-label">Tòa căn hộ</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">38,000+</div>
            <div class="stat-label">Căn hộ</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">100,000+</div>
            <div class="stat-label">Cư dân</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Location Section -->
    <section class="location-section">
      <div class="container">
        <div class="section-header-center">
          <h2>Vị Trí Vinhomes Grand Park</h2>
        </div>
        
        <div class="location-content">
          <div class="location-description">
            <ul class="location-list">
              <li>
                <i class="fal fa-check-circle"></i>
                <span>Vinhomes Grand Park tọa lạc tại đường Nguyễn Xiển, phường Long Thạnh Mỹ, TP. Thủ Đức (cũ), thuộc cửa ngõ phía Đông TP.HCM, là điểm nút liên kết vùng hoàn hảo, đồng thời có tầm quan trọng trong việc phát triển kinh tế và giao thương của khu vực</span>
              </li>
              <li>
                <i class="fal fa-check-circle"></i>
                <span>Được bao bọc bởi hệ thống sông Đồng Nai và sông Tắc, không chỉ là liên kết vùng hoàn hảo mà còn giúp khí hậu trong lành và mát mẻ quanh năm trong đại đô thị</span>
              </li>
              <li>
                <i class="fal fa-check-circle"></i>
                <span>Mặt tiền ba trục huyết mạch Vành đai 3, Nguyễn Xiển và Phước Thiện, chỉ 20 phút là đến Quận 1 khi các tuyến đường này hoàn thiện và mở rộng liên vùng linh hoạt đến Bình Dương, Đồng Nai, Long An</span>
              </li>
              <li>
                <i class="fal fa-check-circle"></i>
                <span>Cách ga Metro số 1 chỉ 10 phút, mở ra trục kết nối đến Quận 1 và Bình Thạnh, đồng thời là lực đẩy tăng trưởng giá trị bất động sản bền vững theo thời gian</span>
              </li>
              <li>
                <i class="fal fa-check-circle"></i>
                <span>Chỉ với 30 phút khi tuyến đường Vành đai 3 và Tôn Đức Thắng hoàn thiện, cư dân đã đến sân bay quốc tế Long Thành, mở lối kết nối toàn cầu, thuận tiện cho cả hành trình nội địa lẫn quốc tế</span>
              </li>
            </ul>
          </div>
          
          <div class="location-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4449427146937!2d106.80840731480132!3d10.846632592277446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175270bf967f04d%3A0x310d48a6768fcac0!2sVinhomes%20Grand%20Park!5e0!3m2!1svi!2s!4v1653284567890!5m2!1svi!2s" 
              width="100%" 
              height="100%" 
              style="border:0; border-radius: 12px;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

        <div class="nearby-places">
          <h3>Tiện ích lân cận</h3>
          
          <!-- Tabs Navigation -->
          <div class="places-tabs">
            <button 
              v-for="tab in placeTabs" 
              :key="tab.id"
              class="tab-btn"
              :class="{ active: activeTab === tab.id }"
              @click="activeTab = tab.id"
            >
              {{ tab.label }}
            </button>
          </div>
          
          <!-- Places Content -->
          <div class="places-grid">
            <div 
              v-for="place in filteredPlaces" 
              :key="place.name"
              class="place-item"
            >
              <div class="place-icon">
                <i :class="place.icon"></i>
              </div>
              <div class="place-info">
                <strong>{{ place.name }}</strong>
                <span class="place-address">{{ place.address }}</span>
                <span class="distance">
                  <i class="fal fa-car"></i>
                  {{ place.distance }} • {{ place.time }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Zones Section -->
    <section class="zones-section">
      <div class="container">
        <div class="section-header-center">
          <h2>Khu của Vinhomes Grand Park</h2>
        </div>

        <div class="zones-grid-new">
          <div class="zone-card-new">
            <div class="zone-image-new">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop" alt="The Manhattan">
            </div>
            <div class="zone-info">
              <h3>The Manhattan</h3>
              <div class="zone-details">
                <div class="detail-row">
                  <span class="label">Dự án</span>
                  <span class="value">Vinhomes Grand Park</span>
                </div>
                <div class="detail-row">
                  <span class="label">Phong cách xây dựng</span>
                  <span class="value">Địa Trung Hải</span>
                </div>
                <div class="detail-row">
                  <span class="label">Loại hình</span>
                  <span class="value">Biệt thự song lập, Biệt thự đơn lập, Shophouse, Biệt thự shop</span>
                </div>
              </div>
            </div>
          </div>

          <div class="zone-card-new">
            <div class="zone-image-new">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop" alt="The Origami">
            </div>
            <div class="zone-info">
              <h3>The Origami</h3>
              <div class="zone-details">
                <div class="detail-row">
                  <span class="label">Dự án</span>
                  <span class="value">Vinhomes Grand Park</span>
                </div>
                <div class="detail-row">
                  <span class="label">Phong cách xây dựng</span>
                  <span class="value">Nhật Bản</span>
                </div>
                <div class="detail-row">
                  <span class="label">Loại hình</span>
                  <span class="value">Căn hộ 3PN, 2PN+1, 2PN, 1PN, Studio</span>
                </div>
              </div>
            </div>
          </div>

          <div class="zone-card-new">
            <div class="zone-image-new">
              <img src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=600&h=400&fit=crop" alt="The Rainbow">
            </div>
            <div class="zone-info">
              <h3>The Rainbow</h3>
              <div class="zone-details">
                <div class="detail-row">
                  <span class="label">Dự án</span>
                  <span class="value">Vinhomes Grand Park</span>
                </div>
                <div class="detail-row">
                  <span class="label">Phong cách xây dựng</span>
                  <span class="value">Hiện đại</span>
                </div>
                <div class="detail-row">
                  <span class="label">Loại hình</span>
                  <span class="value">Căn hộ Studio, 1 PN +1, 2 PN +1, 3 PN</span>
                </div>
              </div>
            </div>
          </div>

          <div class="zone-card-new">
            <div class="zone-image-new">
              <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop" alt="The Beverly Solari">
            </div>
            <div class="zone-info">
              <h3>The Beverly Solari</h3>
              <div class="zone-details">
                <div class="detail-row">
                  <span class="label">Dự án</span>
                  <span class="value">Vinhomes Grand Park</span>
                </div>
                <div class="detail-row">
                  <span class="label">Phong cách xây dựng</span>
                  <span class="value">Mỹ</span>
                </div>
                <div class="detail-row">
                  <span class="label">Loại hình</span>
                  <span class="value">Căn studio, 3PN, 2PN, 1PN+1, 1PN</span>
                </div>
              </div>
            </div>
          </div>

          <div class="zone-card-new">
            <div class="zone-image-new">
              <img src="https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=600&h=400&fit=crop" alt="The Beverly">
            </div>
            <div class="zone-info">
              <h3>The Beverly</h3>
              <div class="zone-details">
                <div class="detail-row">
                  <span class="label">Dự án</span>
                  <span class="value">Vinhomes Grand Park</span>
                </div>
                <div class="detail-row">
                  <span class="label">Phong cách xây dựng</span>
                  <span class="value">Châu Mỹ</span>
                </div>
                <div class="detail-row">
                  <span class="label">Loại hình</span>
                  <span class="value">Căn hộ 2PN, 1PN+, Studio</span>
                </div>
              </div>
            </div>
          </div>

          <div class="zone-card-new">
            <div class="zone-image-new">
              <img src="https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=600&h=400&fit=crop" alt="Glory Heights">
            </div>
            <div class="zone-info">
              <h3>Glory Heights</h3>
              <div class="zone-details">
                <div class="detail-row">
                  <span class="label">Dự án</span>
                  <span class="value">Vinhomes Grand Park</span>
                </div>
                <div class="detail-row">
                  <span class="label">Phong cách xây dựng</span>
                  <span class="value">Hiện đại cao cấp</span>
                </div>
                <div class="detail-row">
                  <span class="label">Loại hình</span>
                  <span class="value">Căn hộ 3PN, 2PN+1, 2PN, 1PN+1</span>
                </div>
              </div>
            </div>
          </div>

          <div class="zone-card-new">
            <div class="zone-image-new">
              <img src="https://images.unsplash.com/photo-1515263487990-61b07816b324?w=600&h=400&fit=crop" alt="Manhattan Glory">
            </div>
            <div class="zone-info">
              <h3>The Manhattan Glory</h3>
              <div class="zone-details">
                <div class="detail-row">
                  <span class="label">Dự án</span>
                  <span class="value">Vinhomes Grand Park</span>
                </div>
                <div class="detail-row">
                  <span class="label">Phong cách xây dựng</span>
                  <span class="value">Đông Dương</span>
                </div>
                <div class="detail-row">
                  <span class="label">Loại hình</span>
                  <span class="value">Biệt thự song lập, Biệt thự đơn lập, Shophouse, Biệt thự shop</span>
                </div>
              </div>
            </div>
          </div>

          <div class="zone-card-new">
            <div class="zone-image-new">
              <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=400&fit=crop" alt="The Opus One">
            </div>
            <div class="zone-info">
              <h3>The Opus One</h3>
              <div class="zone-details">
                <div class="detail-row">
                  <span class="label">Dự án</span>
                  <span class="value">Vinhomes Grand Park</span>
                </div>
                <div class="detail-row">
                  <span class="label">Phong cách xây dựng</span>
                  <span class="value">Resort</span>
                </div>
                <div class="detail-row">
                  <span class="label">Loại hình</span>
                  <span class="value">Căn hộ 1PN +1, 2PN, Studio, 3PN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Amenities Section -->
    <section class="amenities-section-new">
      <div class="container">
        <div class="section-header-center">
          <h2>Cảnh Quan Vinhomes Grand Park</h2>
        </div>

        <div class="amenities-gallery">
          <!-- Main Image/Video -->
          <div class="main-amenity-image">
            <img src="https://adongland.vn/wp-content/uploads/2025/06/vhCddY9Ei6V-VHiLwY_Gz8YMqCUv7vTzqHaohws1ZMK8yfyawQ4S-5q-FM3NYpXkOuLo0g3_ISlxKonSl5BIPSlA.jpg" alt="Tiện ích cảnh quan Vinhomes Grand Park">
            <div class="play-button" @click="openVideoPopup">
              <i class="fal fa-play"></i>
            </div>
          </div>

          <!-- Thumbnail Gallery -->
          <div class="amenity-thumbnails">
            <div class="thumbnail-item">
              <img src="https://vinschool.edu.vn/wp-content/uploads/2022/08/25/DSC07171.jpg" alt="Vinschool Grand Park">
              <div class="thumbnail-overlay">
                <span class="thumbnail-title">Vinschool Grand Park</span>
                <i class="fal fa-chevron-right"></i>
              </div>
            </div>
            <div class="thumbnail-item">
              <img src="https://adongland.vn/wp-content/uploads/2025/06/vhCddY9Ei6V-VHiLwY_Gz8YMqCUv7vTzqHaohws1ZMK8yfyawQ4S-5q-FM3NYpXkOuLo0g3_ISlxKonSl5BIPSlA.jpg" alt="Vincom Mega Mall Grand Park">
              <div class="thumbnail-overlay">
                <span class="thumbnail-title">Vincom Mega Mall Grand Park</span>
                <i class="fal fa-chevron-right"></i>
              </div>
            </div>
            <div class="thumbnail-item">
              <img src="https://market.vinhomes.vn/photo/px/get/U2ajnvfmRF4_PrskOYXXKH1OfrJytivYPvPNQHzkuYE/rs:fit:0:600:1/g:no/q:0/czM6Ly92aG0tbWFya2V0cGxhY2UtcGhvdG8tcHJvZC9waG90b19vcmlnaW5hbC8yMDI1LzExLzA4L3ZoVG1NWnNrWUtkNGIySVQ0bVlWWk9pdkk1OTJRUmNJRnQwenpCYnlrS0llLTRCMVBhUGhHNXNoMDZNMWJiczVDTEpxU0xmYy1ZWnU5OTR4Sk1UbW5aa0E9PQ.jpg" alt="Phòng khám Đa khoa Quốc tế Vinmec Grand Park">
              <div class="thumbnail-overlay">
                <span class="thumbnail-title">Phòng khám Đa khoa Quốc tế Vinmec Grand...</span>
                <i class="fal fa-chevron-right"></i>
              </div>
            </div>
            <div class="thumbnail-item">
              <img src="https://masterisehomese.vn/wp-content/uploads/2024/12/IMG_0442.webp" alt="Công viên VinWonders">
              <div class="thumbnail-overlay">
                <span class="thumbnail-title">Công viên VinWonders Grand Park</span>
                <i class="fal fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="about-cta-new">
      <div class="container">
        <div class="cta-content">
          <h2>Đăng ký tham quan dự án và căn hộ mẫu Vinhomes</h2>
          <p>Để trải nghiệm trực tiếp "ngôi nhà mới" của bạn, mời Quý khách đăng ký tham quan</p>
          <div class="cta-buttons">
            <router-link to="/tim-kiem" class="btn-cta primary">
              <i class="fal fa-home"></i>
              Xem căn hộ
            </router-link>
            <router-link to="/lien-he" class="btn-cta secondary">
              <i class="fal fa-phone-alt"></i>
              Liên hệ tư vấn
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Popup Modal -->
    <div v-if="showVideoPopup" class="video-popup-overlay" @click="closeVideoPopup">
      <div class="video-popup-container" @click.stop>
        <button class="video-popup-close" @click="closeVideoPopup">
          <i class="fal fa-times"></i>
        </button>
        <div class="video-popup-content">
          <iframe 
            width="100%" 
            height="100%" 
            :src="videoUrl" 
            title="Vinhomes Grand Park Video" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'

// Highlights collapse state
const isHighlightsCollapsed = ref(true)

// Video popup state
const showVideoPopup = ref(false)
const videoUrl = ref('')

// Nearby places tabs
const activeTab = ref('featured')
const placeTabs = [
  { id: 'featured', label: 'Nổi bật' },
  { id: 'entertainment', label: 'Giải trí' },
  { id: 'education', label: 'Trường học' },
  { id: 'healthcare', label: 'Y tế' },
  { id: 'shopping', label: 'Mua sắm' }
]

const nearbyPlaces = [
  {
    name: 'Phòng khám Đa khoa Quốc tế Vinmec Grand Park',
    address: 'Nguyễn Xiển, Vinhomes Grand Park, Quận 9, Thành phố Hồ Chí Minh, Việt Nam',
    distance: '985 m',
    time: '3 phút',
    categories: ['featured', 'healthcare'],
    icon: 'fal fa-hospital'
  },
  {
    name: 'Vincom Mega Mall Grand Park',
    address: 'Nguyễn Xiển, Vinhomes Grand Park, Quận 9, Thành phố Hồ Chí Minh, Việt Nam',
    distance: '334 m',
    time: '1 phút',
    categories: ['featured', 'shopping'],
    icon: 'fal fa-shopping-cart'
  },
  {
    name: 'Quảng trường Golden Eagle',
    address: 'Long Bình, Quận 9, Thành phố Hồ Chí Minh, Việt Nam',
    distance: '233 m',
    time: '1 phút',
    categories: ['featured', 'entertainment'],
    icon: 'fal fa-map-marker-alt'
  },
  {
    name: 'Vinschool Grand Park',
    address: 'Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh, Việt Nam',
    distance: '1,14 km',
    time: '4 phút',
    categories: ['featured', 'education'],
    icon: 'fal fa-graduation-cap'
  },
  {
    name: 'Bến du thuyền Glory',
    address: 'Vinhomes Grand Park, Quận 9, Thành phố Hồ Chí Minh, Việt Nam',
    distance: '500 m',
    time: '2 phút',
    categories: ['entertainment'],
    icon: 'fal fa-ship'
  },
  {
    name: 'Vincom Mega Mall Thảo Điền',
    address: 'Thảo Điền, Quận 2, Thành phố Hồ Chí Minh, Việt Nam',
    distance: '5,2 km',
    time: '12 phút',
    categories: ['shopping'],
    icon: 'fal fa-shopping-bag'
  },
  {
    name: 'Trường Quốc tế Brighton College',
    address: 'Vinhomes Grand Park, Quận 9, Thành phố Hồ Chí Minh, Việt Nam',
    distance: '800 m',
    time: '3 phút',
    categories: ['education'],
    icon: 'fal fa-school'
  },
  {
    name: 'Công viên Ánh Sáng 36ha',
    address: 'Nguyễn Xiển, Vinhomes Grand Park, Quận 9, Thành phố Hồ Chí Minh, Việt Nam',
    distance: '461 m',
    time: '2 phút',
    categories: ['entertainment'],
    icon: 'fal fa-tree'
  },
  {
    name: 'Công viên VinWonders Grand Park',
    address: 'Nguyễn Xiển, Vinhomes Grand Park, Quận 9, Thành phố Hồ Chí Minh, Việt Nam',
    distance: '1,32 km',
    time: '4 phút',
    categories: ['entertainment'],
    icon: 'fal fa-tree'
  }
]

const filteredPlaces = computed(() => {
  return nearbyPlaces.filter(place => place.categories.includes(activeTab.value))
})

// Consultation form state
const consultationForm = ref({
  name: '',
  phone: ''
})
const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const submitConsultation = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Here you would normally send the data to your backend
    console.log('Consultation form data:', consultationForm.value)
    
    submitSuccess.value = true
    submitMessage.value = '✅ Đã gửi thông tin thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.'
    
    // Reset form
    consultationForm.value = {
      name: '',
      phone: ''
    }
    
    // Clear message after 5 seconds
    setTimeout(() => {
      submitMessage.value = ''
    }, 5000)
  } catch (error) {
    submitSuccess.value = false
    submitMessage.value = '❌ Có lỗi xảy ra. Vui lòng thử lại sau.'
  } finally {
    isSubmitting.value = false
  }
}

const toggleHighlights = () => {
  isHighlightsCollapsed.value = !isHighlightsCollapsed.value
}

const openVideoPopup = () => {
  // Convert YouTube share link to embed format
  videoUrl.value = 'https://www.youtube.com/embed/XT03BVTW0OQ?autoplay=1'
  showVideoPopup.value = true
  // Prevent body scroll when popup is open
  document.body.style.overflow = 'hidden'
}

const closeVideoPopup = () => {
  showVideoPopup.value = false
  videoUrl.value = ''
  // Restore body scroll
  document.body.style.overflow = ''
}

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
