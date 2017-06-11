/*
 *
 * ReactModal reducer
 *
 */

import {
  MODAL,
} from './constants';

const initialState = {
  open: false,
};

function reactModalReducer(state = initialState, action) {
  switch (action.type) {
    case MODAL.OPEN:
      return {
        ...state,
        open: true,
      };

    case MODAL.CLOSE:
      return {
        ...state,
        open: false,
      };

    default:
      return state;
  }
}

export default reactModalReducer;
