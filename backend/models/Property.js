import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  // Thông tin cơ bản
  title: {
    type: String,
    required: [true, 'Tiêu đề là bắt buộc'],
    trim: true,
    maxlength: [200, 'Tiêu đề không được quá 200 ký tự']
  },
  project: {
    type: String,
    required: true,
    default: 'Vinhomes Grand Park'
  },
  zone: {
    type: String,
    required: [true, 'Phân khu là bắt buộc'],
    enum: [
      'The Manhattan',
      'The Origami',
      'The Rainbow',
      'The Beverly Solari',
      'The Beverly',
      'Glory Heights',
      'The Manhattan Glory',
      'The Opus One'
    ]
  },
  type: {
    type: String,
    required: [true, 'Loại căn hộ là bắt buộc'],
    enum: ['Studio', '1PN', '1PN+', '2PN', '2PN+', '3PN', '3PN+']
  },
  price: {
    type: Number,
    required: [true, 'Giá bán là bắt buộc'],
    min: [0, 'Giá phải lớn hơn 0']
  },
  
  // Thông tin chi tiết
  floor: {
    type: String,
    required: [true, 'Vị trí tầng là bắt buộc']
  },
  bedrooms: {
    type: Number,
    required: [true, 'Số phòng ngủ là bắt buộc'],
    min: 0,
    max: 10
  },
  grossArea: {
    type: Number,
    required: [true, 'Diện tích tim tường là bắt buộc'],
    min: [0, 'Diện tích phải lớn hơn 0']
  },
  netArea: {
    type: Number,
    required: [true, 'Diện tích thông thủy là bắt buộc'],
    min: [0, 'Diện tích phải lớn hơn 0']
  },
  balconyDirection: {
    type: String,
    required: [true, 'Hướng ban công là bắt buộc'],
    enum: ['Đông', 'Tây', 'Nam', 'Bắc', 'Đông Bắc', 'Đông Nam', 'Tây Bắc', 'Tây Nam']
  },
  handoverStatus: {
    type: String,
    required: [true, 'Tình trạng bàn giao là bắt buộc'],
    enum: [
      'Bàn giao thô',
      'Bàn giao hoàn thiện cơ bản',
      'Bàn giao hoàn thiện cao cấp'
    ]
  },
  furnitureStatus: {
    type: String,
    required: [true, 'Tình trạng nội thất là bắt buộc'],
    enum: [
      'Không nội thất',
      'Nội thất cơ bản',
      'Nội thất đầy đủ',
      'Nội thất cao cấp'
    ]
  },
  usageStatus: {
    type: String,
    required: [true, 'Tình trạng sử dụng là bắt buộc'],
    enum: [
      'Chưa bàn giao',
      'Đã bàn giao chưa ở',
      'Đang ở',
      'Đang cho thuê'
    ]
  },
  
  // Hình ảnh
  images: [{
    type: String,
    required: true
  }],
  
  // Mô tả
  description: {
    type: String,
    trim: true,
    maxlength: [5000, 'Mô tả không được quá 5000 ký tự']
  },
  
  // Thông tin liên hệ
  contactName: {
    type: String,
    required: [true, 'Tên người liên hệ là bắt buộc'],
    trim: true
  },
  contactPhone: {
    type: String,
    required: [true, 'Số điện thoại là bắt buộc'],
    match: [/^[0-9]{10}$/, 'Số điện thoại không hợp lệ (phải có 10 chữ số)']
  },
  
  // Trạng thái tin đăng
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected', 'sold'],
    default: 'pending'
  },
  
  // Trạng thái bán hàng
  salesStatus: {
    type: String,
    enum: ['Đang bán', 'Đã cọc', 'Đã đặt chỗ', 'Đã bán'],
    default: 'Đang bán'
  },
  
  // Metadata
  views: {
    type: Number,
    default: 0
  },
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true // Tự động thêm createdAt và updatedAt
});

// Indexes để tăng tốc độ tìm kiếm
propertySchema.index({ zone: 1, type: 1 });
propertySchema.index({ price: 1 });
propertySchema.index({ status: 1 });
propertySchema.index({ createdAt: -1 });

// Virtual field để format giá
propertySchema.virtual('formattedPrice').get(function() {
  const billion = this.price / 1000000000;
  return billion >= 1 
    ? `${billion.toFixed(2)} tỷ VNĐ` 
    : `${(this.price / 1000000).toFixed(0)} triệu VNĐ`;
});

// Ensure virtuals are included in JSON
propertySchema.set('toJSON', { virtuals: true });
propertySchema.set('toObject', { virtuals: true });

const Property = mongoose.model('Property', propertySchema);

export default Property;
