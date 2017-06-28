/*
 *
 * MerchantEdit constants
 *
 */

export const DEFAULT_ACTION = 'app/MerchantEdit/DEFAULT_ACTION';


const asyncActionType = (type) => ({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
});

// API
export const fetchAPI = '/public-api/merchant';
export const createAPI = '/api/merchant/update';
export const fetctCategoriesAPI = '/public-api/category';

// Action types
export const MerchantEdit = asyncActionType('MerchantEdit');

export const MERCHANT_EDIT_CATEGORIES = asyncActionType('MERCHANT_EDIT_CATEGORIES');
