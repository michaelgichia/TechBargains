/*
 *
 * MerchantPages reducer
 *
 */

import { 
  SINGLE_STORE_DEALS,
  SINGLE_STORE_COUPONS,
  SINGLE_STORE_INFO,
} from './constants';

const initialState = {
  merchandize: [],
  coupons: [],
  info: [],
  errors: []
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

    case SINGLE_STORE_COUPONS.SUCCESS:
      return {
        ...state,
        coupons: action.coupons,
      };

    case SINGLE_STORE_COUPONS.ERROR:
      return {
        ...state,
        errors: action.errors,
      };

    case SINGLE_STORE_INFO.SUCCESS:
      return {
        ...state,
        info: action.info,
      };

    case SINGLE_STORE_INFO.ERROR:
      return {
        ...state,
        errors: action.errors,
      };

    default:
      return state;
  }
}

export default merchantPagesReducer;
