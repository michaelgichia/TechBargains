/*
 *
 * FlashMessage constants
 *
 */

const asyncActionType = (type) => ({
  OPEN: `${type}_OPEN`,
  CLOSE: `${type}_CLOSE`,
});

// Action types
export const FLASH_MESSAGE = asyncActionType('FLASH_MESSAGE');