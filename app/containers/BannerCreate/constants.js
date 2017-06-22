const asyncActionType = (type) => ({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
});

// API
export const createApi = '/api/banner/create';


// Action types
export const BANNER_CREATE = asyncActionType('BANNER_CREATE');
