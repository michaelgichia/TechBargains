/*
 *
 * NavBar constants
 *
 */

const asyncActionType = (type) => ({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
});

// API
export const navItemsBaseAPI = '/public-api/all/subcategory';
export const fetchStoresAPI = '/public-api/all/stores';

// Action types
export const NAVITEMS = asyncActionType('NAVITEMS');
export const STORE_ITEMS = asyncActionType('STORE_ITEMS');
