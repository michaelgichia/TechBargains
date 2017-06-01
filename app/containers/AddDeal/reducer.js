/*
 *
 * Test reducer
 *
 */
import {
    ITEMS_RECEIVED_ERROR,
} from './constants';

const initialState = {
  errors: [],
};

function addDealReducer(state = initialState, action) {
  switch (action.type) {

    case ITEMS_RECEIVED_ERROR:
      return {
        ...state,
        errors: action.errors,
      };

    default:
      return state;
  }
}

export default addDealReducer;
