/*
 *
 * CategoryFrontPage constants
 *
 */

const asyncActionType = (type) => ({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
});

// API
export const dealsBaseAPI = '/public-api/all/specific-category';
export const couponsBaseAPI = '/public-api/all/category-coupons';
export const fetchFeaturedStoresAPI = '/public-api/all/category-featured-stores';
export const infoBaseAPI = '/public-api/subcategory';


// Action types
export const CATEGORY_ITEMS = asyncActionType('CATEGORY_ITEMS');
export const CATEGORY_COUPONS = asyncActionType('CATEGORY_COUPONS');
export const CATEGORY_INFO = asyncActionType('CATEGORY_INFO');
export const CATEGORY_FEATURED_STORES = asyncActionType('CATEGORY_FEATURED_STORES');

