import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Property from './models/Property.js';

dotenv.config();

const sampleProperties = [
  {
    title: 'Căn hộ 2PN+ The Rainbow view công viên thoáng mát',
    project: 'Vinhomes Grand Park',
    zone: 'The Rainbow',
    type: '2PN+',
    price: 3500000000,
    floor: 'Tầng 15',
    bedrooms: 2,
    grossArea: 75.5,
    netArea: 65.2,
    balconyDirection: 'Đông',
    handoverStatus: 'Bàn giao hoàn thiện cơ bản',
    furnitureStatus: 'Nội thất cơ bản',
    usageStatus: 'Đã bàn giao chưa ở',
    images: ['/uploads/properties/sample1.jpg', '/uploads/properties/sample2.jpg'],
    description: 'Căn hộ đẹp, view công viên thoáng mát, gần trường học và siêu thị. Vị trí đẹp, giá tốt.',
    contactName: 'Nguyễn Văn A',
    contactPhone: '0967777143',
    status: 'approved',
    views: 125,
    featured: true
  },
  {
    title: 'Bán gấp căn 3PN The Manhattan Glory giá tốt',
    project: 'Vinhomes Grand Park',
    zone: 'The Manhattan Glory',
    type: '3PN',
    price: 5200000000,
    floor: 'Tầng 20',
    bedrooms: 3,
    grossArea: 95.8,
    netArea: 85.5,
    balconyDirection: 'Nam',
    handoverStatus: 'Bàn giao hoàn thiện cao cấp',
    furnitureStatus: 'Nội thất đầy đủ',
    usageStatus: 'Đang ở',
    images: ['/uploads/properties/sample3.jpg'],
    description: 'Căn góc 3PN, view đẹp, nội thất cao cấp. Cần bán gấp trong tháng.',
    contactName: 'Trần Thị B',
    contactPhone: '0912345678',
    status: 'approved',
    views: 89,
    featured: true
  },
  {
    title: 'Studio The Origami giá sinh viên',
    project: 'Vinhomes Grand Park',
    zone: 'The Origami',
    type: 'Studio',
    price: 1800000000,
    floor: 'Tầng 8',
    bedrooms: 0,
    grossArea: 35.5,
    netArea: 30.2,
    balconyDirection: 'Bắc',
    handoverStatus: 'Bàn giao thô',
    furnitureStatus: 'Không nội thất',
    usageStatus: 'Chưa bàn giao',
    images: ['/uploads/properties/sample4.jpg'],
    description: 'Studio nhỏ gọn, phù hợp sinh viên hoặc người độc thân. Giá rất tốt.',
    contactName: 'Lê Văn C',
    contactPhone: '0998765432',
    status: 'approved',
    views: 234,
    featured: false
  },
  {
    title: 'Căn hộ 1PN+ The Beverly view hồ bơi',
    project: 'Vinhomes Grand Park',
    zone: 'The Beverly',
    type: '1PN+',
    price: 2800000000,
    floor: 'Tầng 12',
    bedrooms: 1,
    grossArea: 55.0,
    netArea: 48.5,
    balconyDirection: 'Tây Nam',
    handoverStatus: 'Bàn giao hoàn thiện cơ bản',
    furnitureStatus: 'Nội thất cơ bản',
    usageStatus: 'Đã bàn giao chưa ở',
    images: ['/uploads/properties/sample5.jpg'],
    description: 'Căn hộ 1PN+ view hồ bơi, rất đẹp và thoáng. Sắp nhận nhà.',
    contactName: 'Phạm Thị D',
    contactPhone: '0901234567',
    status: 'approved',
    views: 156,
    featured: false
  },
  {
    title: 'Căn 2PN Glory Heights giá đầu tư',
    project: 'Vinhomes Grand Park',
    zone: 'Glory Heights',
    type: '2PN',
    price: 3200000000,
    floor: 'Tầng 18',
    bedrooms: 2,
    grossArea: 70.0,
    netArea: 60.8,
    balconyDirection: 'Đông Nam',
    handoverStatus: 'Bàn giao hoàn thiện cơ bản',
    furnitureStatus: 'Không nội thất',
    usageStatus: 'Đang cho thuê',
    images: ['/uploads/properties/sample6.jpg'],
    description: 'Căn hộ đang cho thuê, thu nhập ổn định. Phù hợp đầu tư.',
    contactName: 'Hoàng Văn E',
    contactPhone: '0987654321',
    status: 'approved',
    views: 78,
    featured: false
  }
];

const seedDatabase = async () => {
  try {
    // Kết nối MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');

    // Xóa dữ liệu cũ
    await Property.deleteMany({});
    console.log('🗑️  Cleared existing properties');

    // Thêm dữ liệu mẫu
    const created = await Property.insertMany(sampleProperties);
    console.log(`✅ Created ${created.length} sample properties`);

    console.log('\n📊 Sample properties:');
    created.forEach((prop, index) => {
      console.log(`${index + 1}. ${prop.title} - ${prop.formattedPrice}`);
    });

    console.log('\n✅ Database seeding completed!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
