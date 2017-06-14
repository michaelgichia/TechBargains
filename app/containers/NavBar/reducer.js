/*
 *
 * NavBar reducer
 *
 */

import {
  NAVITEMS,
} from './constants';

const initialState = {
  navItems: [],
  errors: '',
};

function navBarReducer(state = initialState, action) {
  switch (action.type) {
    case NAVITEMS.SUCCESS:
      return {
        ...state,
        navItems: action.navItems,
      };

    case NAVITEMS.ERROR:
      return {
        ...state,
        errors: action.errors,
      };

    default:
      return state;
  }
}

export default navBarReducer;
