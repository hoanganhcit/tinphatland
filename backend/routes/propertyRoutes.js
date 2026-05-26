import express from 'express';
import { body } from 'express-validator';
import {
  getAllProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
  searchProperties,
  updatePropertyStatus,
  updatePropertyFeatured
} from '../controllers/propertyController.js';
import { upload, handleMulterError } from '../middleware/upload.js';
import { authMiddleware, adminOnly } from '../middleware/auth.js';

const router = express.Router();

// Validation rules cho create/update property
const propertyValidation = [
  body('title').trim().notEmpty().withMessage('Tiêu đề là bắt buộc'),
  body('zone').notEmpty().withMessage('Phân khu là bắt buộc'),
  body('type').notEmpty().withMessage('Loại căn hộ là bắt buộc'),
  body('price').isNumeric().withMessage('Giá phải là số'),
  body('floor').notEmpty().withMessage('Vị trí tầng là bắt buộc'),
  body('bedrooms').isInt({ min: 0 }).withMessage('Số phòng ngủ không hợp lệ'),
  body('grossArea').isFloat({ min: 0 }).withMessage('Diện tích tim tường không hợp lệ'),
  body('netArea').isFloat({ min: 0 }).withMessage('Diện tích thông thủy không hợp lệ'),
  body('balconyDirection').notEmpty().withMessage('Hướng ban công là bắt buộc'),
  body('handoverStatus').notEmpty().withMessage('Tình trạng bàn giao là bắt buộc'),
  body('furnitureStatus').notEmpty().withMessage('Tình trạng nội thất là bắt buộc'),
  body('usageStatus').notEmpty().withMessage('Tình trạng sử dụng là bắt buộc'),
  body('contactName').trim().notEmpty().withMessage('Tên người liên hệ là bắt buộc'),
  body('contactPhone').matches(/^[0-9]{10}$/).withMessage('Số điện thoại không hợp lệ')
];

// Public routes
router.get('/search', searchProperties);
router.get('/', getAllProperties);
router.get('/:id', getPropertyById);
router.post(
  '/',
  upload.array('images', 10),
  handleMulterError,
  propertyValidation,
  createProperty
);

// Admin only routes
router.put('/:id/status', authMiddleware, adminOnly, updatePropertyStatus);
router.put('/:id/featured', authMiddleware, adminOnly, updatePropertyFeatured);
router.put(
  '/:id',
  authMiddleware,
  adminOnly,
  upload.array('images', 10),
  handleMulterError,
  updateProperty
);
router.delete('/:id', authMiddleware, adminOnly, deleteProperty);

export default router;
