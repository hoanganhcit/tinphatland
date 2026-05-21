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
            <button class="collapse-btn">Thu gọn <i class="fal fa-chevron-up"></i></button>
          </div>
        </div>

        <!-- Sidebar Form -->
        <div class="consultation-form">
          <h3 class="form-title">Tư vấn mua nhà chuyên sâu</h3>
          <ul class="form-benefits">
            <li>
              <i class="fal fa-check-circle"></i>
              <span>Phân tích <strong>quy cận, chính sách, tiện ích</strong> giúp khách hàng lựa chọn <strong>căn tốt nhất.</strong></span>
            </li>
            <li>
              <i class="fal fa-check-circle"></i>
              <span><strong>Giải đáp mọi thắc mắc</strong> của khách hàng.</span>
            </li>
            <li>
              <i class="fal fa-check-circle"></i>
              <span>Tuyệt đối <strong>bảo mật</strong> thông tin cá nhân.</span>
            </li>
          </ul>
          
          <form class="consult-form" @submit.prevent="submitConsultation">
            <div class="form-group">
              <input type="text" placeholder="Họ tên *" required v-model="consultForm.name" />
            </div>
            <div class="form-group">
              <input type="tel" placeholder="Số điện thoại *" required v-model="consultForm.phone" />
            </div>
            
            <div class="form-checkbox">
              <input type="checkbox" id="terms" v-model="consultForm.acceptTerms" />
              <label for="terms">Tôi đã đọc và đồng ý với <a href="#">Điều khoản</a> và <a href="#">Điều kiện</a> của Vinhomes Market.</label>
            </div>
            
            <div class="form-checkbox">
              <input type="checkbox" id="policy" v-model="consultForm.acceptPolicy" />
              <label for="policy">Tôi đã đọc và đồng ý với <a href="#">Chính sách bảo vệ dữ liệu cá nhân</a> của Vinhomes Market.</label>
            </div>
            
            <button type="submit" class="submit-btn">Nhận tư vấn ngay</button>
          </form>
          
          <div class="form-divider">Hoặc</div>
          
          <div class="form-actions">
            <button class="action-btn call-btn">
              <i class="fal fa-phone"></i>
              <div>
                <span class="action-label">Gọi trực tiếp</span>
                <span class="action-value">1900 998 823</span>
              </div>
            </button>
            <button class="action-btn zalo-btn">
              <i class="fal fa-comments"></i>
              <span>Chat qua Zalo</span>
            </button>
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
            <img src="https://images.unsplash.com/photo-1524813686514-a57563d77965?w=800&h=600&fit=crop" alt="Vị trí Vinhomes Grand Park">
          </div>
        </div>

        <div class="nearby-places">
          <h3>Tiện ích lân cận</h3>
          <div class="places-grid">
            <div class="place-item">
              <div class="place-icon"><i class="fal fa-hospital"></i></div>
              <div class="place-info">
                <strong>Phòng khám Đa khoa Quốc tế Vinmec Grand Park</strong>
                <span class="distance">985 m • 3 phút</span>
              </div>
            </div>
            <div class="place-item">
              <div class="place-icon"><i class="fal fa-shopping-cart"></i></div>
              <div class="place-info">
                <strong>Vincom Mega Mall Grand Park</strong>
                <span class="distance">334 m • 1 phút</span>
              </div>
            </div>
            <div class="place-item">
              <div class="place-icon"><i class="fal fa-map-marker-alt"></i></div>
              <div class="place-info">
                <strong>Quảng trường Golden Eagle</strong>
                <span class="distance">233 m • 1 phút</span>
              </div>
            </div>
            <div class="place-item">
              <div class="place-icon"><i class="fal fa-graduation-cap"></i></div>
              <div class="place-info">
                <strong>Vinschool Grand Park</strong>
                <span class="distance">1,14 km • 4 phút</span>
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
          <h2>Tiện Ích Cảnh Quan Vinhomes Grand Park</h2>
          <p class="section-subtitle">Hệ sinh thái tiện ích "All-in-one"</p>
        </div>

        <div class="amenities-featured">
          <div class="featured-amenity">
            <div class="featured-image">
              <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=500&fit=crop" alt="Quảng trường Golden Eagle">
            </div>
            <div class="featured-content">
              <h3>Quảng trường Golden Eagle</h3>
              <p>Tọa lạc tại trung tâm đại đô thị Vinhomes Grand Park, Quảng trường Golden Eagle là một trong những công trình biểu tượng mới nổi bật nhất hiện nay.</p>
            </div>
          </div>

          <div class="featured-amenity">
            <div class="featured-image">
              <img src="https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&h=500&fit=crop" alt="Bến du thuyền Glory">
            </div>
            <div class="featured-content">
              <h3>Bến du thuyền Glory</h3>
              <p>Bến du thuyền Glory - một trong ba siêu tiện ích của đại đô thị Vinhomes Grand Park là biểu tượng mới của sự đẳng cấp, sang trọng dành cho cộng đồng thượng lưu Vinhomes.</p>
            </div>
          </div>

          <div class="featured-amenity">
            <div class="featured-image">
              <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=500&fit=crop" alt="Công viên Ánh Sáng 36ha">
            </div>
            <div class="featured-content">
              <h3>Công viên Ánh Sáng 36ha</h3>
              <p>Ngay từ khi mới ra mắt, công viên 36ha Vinhomes Grand Park trở thành một trong những địa điểm vui chơi giải trí hàng đầu tại Sài Gòn.</p>
            </div>
          </div>

          <div class="featured-amenity">
            <div class="featured-image">
              <img src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&h=500&fit=crop" alt="Công viên VinWonders">
            </div>
            <div class="featured-content">
              <h3>Công viên VinWonders Grand Park</h3>
              <p>VinWonders Grand Park - "Vũ trụ giải trí" dành cho mọi trẻ em</p>
            </div>
          </div>
        </div>

        <div class="amenities-categories">
          <h3>Danh sách tiện ích</h3>
          <div class="categories-grid">
            <div class="category-box">
              <div class="category-icon"><i class="fal fa-sparkles"></i></div>
              <h4>Giải trí</h4>
              <ul>
                <li>Quảng trường Golden Eagle</li>
                <li>Bến du thuyền Glory</li>
                <li>Công viên Ánh Sáng 36ha</li>
                <li>Công viên VinWonders Grand Park</li>
              </ul>
            </div>

            <div class="category-box">
              <div class="category-icon"><i class="fal fa-graduation-cap"></i></div>
              <h4>Trường học</h4>
              <ul>
                <li>Trường Quốc tế Brighton College</li>
                <li>Vinschool Grand Park</li>
              </ul>
            </div>

            <div class="category-box">
              <div class="category-icon"><i class="fal fa-hospital"></i></div>
              <h4>Y tế</h4>
              <ul>
                <li>Phòng khám Đa khoa Quốc tế Vinmec Grand Park</li>
              </ul>
            </div>

            <div class="category-box">
              <div class="category-icon"><i class="fal fa-shopping-bag"></i></div>
              <h4>Mua sắm</h4>
              <ul>
                <li>Vincom Mega Mall Grand Park</li>
                <li>Chuỗi cửa hàng tiện lợi</li>
                <li>Khu ẩm thực đa dạng</li>
              </ul>
            </div>

            <div class="category-box">
              <div class="category-icon"><i class="fal fa-swimming-pool"></i></div>
              <h4>Thể thao</h4>
              <ul>
                <li>Hồ bơi Olympic</li>
                <li>Phòng gym hiện đại</li>
                <li>Sân tennis, bóng đá</li>
                <li>Yoga, aerobic</li>
              </ul>
            </div>

            <div class="category-box">
              <div class="category-icon"><i class="fal fa-leaf"></i></div>
              <h4>Cảnh quan</h4>
              <ul>
                <li>Công viên trung tâm 36ha</li>
                <li>Vườn nướng BBQ</li>
                <li>Đường dạo bộ ven sông</li>
                <li>Hồ điều hòa không khí</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Developer Section -->
    <section class="developer-section-new">
      <div class="container">
        <div class="developer-content-new">
          <div class="developer-logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Vingroup_logo.svg/200px-Vingroup_logo.svg.png" alt="Vingroup">
          </div>
          <div class="developer-info">
            <h2>Chủ Đầu Tư - Tập Đoàn Vingroup</h2>
            <p>Vingroup là tập đoàn kinh tế tư nhân đa ngành hàng đầu khu vực Đông Nam Á, với các hoạt động kinh doanh trải dài trên nhiều lĩnh vực như: Bất động sản, thương mại dịch vụ, công nghiệp, giáo dục, y tế, nông nghiệp và công nghệ.</p>
            <div class="developer-achievements">
              <div class="achievement-item">
                <strong>Top 10</strong>
                <span>Tập đoàn lớn nhất Việt Nam</span>
              </div>
              <div class="achievement-item">
                <strong>25+ năm</strong>
                <span>Kinh nghiệm phát triển BĐS</span>
              </div>
              <div class="achievement-item">
                <strong>100+</strong>
                <span>Dự án trên toàn quốc</span>
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
            <router-link to="/" class="btn-cta primary">
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
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'

const consultForm = reactive({
  name: '',
  phone: '',
  acceptTerms: false,
  acceptPolicy: false
})

const submitConsultation = () => {
  if (!consultForm.acceptTerms || !consultForm.acceptPolicy) {
    alert('Vui lòng đồng ý với điều khoản và chính sách bảo mật')
    return
  }
  
  // TODO: Handle form submission
  console.log('Form submitted:', consultForm)
  alert('Cảm ơn bạn! Chúng tôi sẽ liên hệ với bạn sớm nhất.')
  
  // Reset form
  consultForm.name = ''
  consultForm.phone = ''
  consultForm.acceptTerms = false
  consultForm.acceptPolicy = false
}

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
