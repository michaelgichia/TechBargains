/*
 *
 * Stores constants
 *
 */

const asyncActionType = (type) => ({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`,
});

// API
export const fetchAPI = '/public-api/all/featured-stores';

// Action types
export const STORES = asyncActionType('STORES');
