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
export const dealsBaseAPI = '/public-api/all/specific-stores';
export const couponBaseAPI = '/public-api/all/specific-coupons';
export const infoBaseAPI = '/public-api/merchant';

// Action types
export const SINGLE_STORE_DEALS = asyncActionType('SINGLE_STORE_DEALS');
export const SINGLE_STORE_COUPONS = asyncActionType('SINGLE_STORE_COUPONS');
export const SINGLE_STORE_INFO = asyncActionType('SINGLE_STORE_INFO');
