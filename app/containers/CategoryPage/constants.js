const asyncActionType = (type) => ({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`,
});

// API
export const deleteAPI = '/api/category';
export const fetchAPI = '/public-api/category';

// Action types
export const DELETE_CATEGORY = asyncActionType('DELETE_CATEGORY');
