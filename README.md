# Tín Phát Land - Trang web đăng tin Bất động sản

Website đăng tin bất động sản được xây dựng bằng Vue.js 3

## Tính năng

- 🏠 Xem danh sách bất động sản
- 📝 Đăng tin bất động sản mới
- 🔍 Tìm kiếm và lọc bất động sản
- 📱 Giao diện responsive
- 💾 Quản lý state với Pinia

## Công nghệ sử dụng

- **Vue.js 3** - Framework JavaScript
- **Vue Router** - Routing
- **Pinia** - State management
- **Vite** - Build tool
- **Axios** - HTTP client

## Cấu trúc thư mục

```
src/
├── assets/          # CSS, images, fonts
├── components/      # Vue components
│   ├── common/     # Common components (Header, Footer)
│   └── property/   # Property-specific components
├── views/          # Page views
├── router/         # Vue Router configuration
├── store/          # Pinia stores
├── services/       # API services
├── utils/          # Utility functions
├── App.vue         # Root component
└── main.js         # Entry point
```

## Cài đặt

1. Cài đặt dependencies:
```bash
npm install
```

2. Tạo file .env từ .env.example:
```bash
cp .env.example .env
```

3. Chạy development server:
```bash
npm run dev
```

4. Build cho production:
```bash
npm run build
```

## Hướng dẫn phát triển

### Thêm component mới

Tạo component trong thư mục `src/components/`:

```vue
<template>
  <div>
    <!-- Your template -->
  </div>
</template>

<script setup>
// Your script
</script>

<style scoped>
/* Your styles */
</style>
```

### Thêm route mới

Thêm route vào `src/router/index.js`:

```javascript
{
  path: '/your-path',
  name: 'YourName',
  component: () => import('../views/YourView.vue')
}
```

### Thêm API service

Thêm methods vào `src/services/api.js`:

```javascript
export const yourAPI = {
  get: () => api.get('/your-endpoint'),
  create: (data) => api.post('/your-endpoint', data)
}
```

## License

MIT
