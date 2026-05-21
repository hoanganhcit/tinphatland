<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <h1>Tín Phát Land</h1>
        </router-link>
      </div>
      
      <nav class="nav">
        <router-link to="/" class="nav-link">Trang chủ</router-link>
        <router-link to="/tim-kiem" class="nav-link">Tìm kiếm</router-link>
        <router-link to="/gioi-thieu" class="nav-link">Giới thiệu</router-link>
        <router-link to="/dang-tin" class="nav-link">Đăng tin</router-link>
        <router-link to="/lien-he" class="nav-link">Liên hệ</router-link>
      </nav>
      
      <div class="auth">
        <button class="btn-login">Đăng nhập</button>
      </div>
    </div>
  </header>
</template>
