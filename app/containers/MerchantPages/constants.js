/*
 *
 * MerchantPages constants
 *
 */

const asyncActionType = (type) => ({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`,
});

// API
export const baseAPI = '/public-api/all/specific-stores';

// Action types
export const SINGLE_STORE = asyncActionType('SINGLE_STORE');
