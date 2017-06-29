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
  navItems: [],
  stores: [],
  errors: '',
};

function navBarReducer(state = initialState, action) {
  switch (action.type) {
    case NAVITEMS.SUCCESS:
      return {
        ...state,
        navItems: action.navItems,
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
