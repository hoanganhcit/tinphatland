# 🏢 Tín Phát Land - Real Estate Management System

Website đăng tin mua bán bất động sản Vinhomes Grand Park với backend Node.js + MongoDB và frontend Vue 3.

![Tech Stack](https://img.shields.io/badge/Frontend-Vue.js%203-4FC08D?logo=vue.js)
![Backend](https://img.shields.io/badge/Backend-Node.js%20%2B%20Express-339933?logo=node.js)
![Database](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb)

## ✨ Features

### 🏠 Property Management
- ✅ Đăng tin bất động sản với đầy đủ thông tin
- ✅ Upload multiple images (tối đa 10 ảnh)
- ✅ Quản lý trạng thái tin đăng (pending/approved/rejected/sold)
- ✅ Xem chi tiết căn hộ với gallery ảnh
- ✅ Lượt xem và tin nổi bật

### 🔍 Search & Filter
- ✅ Tìm kiếm theo tiêu đề, mô tả
- ✅ Lọc theo phân khu (The Rainbow, Origami, Beverly...)
- ✅ Lọc theo loại căn hộ (Studio, 1PN, 2PN, 3PN...)
- ✅ Lọc theo khoảng giá
- ✅ Lọc theo số phòng ngủ

### 📊 Data Management
- ✅ RESTful API với Express
- ✅ MongoDB với Mongoose ODM
- ✅ Validation đầy đủ
- ✅ Error handling toàn cục
- ✅ Pagination và sorting

## 🚀 Quick Start

### Cách 1: Tự động (Khuyên dùng)

```powershell
# Chạy script cài đặt tự động
.\install.ps1

# Sau khi cài đặt xong, chạy cả frontend và backend
.\start.bat
```

### Cách 2: Thủ công

```powershell
# Terminal 1 - Backend
cd backend
npm install
npm run seed    # Tạo dữ liệu mẫu (optional)
npm run dev

# Terminal 2 - Frontend  
npm install
npm run dev
```

### Truy cập

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000/api
- **Health Check**: http://localhost:3000/api/health

## 📋 Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x
- **MongoDB** >= 5.x (local hoặc MongoDB Atlas)

### Cài đặt MongoDB

#### Option 1: MongoDB Local
1. Download: https://www.mongodb.com/try/download/community
2. Install và start service:
   ```powershell
   net start MongoDB
   ```

#### Option 2: MongoDB Atlas (Cloud - Recommended)
1. Đăng ký miễn phí: https://www.mongodb.com/cloud/atlas
2. Tạo cluster
3. Lấy connection string
4. Cập nhật `backend/.env`:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/tinphatland
   ```

## 🏗️ Project Structure

```
Tín Phát Land/
├── backend/                    # Backend API Server
│   ├── config/                # Database config
│   ├── controllers/           # Request handlers
│   ├── middleware/            # Express middleware
│   ├── models/                # Mongoose models
│   ├── routes/                # API routes
│   ├── uploads/               # Uploaded images
│   ├── server.js              # Entry point
│   ├── seed.js                # Seed data script
│   └── package.json
├── src/                       # Frontend Vue App
│   ├── components/            # Vue components
│   ├── views/                 # Page components
│   ├── services/              # API services
│   ├── store/                 # Pinia stores
│   ├── router/                # Vue Router
│   └── main.js
├── public/                    # Static assets
├── install.ps1                # Installation script
├── start.bat                  # Start both servers
├── QUICKSTART.md              # Quick start guide
├── SETUP_GUIDE.md             # Detailed setup
└── IMPLEMENTATION_SUMMARY.md  # Technical docs
```

## 🛠️ Tech Stack

### Frontend
- **Vue 3** - Progressive JavaScript framework
- **Vue Router** - Official routing
- **Pinia** - State management
- **Axios** - HTTP client
- **Vite** - Build tool

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Multer** - File upload middleware
- **Express Validator** - Input validation

## 📡 API Endpoints

### Properties

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/properties` | Lấy danh sách tin đăng |
| GET | `/api/properties/:id` | Lấy chi tiết tin đăng |
| POST | `/api/properties` | Tạo tin đăng mới |
| PUT | `/api/properties/:id` | Cập nhật tin đăng |
| DELETE | `/api/properties/:id` | Xóa tin đăng |
| GET | `/api/properties/search` | Tìm kiếm tin đăng |

### Query Parameters (GET /api/properties)

- `zone` - Phân khu (The Rainbow, The Origami...)
- `type` - Loại căn hộ (Studio, 1PN, 2PN...)
- `minPrice` - Giá tối thiểu
- `maxPrice` - Giá tối đa
- `bedrooms` - Số phòng ngủ
- `status` - Trạng thái (pending/approved/rejected/sold)
- `page` - Trang hiện tại (default: 1)
- `limit` - Số items per page (default: 12)
- `sort` - Sắp xếp (default: -createdAt)

## 🧪 Testing

### Test API với curl

```powershell
# Health check
curl http://localhost:3000/api/health

# Get all properties
curl http://localhost:3000/api/properties

# Get property by ID
curl http://localhost:3000/api/properties/6123456789abcdef01234567

# Search properties
curl "http://localhost:3000/api/properties/search?q=rainbow&type=2PN"
```

### Test Frontend

1. Mở http://localhost:5173
2. Xem danh sách căn hộ
3. Click vào căn hộ để xem chi tiết
4. Đăng tin mới tại "/dang-tin"
5. Kiểm tra MongoDB để verify data

## 📚 Documentation

- **[QUICKSTART.md](QUICKSTART.md)** - Hướng dẫn khởi động nhanh
- **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Hướng dẫn cài đặt chi tiết
- **[IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md)** - Chi tiết kỹ thuật
- **[backend/README.md](backend/README.md)** - Tài liệu API Backend

## 🔧 Configuration

### Frontend (.env)
```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=Tín Phát Land
```

### Backend (backend/.env)
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/tinphatland
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

## 📦 Scripts

### Frontend
```powershell
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

### Backend
```powershell
npm start         # Start server (production)
npm run dev       # Start with nodemon (development)
npm run seed      # Seed sample data
```

## 🐛 Troubleshooting

### MongoDB Connection Error

```powershell
# Check if MongoDB is running
mongosh

# Start MongoDB service
net start MongoDB

# Or use MongoDB Atlas connection string in backend/.env
```

### Port Already in Use

```powershell
# Backend: Change PORT in backend/.env
PORT=3001

# Frontend: Change port in vite.config.js or kill process
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

### CORS Error

Đảm bảo `CORS_ORIGIN` trong `backend/.env` khớp với frontend URL:
```
CORS_ORIGIN=http://localhost:5173
```

### Upload Error

Tạo thư mục uploads:
```powershell
mkdir backend\uploads\properties
```

## 🚢 Deployment

### Frontend (Netlify/Vercel)

```powershell
npm run build
# Deploy dist/ folder
```

### Backend (Heroku/Railway/Render)

```powershell
# Set environment variables
MONGODB_URI=<your-mongodb-atlas-uri>
NODE_ENV=production
PORT=<assigned-port>
```

### Database (MongoDB Atlas)

Free tier available: https://www.mongodb.com/cloud/atlas

## 🔐 Security Notes

⚠️ **Current implementation is for development only!**

**Not implemented yet:**
- Authentication/Authorization
- Input sanitization
- Rate limiting
- HTTPS/SSL
- File virus scanning

**For production, you must add:**
- JWT authentication
- Input validation & sanitization
- Rate limiting middleware
- Cloud storage for images (S3, Cloudinary)
- HTTPS with valid SSL certificate
- CSRF protection
- Helmet.js for security headers

## 📈 Future Enhancements

- [ ] User authentication & authorization
- [ ] Admin dashboard for property approval
- [ ] Cloud image storage (Cloudinary/AWS S3)
- [ ] Image optimization & resize
- [ ] Email notifications
- [ ] Advanced search with more filters
- [ ] Property comparison feature
- [ ] Favorites/Wishlist
- [ ] Property analytics
- [ ] Social media sharing
- [ ] Payment integration
- [ ] Chat/Messaging system

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - See LICENSE file for details

## 📞 Contact

- **Hotline**: 0967 777 143
- **Project**: Vinhomes Grand Park Real Estate

---

Made with ❤️ for Tín Phát Land
