/*
 *
 * CategoryPages reducer
 *
 */

import { DELETE_CATEGORY } from './constants';

const initialState = {
    categories: [],
    errors: '',
    message: '',
};

function categoryPageReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_CATEGORY.SUCCESS:
      return {
          ...state,
          categories: action.categories,
      };

    case DELETE_CATEGORY.ERROR:
      return {
          ...state,
          errors: action.errors,
        categories: action.categories,
      };

    default:
      return state;
  }
}

export default categoryPageReducer;
