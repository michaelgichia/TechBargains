/*
 *
 * EditItem reducer
 *
 */

import {
  ITEM_RECEIVED_SUCCESS,
    ITEM_RECEIVED_ERROR,
} from './constants';

const initialState = {
  itemData: {
    name: '',
    coupon: '',
    features: [],
    backlink: '',
    percentage: '',
    merchant: '',
    category: '',
    subCategory: '',
    expire: {},
  },
  errors: [],
  message: '',
};

function editItemReducer(state = initialState, action) {
  switch (action.type) {

    case ITEM_RECEIVED_SUCCESS: {
      const featuresString = action.itemData.features.join(' ');
      action.itemData.features = featuresString;
      return {
        ...state,
        itemData: action.itemData,
      };
    }

    case ITEM_RECEIVED_ERROR:
      return {
        ...state,
        errors: action.errors,
      };

    default:
      return state;
  }
}

export default editItemReducer;
