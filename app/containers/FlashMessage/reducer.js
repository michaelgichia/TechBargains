/*
 *
 * FlashMessage reducer
 *
 */

import {
  FLASH_MESSAGE,
} from './constants';

const initialState = {
  openFlash: false,
  errors: "",
};

function flashMessageReducer(state = initialState, action) {
  switch (action.type) {

    case FLASH_MESSAGE.OPEN:
      return {
        ...state,
        errors: action.errors,
        openFlash: true,
      };

    case FLASH_MESSAGE.CLOSE:
      return {
        ...state,
        openFlash: false,
      };

    default:
      return state;
  }
}

export default flashMessageReducer;
