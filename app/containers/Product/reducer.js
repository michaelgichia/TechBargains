/*
 *
 * Products reducer
 *
 */

import { 
  TRENDING_DEALS,
  dealsBaseAPI, 
} from './constants';

const initialState = {
  products: [],
  errors: '',
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case TRENDING_DEALS.SUCCESS:
      return {
        ...state,
        products: action.products,
      };

    case TRENDING_DEALS.ERROR:
      return {
        ...state,
        errors: action.errors,
      };

    default:
      return state;
  }
}

export default productReducer;
