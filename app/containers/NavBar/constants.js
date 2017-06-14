/*
 *
 * NavBar constants
 *
 */

const asyncActionType = (type) => ({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`,
});

// API
export const navItemsBaseAPI = '/public-api/all/subcategory';

// Action types
export const NAVITEMS = asyncActionType('NAVITEMS');
