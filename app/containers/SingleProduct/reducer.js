/*
 *
 * SingleProduct reducer
 *
 */

import {
  SINGLE_PRODUCT,
} from './constants';

const initialState = {
  product: {},
};

function singleProductReducer(state = initialState, action) {
  switch (action.type) {
    
    case SINGLE_PRODUCT.SUCCESS:
      return {
        ...state,
        product: action.product
      };

    default:
      return state;
  }
}

export default singleProductReducer;
