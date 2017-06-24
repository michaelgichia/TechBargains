/*
 *
 * SingleProduct constants
 *
 */

const asyncActionType = (type) => ({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
});

// API
export const productFetchAPI = '/public-api/item';
export const treandingDealsAPI = '/public-api/all/related-products';

// Action types
export const SINGLE_PRODUCT = asyncActionType('SINGLE_PRODUCT');
export const RELATED_PRODUCT = asyncActionType('RELATED_PRODUCT');
