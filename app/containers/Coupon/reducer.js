/*
 *
 * Test reducer
 *
 */

import { COUPON } from './constants';

const initialState = {
  coupons: [],
  errors: ''
};

function couponReducer(state = initialState, action) {
  switch (action.type) {
    case COUPON.SUCCESS:
      return {
        ...state,
        coupons: action.coupons
      };

    case COUPON.ERROR:
      return {
        ...state,
        errors: action.errors
      };

    default:
      return state;
  }
}

export default couponReducer;
