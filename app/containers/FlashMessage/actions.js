/*
 *
 * FlashMessage actions
 *
 */

import {
  FLASH_MESSAGE,
} from './constants';

export const handleOpenFlash = (errors) => (dispatch) =>
  dispatch({
    type: FLASH_MESSAGE.OPEN,
    errors,
  })

export const handleCloseFlash = () => ({
  type: FLASH_MESSAGE.CLOSE
})
