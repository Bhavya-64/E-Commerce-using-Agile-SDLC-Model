import { Product } from '@/types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    originalPrice: 399.99,
    description: 'High-quality wireless headphones with noise cancellation and premium sound.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    category: 'Electronics',
    tags: ['wireless', 'audio', 'premium'],
    rating: 4.8,
    reviewCount: 324,
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 199.99,
    description: 'Track your fitness goals with this advanced smartwatch featuring heart rate monitoring.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    category: 'Electronics',
    tags: ['smartwatch', 'fitness', 'health'],
    rating: 4.6,
    reviewCount: 156,
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Minimalist Backpack',
    price: 89.99,
    originalPrice: 129.99,
    description: 'Sleek and functional backpack perfect for work, travel, and everyday use.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    category: 'Fashion',
    tags: ['backpack', 'minimalist', 'travel'],
    rating: 4.7,
    reviewCount: 89,
    inStock: true,
    featured: false
  },
  {
    id: '4',
    name: 'Organic Coffee Beans',
    price: 24.99,
    description: 'Premium organic coffee beans sourced from sustainable farms around the world.',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop',
    category: 'Food & Beverage',
    tags: ['coffee', 'organic', 'premium'],
    rating: 4.9,
    reviewCount: 267,
    inStock: true,
    featured: true
  },
  {
    id: '5',
    name: 'Wireless Charging Pad',
    price: 49.99,
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    image: 'https://images.unsplash.com/photo-1586892478025-2f5c1caae9d2?w=400&h=400&fit=crop',
    category: 'Electronics',
    tags: ['wireless', 'charging', 'technology'],
    rating: 4.4,
    reviewCount: 123,
    inStock: true,
    featured: false
  },
  {
    id: '6',
    name: 'Ergonomic Office Chair',
    price: 349.99,
    originalPrice: 449.99,
    description: 'Comfortable ergonomic office chair designed for long working hours.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
    category: 'Furniture',
    tags: ['office', 'ergonomic', 'comfort'],
    rating: 4.5,
    reviewCount: 78,
    inStock: true,
    featured: false
  },
  {
    id: '7',
    name: 'Stainless Steel Water Bottle',
    price: 29.99,
    description: 'Insulated stainless steel water bottle that keeps drinks cold for 24 hours.',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop',
    category: 'Sports & Outdoors',
    tags: ['water bottle', 'insulated', 'sustainable'],
    rating: 4.6,
    reviewCount: 145,
    inStock: false,
    featured: false
  },
  {
    id: '8',
    name: 'Designer Sunglasses',
    price: 159.99,
    originalPrice: 199.99,
    description: 'Stylish designer sunglasses with UV protection and premium frames.',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
    category: 'Fashion',
    tags: ['sunglasses', 'designer', 'UV protection'],
    rating: 4.3,
    reviewCount: 92,
    inStock: true,
    featured: true
  }
];

export const categories = [
  'All',
  'Electronics',
  'Fashion',
  'Food & Beverage',
  'Furniture',
  'Sports & Outdoors'
];