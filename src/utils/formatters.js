// Format price in Vietnamese currency
export const formatPrice = (price) => {
  if (!price) return '0 đ'
  
  if (price >= 1000000000) {
    return `${(price / 1000000000).toFixed(1)} tỷ`
  }
  if (price >= 1000000) {
    return `${(price / 1000000).toFixed(0)} triệu`
  }
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price)
}

// Format date
export const formatDate = (date) => {
  return new Intl.DateTimeFormat('vi-VN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(new Date(date))
}

// Format area
export const formatArea = (area) => {
  return `${area} m²`
}

// Truncate text
export const truncate = (text, length = 100) => {
  if (!text) return ''
  if (text.length <= length) return text
  return text.substring(0, length) + '...'
}
