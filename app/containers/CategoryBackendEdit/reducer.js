/*
 *
 * CategoryBackendEdit reducer
 *
 */

import {
  CATEGORY_ITEM,
} from './constants';

const initialState = {
  category: [],
  errors: ''
};

function categoryBackendEditReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_ITEM.SUCCESS:
      return {
        ...state,
        category: action.category,
      };

    case CATEGORY_ITEM.ERROR:
      return {
        ...state,
        errors: action.errors,
      };

    default:
      return state;
  }
}

export default categoryBackendEditReducer;
