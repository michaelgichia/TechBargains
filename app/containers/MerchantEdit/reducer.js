/*
 *
 * MerchantEdit reducer
 *
 */

import {
  MerchantEdit,
} from './constants';

const initialState = {
  isFeatured: null,
  about: '',
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

    default:
      return state;
  }
}

export default merchantEditReducer;
