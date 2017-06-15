/*
 *
 * SubCategoryBackendEdit constants
 *
 */


const asyncActionType = (type) => ({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`,
});

// API
export const fetchSubCategoryAPI = '/public-api/subcategory';
export const editSubCategoryAPI = '/api/subcategory';
export const deleteSubCategoryAPI = '/api/subcategory';


// Action types
export const SUB_CATEGORY_ITEM = asyncActionType('SUB_CATEGORY_ITEM');

