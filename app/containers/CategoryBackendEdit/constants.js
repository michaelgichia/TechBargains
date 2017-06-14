/*
 *
 * CategoryBackendEdit constants
 *
 */

const asyncActionType = (type) => ({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`,
});

// API
export const updateAPI = '/api/category';
export const fetchAPI = '/public-api/category';
export const deleteAPI = '/api/category';


// Action types
export const CATEGORY_ITEM = asyncActionType('CATEGORY_ITEM');
export const DELETE_CATEGORY = asyncActionType('DELETE_CATEGORY');

