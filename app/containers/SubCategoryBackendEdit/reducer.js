/*
 *
 * SubCategoryBackendEdit reducer
 *
 */

import {
  SUB_CATEGORY_ITEM,
} from './constants';

const initialState = {
  subCategory: {},
  errors: "",
};

function subCategoryBackendEditReducer(state = initialState, action) {
  switch (action.type) {
    case SUB_CATEGORY_ITEM.SUCCESS:
      return {
        ...state,
        subCategory: action.subCategory,
      };

    case SUB_CATEGORY_ITEM.ERROR:
      return {
        ...state,
        errors: action.errors,
      };

    default:
      return state;
  }
}

export default subCategoryBackendEditReducer;
