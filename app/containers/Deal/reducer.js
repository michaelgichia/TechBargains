/*
 *
 * Test reducer
 *
 */

import { DEALS } from './constants';

const initialState = {
  deals: [],
  errors: '',
};

function dealReducer(state = initialState, action) {
  switch (action.type) {
    case DEALS.SUCCESS:
      return {
        ...state,
        deals: action.deals,
      };

    case DEALS.ERROR:
      return {
        ...state,
        errors: action.errors,
      };

    default:
      return state;
  }
}

export default dealReducer;
