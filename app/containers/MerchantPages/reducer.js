/*
 *
 * MerchantPages reducer
 *
 */

import { 
  SINGLE_STORE_DEALS,
  SINGLE_STORE_COUPONS,
  SINGLE_STORE_INFO,
  LATEST_STORES
} from './constants';

const initialState = {
  merchandize: [],
  coupons: [],
  info: [],
  latestStores: [],
  errors: []
};

function merchantPagesReducer(state = initialState, action) {
  switch (action.type) {

    case SINGLE_STORE_DEALS.SUCCESS:
      return {
        ...state,
        merchandize: action.merchandize,
      };

    case SINGLE_STORE_COUPONS.SUCCESS:
      return {
        ...state,
        coupons: action.coupons,
      };

    case SINGLE_STORE_INFO.SUCCESS:
      return {
        ...state,
        info: action.info,
      };

    case LATEST_STORES.SUCCESS:
      return {
        ...state,
        latestStores: action.latestStores,
      };

    default:
      return state;
  }
}

export default merchantPagesReducer;
