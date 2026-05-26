# Hướng dẫn cài đặt và chạy Tín Phát Land

Dự án website đăng tin bất động sản Vinhomes Grand Park với backend Node.js + MongoDB và frontend Vue 3.

## Yêu cầu hệ thống

- Node.js >= 18.x
- MongoDB >= 5.x (hoặc MongoDB Atlas)
- npm hoặc yarn

## Cài đặt

### 1. Clone repository và cài đặt dependencies

```bash
# Cài đặt frontend
npm install

# Cài đặt backend
cd backend
npm install
cd ..
```

### 2. Cài đặt MongoDB

#### Tùy chọn A: MongoDB Local (Windows)

1. Tải và cài đặt MongoDB Community Server: https://www.mongodb.com/try/download/community
2. Chạy MongoDB:
```bash
# MongoDB sẽ tự động chạy như một Windows Service
# Hoặc chạy thủ công:
mongod
```

#### Tùy chọn B: MongoDB Atlas (Cloud - Khuyên dùng)

1. Đăng ký tài khoản miễn phí tại: https://www.mongodb.com/cloud/atlas
2. Tạo cluster mới
3. Tạo database user
4. Lấy connection string

### 3. Cấu hình environment variables

#### Frontend (.env)
```bash
# Đã có sẵn file .env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=Tín Phát Land
```

#### Backend (backend/.env)
```bash
cd backend
# File .env đã được tạo sẵn, cập nhật MONGODB_URI nếu cần

# Nếu dùng MongoDB local:
MONGODB_URI=mongodb://localhost:27017/tinphatland

# Nếu dùng MongoDB Atlas:
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/tinphatland
```

### 4. Khởi tạo dữ liệu mẫu (Optional)

```bash
cd backend
npm run seed
cd ..
```

Lệnh này sẽ tạo 5 tin đăng bất động sản mẫu để test.

## Chạy dự án

### Cách 1: Chạy riêng biệt (Development)

Terminal 1 - Backend:
```bash
cd backend
npm run dev
```
Backend sẽ chạy tại: http://localhost:3000

Terminal 2 - Frontend:
```bash
npm run dev
```
Frontend sẽ chạy tại: http://localhost:5173

### Cách 2: Chạy đồng thời (nếu có concurrently)

```bash
npm install -g concurrently
```

Thêm script vào package.json:
```json
"scripts": {
  "dev:all": "concurrently \"npm run dev\" \"cd backend && npm run dev\""
}
```

Sau đó chỉ cần chạy:
```bash
npm run dev:all
```

## Kiểm tra Backend hoạt động

```bash
# Health check
curl http://localhost:3000/api/health

# Lấy danh sách properties
curl http://localhost:3000/api/properties
```

## Cấu trúc project

```
Tín Phát Land/
├── backend/                 # Backend API
│   ├── config/             # Database config
│   ├── models/             # Mongoose models
│   ├── controllers/        # Business logic
│   ├── routes/             # API routes
│   ├── middleware/         # Middleware (upload, auth...)
│   ├── uploads/            # Uploaded images
│   ├── server.js           # Entry point
│   ├── seed.js             # Seed data script
│   └── package.json
├── src/                    # Frontend source
│   ├── components/         # Vue components
│   ├── views/              # Vue views/pages
│   ├── services/           # API services
│   ├── router/             # Vue router
│   └── main.js
├── public/                 # Static files
└── package.json
```

## Chức năng chính

### Backend API

- ✅ CRUD operations cho properties
- ✅ Upload multiple images với Multer
- ✅ Validation với express-validator
- ✅ Pagination và filtering
- ✅ Search functionality
- ✅ MongoDB với Mongoose ODM

### Frontend

- ✅ Form đăng tin bất động sản
- ✅ Preview ảnh trước khi upload
- ✅ Validation form
- ✅ Kết nối API với Axios
- ✅ Upload multiple files

## Testing

### Test đăng tin

1. Mở trình duyệt: http://localhost:5173
2. Điều hướng đến trang "Đăng tin"
3. Điền form và upload ảnh
4. Submit form
5. Kiểm tra MongoDB hoặc gọi API để xem tin đã được tạo

### Test API với Postman/Thunder Client

Import collection hoặc test từng endpoint:

**GET all properties:**
```
GET http://localhost:3000/api/properties
```

**POST create property:**
```
POST http://localhost:3000/api/properties
Content-Type: multipart/form-data

Body:
- title: Căn hộ 2PN đẹp
- zone: The Rainbow
- type: 2PN
- price: 3500000000
- floor: Tầng 15
- bedrooms: 2
- grossArea: 75
- netArea: 65
- balconyDirection: Đông
- handoverStatus: Bàn giao hoàn thiện cơ bản
- furnitureStatus: Nội thất cơ bản
- usageStatus: Đã bàn giao chưa ở
- contactName: Nguyễn Văn A
- contactPhone: 0967777143
- images: [file1.jpg, file2.jpg]
```

## Troubleshooting

### Backend không kết nối được MongoDB

```bash
# Kiểm tra MongoDB đang chạy
mongosh

# Nếu lỗi, restart MongoDB service (Windows)
net stop MongoDB
net start MongoDB
```

### Port đã được sử dụng

```bash
# Thay đổi PORT trong backend/.env
PORT=3001
```

### CORS error

Kiểm tra `CORS_ORIGIN` trong backend/.env phải khớp với frontend URL:
```
CORS_ORIGIN=http://localhost:5173
```

### Upload error

Đảm bảo thư mục uploads tồn tại:
```bash
cd backend
mkdir -p uploads/properties
```

## Build Production

### Frontend
```bash
npm run build
```
Build output sẽ ở trong thư mục `dist/`

### Backend
```bash
# Set NODE_ENV=production trong .env
NODE_ENV=production
```

## Deploy

### Backend
- Heroku
- Railway
- Render
- DigitalOcean

### Frontend
- Netlify
- Vercel
- Firebase Hosting
- GitHub Pages

### Database
- MongoDB Atlas (Recommended)

## License

MIT

## Liên hệ

Hotline: 0967777143
