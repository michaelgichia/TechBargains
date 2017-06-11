/*
 *
 * MerchantPages reducer
 *
 */

import { SINGLE_STORE, baseAPI } from './constants';

const initialState = {
  merchandize: [],
  errors: ''
};

function merchantPagesReducer(state = initialState, action) {
  switch (action.type) {
    case SINGLE_STORE.SUCCESS:
      return {
        ...state,
        merchandize: action.merchandize,
      };

    case SINGLE_STORE.ERROR:
      return {
        ...state,
        errors: action.errors,
      };

    default:
      return state;
  }
}

export default merchantPagesReducer;
