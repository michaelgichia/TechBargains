const asyncActionType = (type) => ({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
});

// API
export const deleteApi = '/api/banner/delete';


// Action types
export const DEFAULT_ACTION = asyncActionType('DEFAULT_ACTION');
