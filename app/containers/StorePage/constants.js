/*
 *
 * StoresPage constants
 *
 */

const asyncActionType = (type) => ({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
});

// API
export const fetctCategoriesAPI = '/public-api/subcategory';
export const postMerchantAPI = "/api/merchant/create";

// Action types
export const STORES_CATEGORIES = asyncActionType('STORES_CATEGORIES');
