/*
 *
 * Coupon constants
 *
 */

export const DEFAULT_ACTION = 'app/Test/DEFAULT_ACTION';

const asyncActionType = (type) => ({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`,
});

// API
export const fetchAPI = '/public-api/all/featured-coupons';

// Action types
export const COUPON = asyncActionType('COUPON');

