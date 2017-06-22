export const DEFAULT_ACTION = 'app/CategoryPages/DEFAULT_ACTION';

const asyncActionType = (type) => ({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
});

// API
export const createAPI = '/api/category/create';


// Action types
export const CATEGORY_PAGE_CREATE = asyncActionType('CATEGORY_PAGE_CREATE');
