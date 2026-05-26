# Tín Phát Land - Backend API

Backend API cho website đăng tin bất động sản Vinhomes Grand Park.

## Công nghệ sử dụng

- **Node.js** + **Express** - Server framework
- **MongoDB** - Database
- **Mongoose** - ODM cho MongoDB
- **Multer** - Xử lý upload file
- **Express Validator** - Validate dữ liệu

## Cài đặt

### 1. Cài đặt dependencies

```bash
cd backend
npm install
```

### 2. Cài đặt MongoDB

#### Windows:
1. Tải MongoDB Community Server từ [mongodb.com/download-center/community](https://www.mongodb.com/try/download/community)
2. Cài đặt và chạy MongoDB service
3. Hoặc dùng MongoDB Atlas (cloud): [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)

#### macOS:
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

#### Linux:
```bash
sudo apt-get install mongodb
sudo systemctl start mongodb
```

### 3. Cấu hình môi trường

Tạo file `.env` từ `.env.example`:

```bash
cp .env.example .env
```

Chỉnh sửa các giá trị trong `.env`:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/tinphatland
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

Nếu dùng MongoDB Atlas, `MONGODB_URI` sẽ có dạng:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/tinphatland
```

### 4. Tạo thư mục uploads

```bash
mkdir -p uploads/properties
```

## Chạy Server

### Development mode (với nodemon - auto restart)

```bash
npm run dev
```

### Production mode

```bash
npm start
```

Server sẽ chạy tại: `http://localhost:3000`

## API Endpoints

### Health Check
- `GET /api/health` - Kiểm tra trạng thái server

### Properties

- `GET /api/properties` - Lấy danh sách tất cả tin đăng
  - Query params: `zone`, `type`, `minPrice`, `maxPrice`, `bedrooms`, `status`, `page`, `limit`, `sort`
  
- `GET /api/properties/:id` - Lấy chi tiết tin đăng

- `POST /api/properties` - Tạo tin đăng mới
  - Body: FormData với các field và files ảnh
  - Required fields: title, zone, type, price, floor, bedrooms, grossArea, netArea, balconyDirection, handoverStatus, furnitureStatus, usageStatus, contactName, contactPhone, images

- `PUT /api/properties/:id` - Cập nhật tin đăng

- `DELETE /api/properties/:id` - Xóa tin đăng

- `GET /api/properties/search` - Tìm kiếm tin đăng
  - Query params: `q`, `zone`, `type`, `bedrooms`

## Cấu trúc thư mục

```
backend/
├── config/
│   └── database.js       # Cấu hình kết nối MongoDB
├── models/
│   └── Property.js       # Schema Property
├── controllers/
│   └── propertyController.js  # Business logic
├── routes/
│   └── propertyRoutes.js      # Định nghĩa routes
├── middleware/
│   └── upload.js         # Middleware xử lý upload
├── uploads/
│   └── properties/       # Thư mục lưu ảnh
├── .env                  # Biến môi trường
├── .env.example          # Mẫu biến môi trường
├── server.js             # Entry point
└── package.json
```

## Test API với curl/Postman

### Lấy danh sách tin đăng
```bash
curl http://localhost:3000/api/properties
```

### Tạo tin đăng mới
```bash
curl -X POST http://localhost:3000/api/properties \
  -F "title=Căn hộ 2PN+ đẹp" \
  -F "zone=The Rainbow" \
  -F "type=2PN+" \
  -F "price=3500000000" \
  -F "floor=Tầng 15" \
  -F "bedrooms=2" \
  -F "grossArea=75" \
  -F "netArea=65" \
  -F "balconyDirection=Đông" \
  -F "handoverStatus=Bàn giao hoàn thiện cơ bản" \
  -F "furnitureStatus=Nội thất cơ bản" \
  -F "usageStatus=Đã bàn giao chưa ở" \
  -F "contactName=Nguyễn Văn A" \
  -F "contactPhone=0967777143" \
  -F "images=@image1.jpg" \
  -F "images=@image2.jpg"
```

## Lỗi thường gặp

### MongoDB connection error
- Đảm bảo MongoDB đang chạy: `mongosh` (để test kết nối)
- Kiểm tra MONGODB_URI trong .env

### Port already in use
- Thay đổi PORT trong .env
- Hoặc kill process đang dùng port: `netstat -ano | findstr :3000` (Windows)

### Upload errors
- Đảm bảo thư mục `uploads/properties` đã được tạo
- Kiểm tra quyền ghi file

## Deploy

### Heroku
```bash
heroku create tin-phat-land-api
heroku config:set MONGODB_URI=<your-mongodb-atlas-uri>
git push heroku main
```

### Railway/Render
- Connect GitHub repository
- Set environment variables
- Deploy

## License

MIT
