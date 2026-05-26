# 🚀 Khởi động nhanh - Tín Phát Land

## Bước 1: Cài đặt dependencies

```powershell
# Frontend
npm install

# Backend
cd backend
npm install
cd ..
```

## Bước 2: Khởi động MongoDB

### Cách 1: MongoDB Local
```powershell
# Kiểm tra MongoDB đang chạy
mongosh

# Nếu chưa chạy, start MongoDB service
net start MongoDB
```

### Cách 2: MongoDB Atlas (Khuyên dùng)
1. Truy cập https://www.mongodb.com/cloud/atlas
2. Đăng ký tài khoản miễn phí
3. Tạo cluster
4. Lấy connection string
5. Cập nhật `backend/.env`:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/tinphatland
```

## Bước 3: Khởi động Backend

```powershell
cd backend

# Chạy backend ở chế độ development
npm run dev

# Backend sẽ chạy tại http://localhost:3000
```

Mở terminal mới để chạy tiếp:

## Bước 4: Thêm dữ liệu mẫu (Optional)

```powershell
# Trong thư mục backend
npm run seed
```

Lệnh này sẽ tạo 5 căn hộ mẫu trong database.

## Bước 5: Khởi động Frontend

```powershell
# Mở terminal mới, quay về thư mục root
cd ..

# Chạy frontend
npm run dev

# Frontend sẽ chạy tại http://localhost:5173
```

## ✅ Kiểm tra

### Backend API
Truy cập: http://localhost:3000/api/health

Kết quả mong đợi:
```json
{
  "status": "OK",
  "message": "Tín Phát Land API is running",
  "timestamp": "..."
}
```

### Lấy danh sách properties
Truy cập: http://localhost:3000/api/properties

### Frontend
Mở trình duyệt: http://localhost:5173

## 🧪 Test chức năng đăng tin

1. Truy cập: http://localhost:5173
2. Điều hướng đến trang "Đăng tin" (từ menu hoặc button)
3. Điền đầy đủ thông tin form:
   - Tiêu đề
   - Phân khu (chọn từ dropdown)
   - Loại căn hộ
   - Giá bán
   - Vị trí tầng
   - Số phòng ngủ
   - Diện tích
   - Hướng ban công
   - Tình trạng
   - Tải lên ít nhất 1 ảnh
   - Thông tin liên hệ
4. Click "Đăng tin ngay"
5. Kiểm tra kết quả:
   - Thông báo thành công
   - Tin đăng được lưu trong MongoDB
   - Có thể xem trong danh sách (sau khi approve)

## 📝 Notes

### Port đang sử dụng:
- **Frontend**: 5173 (Vite default)
- **Backend**: 3000 (có thể thay đổi trong `backend/.env`)
- **MongoDB**: 27017 (local) hoặc cloud (Atlas)

### File cấu hình quan trọng:
- `backend/.env` - Cấu hình backend
- `.env` - Cấu hình frontend (API URL)

### Logs và Debugging:
- Backend logs sẽ hiện trong terminal chạy `npm run dev`
- Frontend errors xem trong Browser Console (F12)
- MongoDB queries xem trong backend console

## 🐛 Troubleshooting

### Backend không kết nối MongoDB
```powershell
# Kiểm tra MongoDB status
mongosh

# Restart MongoDB service
net stop MongoDB
net start MongoDB
```

### Port 3000 đã được sử dụng
Thay đổi PORT trong `backend/.env`:
```
PORT=3001
```

Và cập nhật `VITE_API_URL` trong `.env`:
```
VITE_API_URL=http://localhost:3001/api
```

### CORS error
Đảm bảo `CORS_ORIGIN` trong `backend/.env` khớp với frontend:
```
CORS_ORIGIN=http://localhost:5173
```

### Không upload được ảnh
Kiểm tra thư mục uploads tồn tại:
```powershell
cd backend
mkdir uploads\properties
```

## 🎯 Test với curl (Optional)

### Health check
```powershell
curl http://localhost:3000/api/health
```

### Lấy danh sách properties
```powershell
curl http://localhost:3000/api/properties
```

### Tạo property mới (với PowerShell)
```powershell
$form = @{
    title = "Test Apartment"
    zone = "The Rainbow"
    type = "2PN"
    price = "3500000000"
    floor = "Tầng 15"
    bedrooms = "2"
    grossArea = "75"
    netArea = "65"
    balconyDirection = "Đông"
    handoverStatus = "Bàn giao hoàn thiện cơ bản"
    furnitureStatus = "Nội thất cơ bản"
    usageStatus = "Đã bàn giao chưa ở"
    contactName = "Test User"
    contactPhone = "0967777143"
    images = Get-Item "test.jpg"
}

Invoke-RestMethod -Uri "http://localhost:3000/api/properties" -Method Post -Form $form
```

## 📚 Tài liệu thêm

- [SETUP_GUIDE.md](SETUP_GUIDE.md) - Hướng dẫn chi tiết
- [backend/README.md](backend/README.md) - Tài liệu Backend API
- [README.md](README.md) - Tổng quan dự án

## ☎️ Hỗ trợ

Nếu gặp vấn đề, check logs trong terminal hoặc browser console để xem error messages chi tiết.
