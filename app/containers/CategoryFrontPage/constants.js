/*
 *
 * CategoryFrontPage constants
 *
 */

const asyncActionType = (type) => ({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`,
});

// API
export const dealsBaseAPI = '/public-api/all/specific-category';
export const couponsBaseAPI = '/public-api/all/category-coupons';

// Action types
export const CATEGORY_ITEMS = asyncActionType('CATEGORY_ITEMS');
export const CATEGORY_COUPONS = asyncActionType('CATEGORY_COUPONS');

