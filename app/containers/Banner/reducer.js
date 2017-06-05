/*
 *
 * CategoryPages reducer
 *
 */

import { DELETE_BANNER } from './constants';

const initialState = {
  banners: [],
  errors: '',
  message: '',
};

function bannerReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_BANNER.SUCCESS:
      return {
        ...state,
        categories: action.categories,
      };

    case DELETE_BANNER.ERROR:
      return {
        ...state,
        errors: action.errors,
        categories: action.categories,
      };

    default:
      return state;
  }
}

export default bannerReducer;
