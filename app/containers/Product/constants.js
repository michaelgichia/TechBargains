/*
 *
 * Products constants
 *
 */

export const DEFAULT_ACTION = 'app/Products/DEFAULT_ACTION';

const asyncActionType = (type) => ({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`,
});

// API
export const dealsBaseAPI = '/public-api/all/trending-deals';

// Action types
export const TRENDING_DEALS = asyncActionType('TRENDING_DEALS');
