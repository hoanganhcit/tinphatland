import Property from '../models/Property.js';
import { validationResult } from 'express-validator';

// @desc    Lấy tất cả properties
// @route   GET /api/properties
// @access  Public
export const getAllProperties = async (req, res) => {
  try {
    const { 
      zone, 
      type, 
      minPrice, 
      maxPrice, 
      bedrooms,
      status, // Không filter mặc định, lấy tất cả
      page = 1,
      limit = 12,
      sort = '-createdAt' // Mới nhất trước
    } = req.query;

    // Build query
    const query = {};
    
    // Chỉ filter theo status nếu được truyền vào
    if (status) query.status = status;
    
    if (zone) query.zone = zone;
    if (type) query.type = type;
    if (bedrooms) query.bedrooms = Number(bedrooms);
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    // Execute query with pagination
    const skip = (Number(page) - 1) * Number(limit);
    const properties = await Property.find(query)
      .sort(sort)
      .limit(Number(limit))
      .skip(skip)
      .lean();

    // Get total count
    const total = await Property.countDocuments(query);

    res.json({
      success: true,
      data: properties,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit))
      }
    });
  } catch (error) {
    console.error('Error in getAllProperties:', error);
    res.status(500).json({
      success: false,
      message: 'Lỗi khi lấy danh sách tin đăng',
      error: error.message
    });
  }
};

// @desc    Lấy chi tiết property
// @route   GET /api/properties/:id
// @access  Public
export const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({
        success: false,
        message: 'Không tìm thấy tin đăng'
      });
    }

    // Tăng lượt xem
    property.views += 1;
    await property.save();

    res.json({
      success: true,
      data: property
    });
  } catch (error) {
    console.error('Error in getPropertyById:', error);
    res.status(500).json({
      success: false,
      message: 'Lỗi khi lấy chi tiết tin đăng',
      error: error.message
    });
  }
};

// @desc    Tạo property mới
// @route   POST /api/properties
// @access  Public (có thể thêm auth sau)
export const createProperty = async (req, res) => {
  try {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Dữ liệu không hợp lệ',
        errors: errors.array()
      });
    }

    // Get image paths from uploaded files
    const images = req.files ? req.files.map(file => `/uploads/properties/${file.filename}`) : [];

    if (images.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Vui lòng tải lên ít nhất 1 hình ảnh'
      });
    }

    // Create property data
    const propertyData = {
      ...req.body,
      images,
      status: 'pending' // Mặc định là chờ duyệt
    };

    // Convert string numbers to actual numbers
    if (propertyData.price) propertyData.price = Number(propertyData.price);
    if (propertyData.bedrooms) propertyData.bedrooms = Number(propertyData.bedrooms);
    if (propertyData.grossArea) propertyData.grossArea = Number(propertyData.grossArea);
    if (propertyData.netArea) propertyData.netArea = Number(propertyData.netArea);
    
    // Convert string boolean to actual boolean
    if (propertyData.featured === 'true' || propertyData.featured === true) {
      propertyData.featured = true;
    } else {
      propertyData.featured = false;
    }

    // Create new property
    const property = await Property.create(propertyData);

    res.status(201).json({
      success: true,
      message: 'Đăng tin thành công! Tin của bạn đang chờ phê duyệt.',
      data: property
    });
  } catch (error) {
    console.error('Error in createProperty:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Dữ liệu không hợp lệ',
        errors: messages
      });
    }

    res.status(500).json({
      success: false,
      message: 'Lỗi khi đăng tin',
      error: error.message
    });
  }
};

