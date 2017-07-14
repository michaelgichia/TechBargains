/*
 *
 * NavBar reducer
 *
 */

import {
  NAVITEMS,
  STORE_ITEMS
} from './constants';

const initialState = {
  navbar: [],
  stores: [],
  errors: '',
};

function navBarReducer(state = initialState, action) {
  switch (action.type) {
    case NAVITEMS.SUCCESS:
      return {
        ...state,
        navbar: action.navbar,
      };

    case STORE_ITEMS.SUCCESS:
      return {
        ...state,
        stores: action.stores,
      };

    default:
      return state;
  }
}

export default navBarReducer;
