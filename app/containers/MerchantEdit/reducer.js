/*
 *
 * MerchantEdit reducer
 *
 */

import {
  MerchantEdit,
  MERCHANT_EDIT_CATEGORIES
} from './constants';

const initialState = {
  isFeatured: null,
  about: '',
  categories: [],
  merchant: {},
};

function merchantEditReducer(state = initialState, action) {
  switch (action.type) {

    case MerchantEdit.SUCCESS:
      return {
        ...state,
        isFeatured: action.merchant.isFeatured,
        about: action.merchant.about,
        merchant: action.merchant
      };

    case MERCHANT_EDIT_CATEGORIES.SUCCESS:
      return {
        ...state,
        categories: action.categories,
      };

    default:
      return state;
  }
}

export default merchantEditReducer;