// @desc    Cập nhật property
// @route   PUT /api/properties/:id
// @access  Private (cần auth)
export const updateProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({
        success: false,
        message: 'Không tìm thấy tin đăng'
      });
    }

    // Xử lý ảnh
    let finalImages = [];
    
    // Nếu có existingImages được gửi lên (danh sách ảnh cũ muốn giữ lại)
    if (req.body.existingImages) {
      try {
        const existingImages = JSON.parse(req.body.existingImages);
        finalImages = [...existingImages];
      } catch (e) {
        console.error('Error parsing existingImages:', e);
      }
    }
    
    // Thêm ảnh mới nếu có
    if (req.files && req.files.length > 0) {
      const newImages = req.files.map(file => `/uploads/properties/${file.filename}`);
      finalImages = [...finalImages, ...newImages];
    }
    
    // Nếu có ảnh thì cập nhật, không thì giữ nguyên
    if (finalImages.length > 0) {
      req.body.images = finalImages;
    }

    // Convert string numbers to actual numbers
    if (req.body.price) req.body.price = Number(req.body.price);
    if (req.body.bedrooms) req.body.bedrooms = Number(req.body.bedrooms);
    if (req.body.grossArea) req.body.grossArea = Number(req.body.grossArea);
    if (req.body.netArea) req.body.netArea = Number(req.body.netArea);

    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      message: 'Cập nhật tin đăng thành công',
      data: updatedProperty
    });
  } catch (error) {
    console.error('Error in updateProperty:', error);
    res.status(500).json({
      success: false,
      message: 'Lỗi khi cập nhật tin đăng',
      error: error.message
    });
  }
};

// @desc    Xóa property
// @route   DELETE /api/properties/:id
// @access  Private (cần auth)
export const deleteProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({
        success: false,
        message: 'Không tìm thấy tin đăng'
      });
    }

    await property.deleteOne();

    res.json({
      success: true,
      message: 'Xóa tin đăng thành công'
    });
  } catch (error) {
    console.error('Error in deleteProperty:', error);
    res.status(500).json({
      success: false,
      message: 'Lỗi khi xóa tin đăng',
      error: error.message
    });
  }
};

// @desc    Tìm kiếm properties
// @route   GET /api/properties/search
// @access  Public
export const searchProperties = async (req, res) => {
  try {
    const { q, ...filters } = req.query;

    let query = { status: 'approved' };

    // Text search
    if (q) {
      query.$or = [
        { title: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } },
        { zone: { $regex: q, $options: 'i' } }
      ];
    }

    // Apply other filters
    if (filters.zone) query.zone = filters.zone;
    if (filters.type) query.type = filters.type;
    if (filters.bedrooms) query.bedrooms = Number(filters.bedrooms);

    const properties = await Property.find(query)
      .sort('-createdAt')
      .limit(20);

    res.json({
      success: true,
      data: properties,
      count: properties.length
    });
  } catch (error) {
    console.error('Error in searchProperties:', error);
    res.status(500).json({
      success: false,
      message: 'Lỗi khi tìm kiếm',
      error: error.message
    });
  }
};

// @desc    Cập nhật trạng thái property (admin only)
// @route   PUT /api/properties/:id/status
// @access  Private/Admin
export const updatePropertyStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!['pending', 'approved', 'rejected'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Trạng thái không hợp lệ'
      });
    }

    const property = await Property.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!property) {
      return res.status(404).json({
        success: false,
        message: 'Không tìm thấy tin đăng'
      });
    }

    res.json({
      success: true,
      message: 'Cập nhật trạng thái thành công',
      data: property
    });
  } catch (error) {
    console.error('Error in updatePropertyStatus:', error);
    res.status(500).json({
      success: false,
      message: 'Lỗi khi cập nhật trạng thái',
      error: error.message
    });
  }
};

// @desc    Cập nhật trạng thái featured property (admin only)
// @route   PUT /api/properties/:id/featured
// @access  Private/Admin
export const updatePropertyFeatured = async (req, res) => {
  try {
    const { featured } = req.body;

    const property = await Property.findByIdAndUpdate(
      req.params.id,
      { featured: Boolean(featured) },
      { new: true }
    );

    if (!property) {
      return res.status(404).json({
        success: false,
        message: 'Không tìm thấy tin đăng'
      });
    }

    res.json({
      success: true,
      message: 'Cập nhật trạng thái nổi bật thành công',
      data: property
    });
  } catch (error) {
    console.error('Error in updatePropertyFeatured:', error);
    res.status(500).json({
      success: false,
      message: 'Lỗi khi cập nhật trạng thái nổi bật',
      error: error.message
    });
  }
};
