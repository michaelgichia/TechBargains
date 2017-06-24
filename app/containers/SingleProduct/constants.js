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

// Action types
export const SINGLE_PRODUCT = asyncActionType('SINGLE_PRODUCT');
