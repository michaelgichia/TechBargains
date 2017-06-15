export const SUBCATEGORY_SUCCESS = 'SUBCATEGORY_SUCCESS';
export const SUBCATEGORY_ERROR = 'SUBCATEGORY_ERROR';

const asyncActionType = (type) => ({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`,
});

// API
export const createCategoryAPI = '/api/subcategory/create';
export const categoryAPI = '/public-api/category';
export const subCategoryAPI = '/public-api/subcategory';

// Action types
export const SUBCATEGORY = asyncActionType('SUBCATEGORY');
export const SUBCATEGORY_SUBCATEGORY_ITEM = asyncActionType('SUBCATEGORY_SUBCATEGORY_ITEM');
export const SUBCATEGORY_CATEGORY_ITEMS = asyncActionType('SUBCATEGORY_CATEGORY_ITEMS');
