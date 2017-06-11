/*
 *
 * MerchantPages reducer
 *
 */

import { SINGLE_STORE_DEALS, baseAPI } from './constants';

const initialState = {
  merchandize: [],
  errors: ''
};

function merchantPagesReducer(state = initialState, action) {
  switch (action.type) {
    case SINGLE_STORE_DEALS.SUCCESS:
      return {
        ...state,
        merchandize: action.merchandize,
      };

    case SINGLE_STORE_DEALS.ERROR:
      return {
        ...state,
        errors: action.errors,
      };

    default:
      return state;
  }
}

export default merchantPagesReducer;
