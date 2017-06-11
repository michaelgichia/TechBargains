/*
 *
 * ReactModal constants
 *
 */
 
const asyncActionType = (type) => ({
  OPEN: `${type}_OPEN`,
  CLOSE: `${type}_CLOSE`,
});

// Action types
export const MODAL = asyncActionType('MODAL');
